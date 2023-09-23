import "./globals.css";
import { Outfit } from "next/font/google";

import {
  websiteName,
  websiteBaseUrl,
  websiteDescription,
} from "@mylifeline/contents/website";
import { Footer, Navbar } from "@mylifeline/ui/molecules";
import { classNames } from "@mylifeline/utilities";

import type { Metadata } from "next";
import type { ReactNode } from "react";

const outfitFont = Outfit({ subsets: ["latin"] });

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" className="h-full">
      <body
        className={classNames([
          "bg-white flex flex-col h-full",
          outfitFont.className,
        ])}
      >
        <header>
          <Navbar />
        </header>
        <div className="flex flex-col flex-1">{children}</div>
        <Footer />
      </body>
    </html>
  );
}

export const metadata: Metadata = {
  title: websiteName,
  description: websiteDescription,
  viewport:
    "width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=5,user-scalable=yes,viewport-fit=cover",
  robots: {
    index: false,
    follow: false,
  },
  metadataBase: new URL(websiteBaseUrl),
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/en-US",
    },
  },
  openGraph: {
    type: "website",
    locale: "en_IE",
    siteName: websiteName,
    images: "/favicon.ico",
  },
  manifest: "/manifest.json",
  themeColor: "#444444",
  appleWebApp: {
    capable: true,
    title: websiteName,
    statusBarStyle: "black-translucent",
  },
  icons: [
    { rel: "shortcut icon", url: "/favicon.ico" },
    { rel: "apple-touch-icon", sizes: "180x180", url: "/favicon.ico" },
    {
      rel: "icon",
      type: "image/png",
      sizes: "96x96",
      url: "/calendar-android-96x96.png",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "72x72",
      url: "/calendar-android-72x72.png",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "32x32",
      url: "/calendar-web-32x32.png",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "16x16",
      url: "/calendar-web-16x16.png",
    },
  ],
};
