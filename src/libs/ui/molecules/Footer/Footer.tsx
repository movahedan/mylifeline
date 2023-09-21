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
  <footer style={style} className={classNames([className])}>
    <Text as="p" className="mt-24 prose-badge">
      {footerContent.copyRight}
    </Text>

    {children}
  </footer>
);
