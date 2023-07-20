import SelectedColors from "./_components/SelectedColors";
import getGreetingsMessage from "@/app/_utils/getGreetingsMessage";
import ColorModel from "../ColorModel";
import ColorsAPI from "../ColorsAPI";

export default async function SelectedColorsPage() {
  const colors: ColorModel[] = await ColorsAPI.getAvailableColors();
  const greetingsMessage = getGreetingsMessage();

  return (
    <section>
      <h2>Colores seleccionados</h2>
      <p className="mt-2">
        {greetingsMessage} Aquí están los colores seleccionados.
      </p>

      <SelectedColors colors={colors} />
    </section>
  );
}
