import { useCriteriaList } from "../hooks/use-criteria-list";
import { useCriterion } from "../hooks/use-criterion";

export function AccmeAccreditationCriteriaList() {
  const { criteria, isLoading, isError } = useCriteriaList();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error loading data</div>;
  }

  return (
    <div>
      <ul>
        {criteria?.map((criterion) => (
          <li key={criterion.id}>{criterion.name}</li>
        ))}
      </ul>
      <hr />
      <Criterion />
    </div>
  );
}

function Criterion() {
  const { criterion, isLoading, isError } = useCriterion({ id: 3 });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error loading data</div>;
  }

  return <div>{criterion?.name}</div>;
}
