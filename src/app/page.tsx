"use client";

import { useQuery } from "convex/react";
import { api } from "../../convex/_generated/api";

export default function Home() {
  const tasks = useQuery(api.tasks.get);
  return (
    <main>
      <h1>Tasks {tasks?.length}</h1>
      {tasks?.map(({ _id, text, isCompleted }) => <div key={_id}>{text} = {isCompleted ? "Completed" : "Pending"}</div>)}
    </main>
  );
}
