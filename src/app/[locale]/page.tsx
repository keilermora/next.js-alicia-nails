import { getScopedI18n } from "@/src/locales/server";

export default async function Home() {
  const scopedT = await getScopedI18n("pages.home");

  return (
    <section>
      <h1>{scopedT("title")}</h1>
    </section>
  );
}
