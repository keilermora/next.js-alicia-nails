"use client";

import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useState,
} from "react";

type SelectColorContextProps = {
  colorIds: string[];
  clearSelectedColors: () => void;
  toggleSelectedColor: (selectedColorId: string) => void;
  limitExceeded: boolean;
  setLimitExceeded: Dispatch<SetStateAction<boolean>>;
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
  const [limitExceeded, setLimitExceeded] = useState(false);

  const clearSelectedColors = () => {
    setColorIds([]);
  };

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

    if (newColorIds.length > 10) {
      setLimitExceeded(true);
    } else {
      newColorIds.sort();
      setColorIds(newColorIds);
    }
  };

  return (
    <SelectColorContext.Provider
      value={{
        colorIds,
        clearSelectedColors,
        toggleSelectedColor,
        limitExceeded,
        setLimitExceeded,
      }}
    >
      {children}
    </SelectColorContext.Provider>
  );
}
