import Link from "next/link";

import { routes } from "@mylifeline/constants";
import { classNames } from "@mylifeline/utilities";

import type { CSSProperties } from "react";

export type NavbarProps = {
  className?: string;
  style?: CSSProperties;
};

export const Navbar = ({ className, style }: NavbarProps) => {
  return (
    <nav
      style={style}
      className={classNames([
        "navbar",
        "flex justify-center items-center",
        className,
      ])}
    >
      <ul className="space-x-32">
        <Link href={routes.index}>Home</Link>
        <Link href={routes.goals}>Goals</Link>
      </ul>
    </nav>
  );
};
