import React from "react";
import TaskShow from "./TaskShow";
import { Box } from "@mui/material";
import styled from "styled-components";

const Reminder = styled(Box)`
  text-align: center;
  padding: ${(props) => (props.noTasks ? "14%" : "0")};
`;

function TaskList({tasks,toggleCheckedBoxById,onDelete,onEdit}) {
  const renderedTasksList = tasks.map((task) => {
    return (
      <TaskShow
        key={task.id}
        task={task}
        onDelete={onDelete}
        onEdit={onEdit}
        toggleCheckedBoxById={toggleCheckedBoxById}
      />
    );
  });

  return (
    <>
      <Reminder noTasks={tasks.length === 0}>
        {tasks.length === 0 && "NO TASKS 🕷️"}
      </Reminder>
      {renderedTasksList}
    </>
  );
}

export default TaskList;
