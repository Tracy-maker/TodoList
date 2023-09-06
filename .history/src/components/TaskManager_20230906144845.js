import * as React from "react";
import { Paper, Box,Button} from "@mui/material";
import TaskShow from "./TaskShow";
import styled from "styled-components";

const ButtonNavigationBar = styled(Box)`
display: flex;
justify-content: center;
gap: 40px;
padding: 10px;
`;


function TaskManager(props) {
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
    <ButtonNavigationBar>
      <Button
        variant={props.defaultValue === "all" ? "contained" : "outlined"}
        onClick={() => props.onFilterChange("all")}
      >
        All Tasks
      </Button>
      <Button
        variant={props.defaultValue === "done" ? "contained" : "outlined"}
        onClick={() => props.onFilterChange("done")}
      >
        Done
      </Button>
      <Button
        variant={props.defaultValue === "inProgress" ? "contained" : "outlined"}
        onClick={() => props.onFilterChange("inProgress")}
      >
        In Progress
      </Button>
    </ButtonNavigationBar>
  );




  return (
    <Box mb={2}>
      <Paper variant="outlined">{renderedTasksList}</Paper>
    </Box>
  );
}
export default TaskManager;
