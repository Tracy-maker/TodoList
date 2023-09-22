import * as React from "react";
import { Box, Button } from "@mui/material";
import styled from "styled-components";

const ButtonNavigationBar = styled(Box)`
  display: flex;
  justify-content: center;
  gap: 50px;
  padding: 1px;
`;

function TaskButton({defaultValue,onFilterChange}) {
  return (
    <ButtonNavigationBar>
      <Button
        variant={defaultValue === "all" ? "contained" : "outlined"}
        onClick={() => onFilterChange("all")}
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
