"use client";

import ErrorPage from "./error";

import type { ErrorPageProps } from "./error";

export default function GlobalError(props: ErrorPageProps) {
  return (
    <html lang="en">
      <body>
        <ErrorPage {...props} />
      </body>
    </html>
  );
}
