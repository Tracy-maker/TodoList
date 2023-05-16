import * as React from "react";
import Sheet from "@mui/joy/Sheet";
import TaskShow from "./TaskShow";

function TaskList({ tasks, onDelete, onEdit }) {
  const renderedAllTasks = tasks.map((task) => {
    return (
      <TaskShow onEdit={onEdit} onDelete={onDelete} key={task.id} task={task} />
    );
  });

  return (
    <Sheet variant="outlined">
      {renderedAllTasks}
    </Sheet>
  );
}

export default TaskList;
