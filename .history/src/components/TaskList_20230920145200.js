import React from "react";
import { Box, Button, Card } from "@mui/material";
import TaskShow from "./TaskShow";
import styled from "styled-components";

const ButtonNavigationBar = styled(Box)`
  display: flex;
  justify-content: center;
  gap: 40px;
  padding: 10px;
`;

function TaskList(props) {
  const renderedTasksList = props.tasks.map((task) => (
    <TaskShow
      key={task.id}
      task={task}
      onDelete={props.onDelete}
      onEdit={props.onEdit}
      toggleCheckedBoxById={props.toggleCheckedBoxById}
    />
  ));

  return (
    <Box mb={2}>
      <Card>
        <ButtonNavigationBar>
          <Button
            variant={props.defaultValue === "all" ? "contained" : "outlined"}
            onClick={() => props.onFilterChange("all")}
          >
            All Tasks
            {renderedTasksList}
          </Button>
          <Button
            variant={props.defaultValue === "done" ? "contained" : "outlined"}
            onClick={() => props.onFilterChange("done")}
          >
            Done
            {renderedTasksList}
          </Button>
          <Button
            variant={
              props.defaultValue === "inProgress" ? "contained" : "outlined"
            }
            onClick={() => props.onFilterChange("inProgress")}
          >
            In Progress
            {renderedTasksList}
          </Button>
        </ButtonNavigationBar>
        {renderedTasksList}
      </Card>
    </Box>
  );
}

export default TaskList;
