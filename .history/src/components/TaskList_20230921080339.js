import React from "react";
import TaskShow from "./TaskShow";
import { Box } from "@mui/material";
import styled from "styled-components";

const Reminder = styled(Box)`
  text-align: center;
  padding: 15px;
`;

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
      <Reminder> {props.tasks.length === 0 && "NO TASKS 🕷️"}</Reminder>
      {renderedTasksList}
    </>
  );
}

export default TaskList;
