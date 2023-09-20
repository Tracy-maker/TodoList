import React from "react";
import TaskShow from "./TaskShow";
import { Box } from "@mui/material";

function TaskList(props) {
  const renderedTasksList = props.tasks.map((task) => {
    return (
      <TaskShow
        key={task.id}
        task={task}
        onDelete={props.onDelete}
        onEdit={props.onEdit}
        toggleCheckedBoxById={props.toggleCheckedBoxById}
      />
    );
  });

  return (
    <>
      <Box> {props.tasks.length === 0 && "NO TASKS 🕷️"}</Box>

      {renderedTasksList}
    </>
  );
}

export default TaskList;
