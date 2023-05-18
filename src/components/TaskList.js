import * as React from "react";
import { useState } from "react";
import Sheet from "@mui/joy/Sheet";
import TaskShow from "./TaskShow";
import TaskButton from "./TaskButton";

function TaskList({ tasks, onDelete, onEdit }) {
 

  
const renderedAllTasks = tasks.map((task) => {
    return (
      <TaskShow onEdit={onEdit} onDelete={onDelete} key={task.id} task={task} />
    );
  });

  return (
    <>
      <Sheet variant="outlined">{renderedAllTasks}</Sheet>
    </>
  );
}

export default TaskList;
