import ChosenColors from "./_components/ChosenColors";
import ColorModel from "@/src/app/api/colors/ColorModel";
import getGreetingsMessage from "@/src/lib/get-greetings-message";
import { getScopedI18n } from "@/src/locales/server";

export default async function ChosenColorsPage() {
  const scopedT = await getScopedI18n("pages.chosenColors");

  const response = await fetch(`${process.env.HOST}/api/colors/`);
  const colors: ColorModel[] = await response.json();
  const greetingsMessage = getGreetingsMessage();

  return (
    <section>
      <h2>{scopedT("title")}</h2>
      <p className="mt-2">
        {scopedT("description", { greetingsMessage: greetingsMessage })}
      </p>

      <ChosenColors colors={colors} />
    </section>
  );
}
