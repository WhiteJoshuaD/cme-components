import { createContext } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
      refetchOnWindowFocus: false,
      refetchOnMount: false,
      refetchOnReconnect: false,
      retry: false,
    },
  },
});

type CmeComponentsContextType =
  | {
      apiKey: string;
    }
  | undefined;

export const CmeComponentsContext =
  createContext<CmeComponentsContextType>(undefined);

export function CmeComponentsProvider({
  apiKey,
  children,
}: {
  apiKey: string;
  children: React.ReactNode;
}) {
  if (!apiKey) {
    throw new Error("apiKey is required");
  }

  return (
    <CmeComponentsContext.Provider value={{ apiKey }}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </CmeComponentsContext.Provider>
  );
}
