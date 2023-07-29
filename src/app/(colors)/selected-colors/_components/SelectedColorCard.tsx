import Nail from "../../Nail";
import ColorModel from "../../../api/colors/ColorModel";

interface SelectedColorCardProps {
  color: ColorModel;
}

export default function SelectedColorCard({ color }: SelectedColorCardProps) {
  return (
    <div className="flex items-center p-4">
      <Nail hex={color.hex} type={color.type} />
      <ul className="mx-4 list-none">
        <li>
          <span className="font-bold">ID: </span>
          {color.id}
        </li>
        <li>
          <span className="font-bold">Marca: </span>
          {color.brand}
        </li>
        <li>
          <span className="font-bold">Nombre: </span>
          {color.name}
        </li>
        {color.type && (
          <li>
            <span className="font-bold">Tipo: </span>
            {color.type}
          </li>
        )}
      </ul>
    </div>
  );
}
