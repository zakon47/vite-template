import s from "./index.module.scss";
import { ROUTES } from "@/routes.tsx";
import { ILink } from "@/components/ILink/ILink.tsx";

export const NavBar = () => {
  return (
    <nav className={s.wrap}>
      <ul className={s.wrap__ul}>
        <li>
          <ILink to={ROUTES.home.path} classNameActive={s.active}>
            Home
          </ILink>
        </li>
        <li>
          <ILink to={ROUTES.posts.path} classNameActive={s.active}>
            Posts
          </ILink>
        </li>
      </ul>
    </nav>
  );
};
