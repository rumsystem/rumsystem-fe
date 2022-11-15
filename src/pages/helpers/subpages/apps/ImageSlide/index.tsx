import { useEffect } from 'react';
import classNames from 'classnames';
import { action } from 'mobx';
import { observer, useLocalObservable } from 'mobx-react-lite';
import { ImgBox } from '~/components';
import { useLessThan } from '~/utils';

interface ImageSlideProps {
  images: Array<string>
  onImageClick?: (url: string) => unknown
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
          src={props.images[0]}
          alt=""
          width="772"
          height="580"
        />

        {props.images.map((v, i) => (
          <img
            className="absolute pc:w-[770px] pc:h-auto mb:w-full mb:h-auto duration-300 top-0"
            style={{
              transform: isMobile
                ? `translateX(${(i - state.imageIndex) * 100}%)`
                : `translateY(${(i - state.imageIndex) * 100}%)`,
            }}
            src={v}
            alt=""
            key={i}
            onClick={() => props.onImageClick?.(v)}
          />
        ))}
      </div>
    </div>
  </>);
});
