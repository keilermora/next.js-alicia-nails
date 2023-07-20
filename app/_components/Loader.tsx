"use client";

import { MutatingDots } from "react-loader-spinner";

export default function Loader() {
  return (
    <div className="flex justify-center items-center h-full">
      <MutatingDots
        height="100"
        width="100"
        color="#8fd9b6"
        secondaryColor="#8fd9b6"
        radius="12.5"
        ariaLabel="mutating-dots-loading"
      />
    </div>
  );
}
