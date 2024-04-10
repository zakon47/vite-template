import clsx from "clsx";
import { FC, PropsWithChildren } from "react";

import s from "./index.module.scss";
import { NavBar } from "@layouts/components/NavBar";
import { Link, Outlet } from "react-router-dom";
import reactLogo from "@/assets/react.svg";
import viteLogo from "/vite.svg";
import { ROUTES } from "@/routes.tsx";

interface MainLayoutProps {
  className?: string;
  classNameHeader?: string;
  classNameBody?: string;
  classNameFooter?: string;
}

export const MainLayout: FC<PropsWithChildren<MainLayoutProps>> = ({
  className,
}) => {
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
              <NavBar />
            </div>
            <div className={s.left__bottom}>Template</div>
          </div>
        </div>
        <div className={clsx(s.box__right)}>
          <div className={s.content}>
            <div className={s.content__top}>Panel</div>
            <div className={s.content__bottom}>
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
