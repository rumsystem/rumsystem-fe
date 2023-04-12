import classNames from 'classnames';
import { observer } from 'mobx-react-lite';
import { titleService } from '~/service';
import { lang } from '../../lang';
import { ChevronRight } from '@mui/icons-material';
import { Button } from '@mui/material';

export const HomepageDevelopers = observer(() => {
  titleService.useSetTitle('Developers');

  return (
    <div className="main-box flex-col justify-center items-stretch pb-24">
      <div className="w-full bg-black/70 mx-auto min-h-screen">
        <div className="w-full max-w-[1050px] px-5 py-7 mx-auto">
          <div className="flex gap-y-4 mb:flex-col justify-around items-center mt-10 mb:mt-4">
            <div className="text-main text-24">
              {lang.developers.docs.intro.left}
            </div>
            <div className="text-gray-d1 text-16 max-w-[420px]">
              {lang.developers.docs.intro.right}
            </div>
          </div>
          <div className="grid grid-cols-2 mb:grid-cols-1 gap-4 mt-16 mb:mt-10">
            {lang.developers.docs.sections.map((v, i) => (
              <a
                className="!no-underline flex"
                href={[
                  'https://docs.rumsystem.net/docs/en/',
                  'https://github.com/rumsystem/',
                ][i]}
                target="_blank"
                rel="noopener"
                key={i}
              >
                <Button
                  className={classNames(
                    'flex items-center flex-1 pb-4 pt-3 px-6 border border-white/40 h-full',
                    'font-light normal-case rounded-none font-default text-start',
                  )}
                  variant="outlined"
                >
                  <div className="flex-1 flex-col h-full">
                    <div className="text-link-soft text-18">
                      {v.title}
                    </div>
                    <div className="flex items-center mt-1 flex-1 text-14 text-gray-b0">
                      {v.desc}
                    </div>
                  </div>
                  <div className="flex-none pl-4">
                    <ChevronRight className="text-gray-b0" />
                  </div>
                </Button>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
});
