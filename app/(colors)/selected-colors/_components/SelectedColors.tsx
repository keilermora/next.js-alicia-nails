"use client";

import { useSearchParams } from "next/navigation";
import ColorModel from "../../ColorModel";
import SelectedColorCard from "./SelectedColorCard";

interface SelectedColorsProps {
  colors: ColorModel[];
}

export default function SelectedColors({ colors }: SelectedColorsProps) {
  const searchParams = useSearchParams();

  const idsParam: string = searchParams.get("ids") || "";
  const selectedColorIds = idsParam.split(",");
  const filteredColors = colors.filter((color) =>
    selectedColorIds?.includes(color.id)
  );

  return (
    <div className="grid justify-center mt-8">
      {filteredColors.map((color) => (
        <SelectedColorCard key={color.id} color={color} />
      ))}
    </div>
  );
}
