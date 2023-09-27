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
        "max-w-764 flex justify-center items-center w-full py-32 px-24 mx-auto",
        className,
      ])}
    >
      <ul className="flex w-full space-x-32">
        <li>
          <Link href={routes.index} className="inline-block p-12">
            Home
          </Link>
        </li>
        <li>
          <Link href={routes.goals} className="inline-block p-12">
            Goals
          </Link>
        </li>
      </ul>
    </nav>
  );
};
