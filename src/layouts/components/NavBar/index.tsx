import { FC } from 'react';

import { LinkClass } from '@/components';
import { RouteItem } from '@/models/route-item.ts';

import s from './index.module.scss';

interface NavBarProps {
  items: RouteItem[];
}

export const NavBar: FC<NavBarProps> = ({ items }) => {
  return (
    <nav className={s.wrap}>
      {items.map((elem) => (
        <LinkClass key={elem.path} to={elem.path} classNameActive={s.active}>
          {elem.element ? elem.element : elem.name}
        </LinkClass>
      ))}
    </nav>
  );
};
