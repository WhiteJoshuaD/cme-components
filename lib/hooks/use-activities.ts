import { useContext } from "react";
import { useQuery } from "@tanstack/react-query";

import { CmeComponentsContext } from "../components/cme-components-provider";

export type Activity = {
  id: number;
  name: string;
};

async function getActivities(apiKey: string): Promise<Activity[]> {
  const res = await fetch("http://localhost:5000/activities", {
    credentials: "include",
    headers: {
      Authorization: `Bearer ${apiKey}`,
    },
  });

  if (!res.ok) {
    throw new Error("Something went wrong");
  }

  return res.json();
}

export function useActivities() {
  const context = useContext(CmeComponentsContext);

  if (context === undefined) {
    throw new Error(
      "useActivities must be used within a CmeComponentsProvider"
    );
  }

  if (!context.apiKey) {
    throw new Error("No API key provided");
  }

  const { data, isLoading, isError } = useQuery({
    queryKey: ["activities"],
    queryFn: () => getActivities(context.apiKey),
  });

  return { activities: data, isLoading, isError };
}
