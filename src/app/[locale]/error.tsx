"use client";

import { useEffect } from "react";
import { useScopedI18n } from "@/src/locales/client";
import Button from "../components/Button";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  const scopedT = useScopedI18n("pages.error");

  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="h-full flex flex-col justify-center text-center">
      <h2 className="text-lg font-bold">{scopedT("title")}.</h2>
      <p className="mt-2">{scopedT("reason")}</p>
      <div className="mt-10">
        <Button
          onClick={() => {
            // Attempt to recover by trying to re-render the segment
            () => reset();
          }}
        >
          {scopedT("resetButton")}
        </Button>
      </div>
    </div>
  );
}
