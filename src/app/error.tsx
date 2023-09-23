"use client";

import { useEffect } from "react";

export type ErrorPageProps = {
  error: Error;
  reset: () => void;
};

export default function ErrorPage({ error, reset }: ErrorPageProps) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center flex-1">
      <h2>Something went wrong!</h2>
      <button
        data-testid="reset-button"
        onClick={() => reset()}
        className="p-8 mt-8 rounded bg-slate-300"
      >
        Try again
      </button>
    </div>
  );
}
