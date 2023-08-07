import ColorModel from "@/src/app/api/colors/ColorModel";
import ColorCard from "./ColorCard";

export default async function AvailableColorList() {
  const response = await fetch(`${process.env.HOST}/api/colors`);
  const colors: ColorModel[] = await response.json();

  return (
    <>
      {colors?.map((color) => (
        <ColorCard key={color.id} color={color} />
      ))}
    </>
  );
}
