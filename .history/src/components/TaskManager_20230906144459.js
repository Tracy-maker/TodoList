import * as React from "react";
import { Paper, Box } from "@mui/material";
import TaskShow from "./TaskShow";



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
    <Box mb={2}>
      <Paper variant="outlined">{renderedTasksList}</Paper>
    </Box>
  );
}
export default TaskManager;
