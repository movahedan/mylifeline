import { footerContent } from "@mylifeline/contents/footer";
import { Text } from "@mylifeline/ui/atoms";
import { classNames } from "@mylifeline/utilities";

import type { CSSProperties, ReactNode } from "react";

export type FooterProps = {
  style?: CSSProperties;
  className?: string;
  children?: ReactNode;
};

export const Footer = ({ style, className, children }: FooterProps) => (
  <footer
    style={style}
    className={classNames(["footer", "w-full flex justify-center", className])}
  >
    <Text as="p" className="prose-badge">
      {footerContent.copyRight}
    </Text>

    {children}
  </footer>
);
