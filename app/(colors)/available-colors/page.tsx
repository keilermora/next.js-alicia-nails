import { Suspense } from "react";
import Loader from "@/app/_components/Loader";
import AvailableColorList from "./_components/AvailableColorList";
import SelectColorProvider from "./_components/SelectColorProvider";
import SendColorsButton from "./_components/SendColorsButton";

export default async function AvailableColorsPage() {
  return (
    <>
      <section className="h-full flex flex-col">
        <h2>Elige tus tonos favoritos</h2>
        <p>
          Explora nuestra amplia gama de colores de esmaltes de uñas y
          selecciona los tonos que reflejen tu estilo.
        </p>
        <p>
          Para asegurarte de que veas los colores lo más fiel posible a la
          realidad, te recomendamos subir el brillo de tu dispositivo para
          disfrutar de una experiencia de selección de colores excepcional.
        </p>
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
