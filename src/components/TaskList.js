import * as React from "react";

import { Paper, Box } from "@mui/material";
import TaskShow from "./TaskShow";
import useTaskContext from "../hooks/use-tasks-context";

function TaskList() {
  const { tasks } = useTaskContext();
  const renderedTasksList = tasks.map((task) => {
    return <TaskShow key={task.id} task={task} />;
  });

  return (
    <Box mb={2}>
      <Paper variant="outlined">{renderedTasksList}</Paper>
    </Box>
  );
}
export default TaskList;
