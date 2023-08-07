import { Suspense } from "react";
import { getScopedI18n } from "@/src/locales/server";
import Loader from "@/src/app/components/Loader";
import AvailableColorList from "./_components/AvailableColorList";
import WelcomeModal from "./_components/WelcomeModal";
import LimitExceededModal from "./_components/LimitExceededModal";
import ControlBar from "./_components/ControlBar";

export default async function AvailableColorsPage() {
  const scopedT = await getScopedI18n("pages.availableColors");

  return (
    <>
      <WelcomeModal />
      <LimitExceededModal />

      <ControlBar />

      <section className="h-full flex flex-col">
        <h2 className="text-lg font-bold">{scopedT("title")}</h2>
        <p className="mt-2">{scopedT("description")}</p>
        <p className="mt-2">{scopedT("suggestion")}</p>
        <div className="h-full flex flex-wrap justify-center mt-8">
          <Suspense fallback={<Loader />}>
            <AvailableColorList />
          </Suspense>
        </div>
      </section>
    </>
  );
}
