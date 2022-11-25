import { useEffect, useMemo } from 'react';
import classNames from 'classnames';
import { action } from 'mobx';
import { observer, useLocalObservable } from 'mobx-react-lite';
import { ImgBox } from '~/components';
import { useLessThan } from '~/utils';

interface ImageSlideProps {
  images: Array<string> | Array<{ x1: string, x2?: string, x3?: string }>
  onImageClick?: (img: HTMLImageElement) => unknown
}

export const ImageSlide = observer((props: ImageSlideProps) => {
  const state = useLocalObservable(() => ({
    imageIndex: 0,
    timerId: 0,
  }));
  const isMobile = useLessThan(960);

  const handleStopSlide = () => {
    window.clearTimeout(state.timerId);
  };

  const handleResumeSlide = () => {
    handleStopSlide();
    state.timerId = window.setTimeout(() => {
      nextSlide();
    }, 2500);

    const nextSlide = action(() => {
      const newIndex = state.imageIndex === props.images.length - 1
        ? 0
        : state.imageIndex + 1;
      state.imageIndex = newIndex;

      state.timerId = window.setTimeout(() => {
        nextSlide();
      }, 2500);
    });
  };

  const handleChangeImage = action((index: number) => {
    state.imageIndex = index;
  });

  const images = useMemo(() => {
    if (!props.images.length) { return []; }
    return props.images.map((v) => {
      const item = typeof v === 'string'
        ? { src: v, srcSet: '' }
        : {
          src: v.x1,
          srcSet: [[v.x2, '2x'], [v.x3, '3x']].filter((v) => v[0]).map((v) => v.join(' ')).join(', '),
        };
      return item;
    });
  }, [props.images]);

  useEffect(() => () => {
    window.clearTimeout(state.timerId);
  }, []);

  return (<>
    <div
      className="flex-col mb:flex-row flex-center mb:mt-4 px-4"
      onMouseEnter={handleStopSlide}
      onMouseLeave={handleResumeSlide}
    >
      {Array(props.images.length).fill(0).map((_, i) => (
        <div
          className="h-6 w-6 flex flex-center cursor-pointer pc:my-2 mb:mx-2"
          key={i}
          onClick={() => handleChangeImage(i)}
        >
          <div
            className={classNames(
              'rounded-full',
              state.imageIndex === i && 'h-[7px] w-[7px] bg-transparent dot-active',
              state.imageIndex !== i && 'h-2 w-2 bg-link-soft',
            )}
            key={i}
          />
        </div>
      ))}
    </div>

    <div
      className="flex flex-center flex-none relative overflow-hidden cursor-pointer pc:min-w-[600px]"
      onMouseEnter={handleStopSlide}
      onMouseLeave={handleResumeSlide}
    >
      <div className="relative overflow-hidden">
        <ImgBox
          className="flex-none pc:w-[770px] pc:h-auto mb:w-full mb:h-auto pointer-events-none"
          src={images[0].src}
          srcSet={images[0].srcSet}
          alt=""
          width="772"
          height="580"
        />

        {images.map((v, i) => (
          <img
            className="absolute pc:w-[770px] pc:h-auto mb:w-full mb:h-auto duration-300 top-0"
            style={{
              transform: isMobile
                ? `translateX(${(i - state.imageIndex) * 100}%)`
                : `translateY(${(i - state.imageIndex) * 100}%)`,
            }}
            src={v.src}
            srcSet={v.srcSet}
            alt=""
            key={i}
            onClick={(e) => props.onImageClick?.(e.currentTarget)}
          />
        ))}
      </div>
    </div>
  </>);
});
