"use client";

import { useMemo } from "react";
import classNames from "classnames";
import ColorModel from "../../../api/colors/ColorModel";
import Nail from "../../Nail";
import useSelectColor from "./useSelectColor";

interface ColorCardProps {
  color: ColorModel;
}

export default function ColorCard({ color }: ColorCardProps) {
  const { colorIds, toggleSelectedColor } = useSelectColor();

  const colorName = useMemo(() => {
    if (color.type) {
      return `${color.name} (${color.type})`;
    }

    return color.name;
  }, [color]);

  const isSelected = colorIds.includes(color.id);

  const colorCardClasses = classNames(
    "border-4",
    "border-solid",
    "box-content",
    "flex",
    "flex-col",
    "items-center",
    "cursor-pointer",
    "px-4",
    "py-8",
    "text-center",
    "transition",
    "w-20",
    "hover:bg-[var(--fringy-flower)]",
    { "border-transparent": !isSelected },
    { "border-[var(--apricot)]": isSelected }
  );

  return (
    <div
      className={colorCardClasses}
      onClick={() => toggleSelectedColor(color.id)}
    >
      <Nail hex={color.hex} type={color.type} />
      <small className="mt-2">{colorName}</small>
    </div>
  );
}
