import { Container } from '@/components/Container/index.tsx';
import { ILink } from '@/components/ILink/ILink.tsx';
import { ROUTES } from '@/routes.tsx';

import s from './index.module.scss';

export const NavBar = () => {
  return (
    <nav className={s.wrap}>
      <Container />
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
