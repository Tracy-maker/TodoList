import React from "react";
import { Box } from "@mui/material";
import TaskShow from "./TaskShow";
import styled from "styled-components";


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

  return <>{renderedTasksList}</>;
}

export default TaskList;
