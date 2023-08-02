"use client";

import Button from "@/src/app/components/Button";
import useSelectColor from "./useSelectColor";

export default function SendColorsButton() {
  const { colorIds } = useSelectColor();

  const onSendColors = () => {
    window.location.href = `https://wa.me/56935827161?text=Hola, he seleccionado los colores https://aliciatorres.com/selected-colors?ids=${colorIds}`;
  };

  return (
    !!colorIds?.length && (
      <div className="fixed top-24 right-12 z-20">
        <Button onClick={onSendColors}>
          Enviar Colores ({colorIds.length})
        </Button>
      </div>
    )
  );
}
