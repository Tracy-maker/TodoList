import * as React from "react";
import Sheet from "@mui/joy/Sheet";
import TaskShow from "./TaskShow";

function TaskList({ tasks ,onDelete}) {
  const renderedTasks = tasks.map((task) => {
    return <TaskShow onDelete={onDelete} key={task.id} task={task} />;
  });

  return (
    <Sheet variant="outlined" sx={{ bgcolor: "background.body" }}>
      {renderedTasks}
    </Sheet>
  );
}

export default TaskList;
