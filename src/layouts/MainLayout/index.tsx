import { NavBar } from '@layouts/components/NavBar';
import clsx from 'clsx';
import { FC, PropsWithChildren } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, Outlet } from 'react-router-dom';

import viteLogo from '/vite.svg';
import reactLogo from '@/assets/react.svg';
import { RouteItem } from '@/models/route-item.ts';
import { ROUTES } from '@/routes.tsx';
import { LanguageSwitcher } from '@/widgets';

import s from './index.module.scss';

interface MainLayoutProps {
  className?: string;
  classNameHeader?: string;
  classNameBody?: string;
  classNameFooter?: string;
}

const list: RouteItem[] = [
  {
    path: ROUTES.home.path,
    name: ROUTES.home.titleLang || ROUTES.home.title,
  },
  {
    path: ROUTES.posts.path,
    name: ROUTES.posts.titleLang || ROUTES.posts.title,
  },
  {
    ...ROUTES.zustand,
    name: ROUTES.zustand.titleLang || ROUTES.zustand.title,
    element: <div>zustand</div>,
  },
];

export const MainLayout: FC<PropsWithChildren<MainLayoutProps>> = ({
  className,
}) => {
  const { t } = useTranslation();
  return (
    <div className={clsx(s.wrap, className)}>
      <div className={s.box}>
        <div className={s.box__left}>
          <div className={s.left}>
            <Link className={s.left__logo} to={ROUTES.home.path}>
              VITE
            </Link>
            <div className={s.left__icons}>
              <a href="https://vitejs.dev" target="_blank">
                <img src={viteLogo} className="logo" alt="Vite logo" />
              </a>
              <a href="https://react.dev" target="_blank">
                <img src={reactLogo} className="logo react" alt="React logo" />
              </a>
            </div>
            <div className={s.left__nav}>
              <NavBar items={list} />
            </div>
            <div className={s.left__bottom}>{t('version')}</div>
          </div>
        </div>
        <div className={clsx(s.box__right)}>
          <div className={s.content}>
            <div className={s.content__top}>
              Lang:
              <LanguageSwitcher className={s.content__top_lang} />
            </div>
            <div className={s.content__bottom}>
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
