"use client";

import { useState } from "react";
import Modal from "@/app/_components/Modal";
import Button from "@/app/_components/Button";

export default function WelcomeModal() {
  const [opened, setOpened] = useState(true);

  return (
    opened && (
      <Modal>
        <h2 className="text-lg font-bold">Elige tus tonos favoritos</h2>
        <p className="mt-2">
          Explora nuestra amplia gama de colores de esmaltes de uñas y
          selecciona los tonos que reflejen tu estilo.
        </p>
        <p className="mt-2">
          Para asegurarte de que veas los colores lo más fiel posible a la
          realidad, te recomendamos subir el brillo de tu dispositivo para
          disfrutar de una experiencia de selección de colores excepcional.
        </p>
        <div className="mt-8 flex justify-center">
          <Button onClick={() => setOpened(false)}>¡Genial!</Button>
        </div>
      </Modal>
    )
  );
}
