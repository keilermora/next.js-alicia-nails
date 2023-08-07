import { useContext } from "react";
import { SelectColorContext } from "./SelectColorProvider";

export default function useSelectColor() {
  const context = useContext(SelectColorContext);

  if (!context) {
    throw new Error(
      "useSelectColor must be used within the SelectColorContext"
    );
  }

  return context;
}
