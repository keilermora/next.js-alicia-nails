"use client";

import { useEffect } from "react";
import Button from "../components/Button";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="h-full flex flex-col justify-center text-center">
      <h2 className="text-lg font-bold">Algo salió mal...</h2>
      <p className="mt-2">
        No estamos seguros de lo que pudo haber pasado. Tal vez si lo
        intentáramos de nuevo...
      </p>
      <div className="mt-10">
        <Button
          onClick={() => {
            // Attempt to recover by trying to re-render the segment
            () => reset();
          }}
        >
          Intentar de nuevo
        </Button>
      </div>
    </div>
  );
}
