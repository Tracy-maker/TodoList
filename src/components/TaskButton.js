import * as React from "react";
import { Box, Button } from "@mui/material";
import styled from "styled-components";

const ButtonNavigationBar = styled(Box)`
  display: flex;
  justify-content: center;
  gap: 40px;
  padding: 10px;
`;

function TaskButton({ defaultValue, onFilterChange }) {
  
console.log("default value",defaultValue);
  return (
    <ButtonNavigationBar>
      <Button
        variant={defaultValue === "all" ? "contained" : "outlined"}
        onClick={() => onFilterChange("all")}
      >
        All Tasks
      </Button>
      <Button
        variant={defaultValue === "done" ? "contained" : "outlined"}
        onClick={() => onFilterChange("done")}
      >
        Done
      </Button>
      <Button
        variant={defaultValue === "proceed" ? "contained" : "outlined"}
        onClick={() =>onFilterChange("proceed")}
      >
        Proceed
      </Button>
    </ButtonNavigationBar>
  );
}

export default TaskButton;
