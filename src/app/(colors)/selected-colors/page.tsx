import SelectedColors from "./_components/SelectedColors";
import getGreetingsMessage from "@/src/lib/getGreetingsMessage";
import ColorModel from "../../api/colors/ColorModel";

export default async function SelectedColorsPage() {
  const response = await fetch(`${process.env.HOST}/api/colors/`);
  const colors: ColorModel[] = await response.json();
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
