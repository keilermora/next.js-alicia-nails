"use client";

import { useState } from "react";
import Button from "@/src/app/components/Button";
import Modal from "@/src/app/components/Modal";
import { useScopedI18n } from "@/src/locales/client";

export default function WelcomeModal() {
  const [opened, setOpened] = useState(true);
  const scopedT = useScopedI18n("pages.availableColors");

  return (
    opened && (
      <Modal>
        <h2 className="text-lg font-bold">{scopedT("title")}</h2>
        <p className="mt-2">{scopedT("description")}</p>
        <p className="mt-2">{scopedT("suggestion")}</p>
        <div className="mt-8 flex justify-center">
          <Button onClick={() => setOpened(false)}>
            {scopedT("welcomeModal.closeButton")}
          </Button>
        </div>
      </Modal>
    )
  );
}
