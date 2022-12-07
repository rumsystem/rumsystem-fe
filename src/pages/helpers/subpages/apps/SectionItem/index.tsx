import { forwardRef, ReactNode } from 'react';
import classNames from 'classnames';
import { observer } from 'mobx-react-lite';

interface SectionProps {
  className?: string
  children?: ReactNode
}

export const SectionItem = observer(forwardRef<HTMLDivElement, SectionProps>((props, ref) => {
  const children = Array.isArray(props.children) ? props.children : [props.children];
  const sections = ['logo', 'title', 'type', 'subtitle', 'icons', 'desc', 'image'] as const;
  type Keys = typeof sections[number];
  const map: Record<Keys, ReactNode> = Object.fromEntries(
    sections.map((v) => [v, children.find((u: any) => u.key === v)]),
  ) as any;
  return (
    <div
      className={classNames(
        'flex-col bg-black/70 justify-center max-w-[1260px] w-full mt-14 mx-auto gap-y-6 py-6',
        props.className,
      )}
      ref={ref}
    >
      <div className="flex mb:flex-col flex-1 items-center gap-x-6 gap-y-6 px-12 mb:px-8">
        {map.logo}
        <div className="flex-col gap-y-2 mb:w-full">
          <div className="text-main text-30">
            {map.title}
            <span className="border rounded-full text-12 text-gray-d1 px-3 py-px ml-3 align-[3px]">
              {map.type}
            </span>
          </div>
          <div className="text-18 text-gray-d1">
            {map.subtitle}
          </div>
        </div>
        <div className="flex mb:flex-wrap flex-1 gap-4 justify-end mb:justify-center">
          {map.icons}
        </div>
      </div>

      <div className="flex mb:flex-col px-8">
        <div className="">
          {map.desc}
        </div>
        {map.image}
      </div>
    </div>
  );
}));
