import { useContext } from "react";
import { CmeComponentsContext } from "..";

export function useAssertWrappedByProvider(
  displayNameOrFn: string | (() => void)
): void {
  const ctx = useContext(CmeComponentsContext);

  if (!ctx) {
    if (typeof displayNameOrFn === "function") {
      displayNameOrFn();
      return;
    }

    throw new Error(
      `${displayNameOrFn} can only be used within the <CmeComponentsProvider /> component.`
    );
  }
}
