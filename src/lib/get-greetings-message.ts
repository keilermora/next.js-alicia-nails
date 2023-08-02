import { getScopedI18n } from "../locales/server";

export default async function getGreetingsMessage() {
  const scopedT = await getScopedI18n("misc.greetingsMessage");

  const today = new Date();
  const hours = today.getHours();

  if (hours <= 6) {
    return scopedT("earlyMorning");
  } else if (hours <= 11) {
    return scopedT("morning");
  } else if (hours <= 18) {
    return scopedT("afternoon");
  } else if (hours <= 22) {
    return scopedT("evening");
  }

  return scopedT("night");
}
