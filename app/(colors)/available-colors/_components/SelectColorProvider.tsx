"use client";

import { ReactNode, createContext, useState } from "react";

type SelectColorContextProps = {
  colorIds: string[];
  toggleSelectedColor: (selectedColorId: string) => void;
};

export const SelectColorContext = createContext<SelectColorContextProps | null>(
  null
);

export default function SelectColorProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [colorIds, setColorIds] = useState<string[]>([]);

  const toggleSelectedColor = (selectedColorId: string) => {
    const colorIndex = colorIds.findIndex(
      (colorId) => colorId === selectedColorId
    );
    const newColorIds = [...colorIds];

    if (colorIndex === -1) {
      newColorIds.push(selectedColorId);
    } else {
      newColorIds.splice(colorIndex, 1);
    }

    newColorIds.sort();
    setColorIds(newColorIds);
  };

  return (
    <SelectColorContext.Provider value={{ colorIds, toggleSelectedColor }}>
      {children}
    </SelectColorContext.Provider>
  );
}
