"use client";

import { useSearchParams } from "next/navigation";
import ColorModel from "@/src/app/api/colors/ColorModel";
import ChosenColorCard from "./ChosenColorCard";

interface ChosenColorsProps {
  colors: ColorModel[];
}

export default function ChosenColors({ colors }: ChosenColorsProps) {
  const searchParams = useSearchParams();

  const idsParam: string = searchParams.get("ids") || "";
  const selectedColorIds = idsParam.split(",");
  const filteredColors = colors.filter((color) =>
    selectedColorIds?.includes(color.id)
  );

  return (
    <div className="grid justify-center mt-8">
      {filteredColors.map((color) => (
        <ChosenColorCard key={color.id} color={color} />
      ))}
    </div>
  );
}
