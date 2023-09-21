import { classNames } from "@mylifeline/utilities";

import type { CSSProperties, ReactNode } from "react";

type TextProps = {
  as?: keyof HTMLElementTagNameMap;
  inline?: boolean;
  dataTestId?: string;
  style?: CSSProperties;
  className?: string;
  children: ReactNode;
};

export const Text = ({
  as: As = "p",
  inline = false,
  dataTestId,
  style,
  className,
  children,
}: TextProps) => (
  <As
    data-testid={dataTestId}
    style={style}
    className={classNames([
      "prose",
      inline ? "inline-flex items-center" : "flex items-center",
      className || "",
    ])}
  >
    {children}
  </As>
);
