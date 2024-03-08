import { useQuery } from "@tanstack/react-query";

import { useComponentsContext } from "./use-components-context";

export type AccmeAccreditationCriterion = {
  id: number;
  name: string;
};

type Res = {
  data: AccmeAccreditationCriterion[];
};

async function getAccmeAccreditationCriteria(
  apiKey: string
): Promise<AccmeAccreditationCriterion[]> {
  const res = await fetch(
    "http://localhost:5000/accme-accreditation-criteria",
    {
      credentials: "include",
      headers: {
        Authorization: `Bearer ${apiKey}`,
      },
    }
  );

  if (!res.ok) {
    throw new Error("Something went wrong");
  }

  const data: Res = await res.json();

  return data.data;
}

export function useCriteriaList() {
  const context = useComponentsContext();

  if (!context.apiKey) {
    throw new Error("No API key provided");
  }

  const { data, isLoading, isError } = useQuery({
    queryKey: ["accmeAccreditationCriteria", context.apiKey],
    queryFn: () => getAccmeAccreditationCriteria(context.apiKey),
  });

  return { criteria: data, isLoading, isError };
}
