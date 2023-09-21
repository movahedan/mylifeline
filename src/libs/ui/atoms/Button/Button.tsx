import { classNames } from "@mylifeline/utilities";

import type { CSSProperties, ReactNode } from "react";

type ButtonProps = {
  icon?: ReactNode;
  dataTestId?: string;
  style?: CSSProperties;
  className?: string;
  children: ReactNode;
};

export const Button = ({
  icon,
  dataTestId,
  style,
  className,
  children,
}: ButtonProps) => (
  <button
    data-testid={dataTestId}
    style={style}
    className={classNames([
      "inline-flex prose prose-button py-16 px-40",
      "border rounded-lg outline-0",
      "transition-all duration-300",
      className || "",
    ])}
  >
    {icon && <span className="mr-20">{icon}</span>}
    {children}
  </button>
);
