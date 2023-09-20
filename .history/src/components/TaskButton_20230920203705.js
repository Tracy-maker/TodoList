import * as React from "react";
import { Box, Button } from "@mui/material";
import styled from "styled-components";
s
const ButtonNavigationBar = styled(Box)`
  display: flex;
  justify-content: center;
  gap: 40px;
  padding: 10px;
`;

function TaskButton(props) {
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
}
export default TaskButton;
