import ColorModel from "../../ColorModel";
import ColorsAPI from "../../ColorsAPI";
import ColorCard from "./ColorCard";

export default async function AvailableColorList() {
  let colors: ColorModel[] = await ColorsAPI.getAvailableColors();

  return (
    <>
      {colors?.map((color) => (
        <ColorCard key={color.id} color={color} />
      ))}
    </>
  );
}
