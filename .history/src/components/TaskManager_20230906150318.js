import React, { useState } from "react";
import { Paper, Box, Button } from "@mui/material";
import TaskShow from "./TaskShow";
import styled from "styled-components";

const ButtonNavigationBar = styled(Box)`
  display: flex;
  justify-content: center;
  gap: 40px;
  padding: 10px;
`;

function TaskManager(props) {
  const [filter, setFilter] = useState("all");

  const handleFilterTasks = (filter) => {
    setFilter(filter);
  };

  const toggleCheckedBoxById = (id) => {
    const updatedTasks = props.tasks.map((task) => {
      if (task.id === id) {
        let nextStatus;
        if (task.status === "done") {
          nextStatus = "inProgress";
        } else {
          nextStatus = "done";
        }
        return {
          ...task,
          status: nextStatus,
        };
      }
      return task;
    });
    // Assuming you have a function to update tasks in the parent component
    props.setTasks(updatedTasks);
  };

  const filteredTasks = filter !== "all" ? props.tasks.filter((task) => task.status === filter) : props.tasks;

  const renderedTasksList = filteredTasks.map((task) => {
    return (
      <TaskShow
        key={task.id}
        task={task}
        onDelete={props.onDelete}
        onEdit={props.onEdit}
        toggleCheckedBoxById={toggleCheckedBoxById}
      />
    );
  });

  return (
    <>
      <ButtonNavigationBar>
        <Button
          variant={props.defaultValue === "all" ? "contained" : "outlined"}
          onClick={() => handleFilterTasks("all")}
        >
          All Tasks
        </Button>
        <Button
          variant={props.defaultValue === "done" ? "contained" : "outlined"}
          onClick={() => handleFilterTasks("done")}
        >
          Done
        </Button>
        <Button
          variant={props.defaultValue === "inProgress" ? "contained" : "outlined"}
          onClick={() => handleFilterTasks("inProgress")}
        >
          In Progress
        </Button>
      </ButtonNavigationBar>
      <Box mb={2}>
        <Paper variant="outlined">{renderedTasksList}</Paper>
      </Box>
    </>
  );
}

export default TaskManager;
