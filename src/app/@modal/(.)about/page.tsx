"use client";

import { useRouter } from "next/navigation";
import AboutPage from "../../(misc)/about/page";
import Button from "@/src/components/Button";
import Modal from "@/src/components/Modal";

export default function AboutModal() {
  const router = useRouter();

  return (
    <Modal>
      <AboutPage />
      <div className="flex justify-center mt-8">
        <Button onClick={() => router.back()}>¡Genial!</Button>
      </div>
    </Modal>
  );
}
