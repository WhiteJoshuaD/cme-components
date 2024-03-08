import { useActivities } from "../hooks/use-activities";

export function ActivitiesList() {
  const { activities } = useActivities();

  return (
    <ul>
      {activities?.map((activity) => (
        <li key={activity.id}>{activity.name}</li>
      ))}
    </ul>
  );
}
