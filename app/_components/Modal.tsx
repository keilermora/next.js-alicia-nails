"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

export default function Modal({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return null;
  }

  const modalElement = (
    <>
      <div className="fixed top-0 left-0 w-full h-screen z-20 bg-[var(--black)] opacity-75"></div>
      <div className="fixed top-[20vh] left-0 right-0 w-80 m-auto bg-[var(--alice-blue)] p-8 shadow-sm z-30">
        {children}
      </div>
    </>
  );

  const containerElement =
    document.getElementById("modal-root") || document.body;

  return createPortal(modalElement, containerElement);
}
