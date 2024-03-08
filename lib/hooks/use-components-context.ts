import { useContext } from "react";
import { CmeComponentsContext } from "..";

export function useComponentsContext() {
  const context = useContext(CmeComponentsContext);

  if (context === undefined) {
    throw new Error(
      "useComponentsContext must be used within a <CmeComponentsProvider /> component."
    );
  }

  return context;
}
