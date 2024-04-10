import clsx from "clsx";
import { NavLink, LinkProps } from "react-router-dom";
import { FC, PropsWithChildren } from "react";

interface ILinkProps extends Omit<LinkProps, "className"> {
  className?: string;
  classNameActive?: string;
}

export const ILink: FC<PropsWithChildren<ILinkProps>> = ({
  to,
  className,
  classNameActive,
  children,
  ...rest
}) => {
  return (
    <NavLink
      to={to}
      {...rest}
      className={({ isActive }) => clsx(className, isActive && classNameActive)}
    >
      {children}
    </NavLink>
  );
};
