import React from "react";
import { Box, Button} from "@mui/material";
import TaskShow from "./TaskShow";
import styled from "styled-components";

const ButtonNavigationBar = styled(Box)`
  display: flex;
  justify-content: center;
  gap: 40px;
  padding: 10px;
`;

function TaskList(props) {
  return (
    <>


      <TaskShow />
    </>
  );
}

export default TaskList;
