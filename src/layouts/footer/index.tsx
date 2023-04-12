import { observer } from 'mobx-react-lite';
import IconMixin from '~/icons/icon_mixin.svg?fill-icon';
import { lang } from '~/pages/helpers/lang';

export const Footer = observer(() => {
  lang.useLang();
  if (!lang.ready) { return null; }
  return (
    <div className="flex mb:flex-col justify-between items-center w-full max-w-[1200px] gap-4 mx-auto py-8 text-14 mb:text-12 bg-white">
      <div className="flex gap-x-14 text-16">
        <a
          className="text-[#67696d]"
          href="https://docs.rumsystem.net/docs/en/"
          target="_blank"
          rel="noopener"
        >
          {lang.footer.docs}
        </a>
        <a
          className="text-[#67696d]"
          href="https://github.com/rumsystem/"
          target="_blank"
          rel="noopener"
        >
          GitHub
        </a>
      </div>

      <div className="flex mb:flex-col gap-x-8 gap-y-4">
        <div className="flex flex-center">
          <a
            className="text-[#67696d]"
            href="https://rum.mixinbots.com/join?c=NpfaKF"
            target="_blank"
            rel="noopener"
          >
            <IconMixin
              className="text-22 text-[#67696d]"
            />
          </a>
        </div>
        <div>
          RumSystem © 2021 ~ 2023, All rights reserved.
        </div>
      </div>
    </div>
  );
});
