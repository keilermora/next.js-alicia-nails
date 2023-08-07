"use client";

import classNames from "classnames";
import { useI18n } from "@/src/locales/client";
import useSelectColor from "../../../../../providers/useSelectColor";
import Button from "@/src/app/components/Button";

export default function ControlBar() {
  const { colorIds, clearSelectedColors } = useSelectColor();
  const t = useI18n();

  const onSendColors = () => {
    window.location.href = `https://wa.me/56935827161?text=Hola, he seleccionado los colores https://aliciatorres.com/selected-colors?ids=${colorIds}`;
  };

  const controlBarClassNames = classNames(
    "sticky",
    "top-0",
    "z-20",
    "px-4",
    { "h-16": colorIds?.length },
    { "opacity-100": colorIds?.length },
    { "h-0": !colorIds?.length },
    { "opacity-0": !colorIds?.length },
    "flex",
    "justify-end",
    "items-center",
    "bg-gradient-to-b",
    "from-[var(--alice-blue)]",
    "from-85%",
    "to-transparent",
    "transition-all"
  );

  return (
    <div className={controlBarClassNames}>
      <Button className="mr-4" onClick={clearSelectedColors}>
        {t("pages.availableColors.controlBar.clearButton")}
      </Button>
      <Button onClick={onSendColors}>
        {t("pages.availableColors.controlBar.sendButton", {
          count: colorIds.length,
        })}
      </Button>
    </div>
  );
}
