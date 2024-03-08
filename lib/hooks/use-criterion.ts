import { useQuery } from "@tanstack/react-query";

import { useComponentsContext } from "./use-components-context";

export type AccmeAccreditationCriterion = {
  id: number;
  name: string;
};

async function getAccmeAccreditationCriterion({
  id,
  apiKey,
}: {
  id: number;
  apiKey: string;
}): Promise<AccmeAccreditationCriterion> {
  const res = await fetch(
    `http://localhost:5000/accme-accreditation-criteria/${id}`,
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

  return res.json();
}

export function useCriterion({ id }: { id: number }) {
  const context = useComponentsContext();

  if (!context.apiKey) {
    throw new Error("No API key provided");
  }

  const { data, isLoading, isError } = useQuery({
    queryKey: ["criterion", id, context.apiKey],
    queryFn: () =>
      getAccmeAccreditationCriterion({ apiKey: context.apiKey, id }),
  });

  return { criterion: data, isLoading, isError };
}
