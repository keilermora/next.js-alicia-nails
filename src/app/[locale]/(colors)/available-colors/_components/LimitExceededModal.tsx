"use client";

import Button from "@/src/app/components/Button";
import Modal from "@/src/app/components/Modal";
import { useScopedI18n } from "@/src/locales/client";
import useSelectColor from "../../../../../providers/useSelectColor";

export default function LimitExceededModal() {
  const { limitExceeded, setLimitExceeded } = useSelectColor();
  const scopedT = useScopedI18n("pages.availableColors.limitExceededModal");

  return (
    limitExceeded && (
      <Modal>
        <h2 className="text-lg font-bold">{scopedT("title")}</h2>
        <p className="mt-2">{scopedT("description")}</p>
        <div className="mt-8 flex justify-center">
          <Button
            onClick={() => {
              setLimitExceeded(false);
            }}
          >
            {scopedT("closeButton")}
          </Button>
        </div>
      </Modal>
    )
  );
}
