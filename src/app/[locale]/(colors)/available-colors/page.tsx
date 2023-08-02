import { Suspense } from "react";
import { getScopedI18n } from "@/src/locales/server";
import Loader from "@/src/app/components/Loader";
import AvailableColorList from "./_components/AvailableColorList";
import SelectColorProvider from "./_components/SelectColorProvider";
import SendColorsButton from "./_components/SendColorsButton";
import WelcomeModal from "./_components/WelcomeModal";

export default async function AvailableColorsPage() {
  const scopedT = await getScopedI18n("pages.availableColors");

  return (
    <>
      <WelcomeModal />
      <section className="h-full flex flex-col">
        <h2>{scopedT("title")}</h2>
        <p>{scopedT("description")}</p>
        <p>{scopedT("suggestion")}</p>
        <SelectColorProvider>
          <SendColorsButton />
          <div className="h-full flex flex-wrap justify-center mt-8">
            <Suspense fallback={<Loader />}>
              <AvailableColorList />
            </Suspense>
          </div>
        </SelectColorProvider>
      </section>
    </>
  );
}
