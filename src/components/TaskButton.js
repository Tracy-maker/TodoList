import * as React from "react";
import { useState } from "react";
import { Box, Button } from "@mui/material";
import styled from "styled-components";

const ButtonNavigationBar = styled(Box)`
  display: flex;
  justify-content: center;
  gap: 40px;
  padding: 10px;
`;

function TaskButton({ defaultValue, onFilterChange }) {
  const filterButtonChangeHandler = (event) => {
    onFilterChange(event.target.defaultValue);
  };

  return (
    <ButtonNavigationBar>
      <Button
        variant={defaultValue === "all" ? "contained" : "outlined"}
        onClick={() => filterButtonChangeHandler("all")}
      >
        All Tasks
      </Button>
      <Button
        variant={defaultValue === "done" ? "contained" : "outlined"}
        onClick={() => filterButtonChangeHandler("done")}
      >
        Done
      </Button>
      <Button
        variant={defaultValue === "proceed" ? "contained" : "outlined"}
        onClick={() => filterButtonChangeHandler("proceed")}
      >
        Proceed
      </Button>
    </ButtonNavigationBar>
  );
}

export default TaskButton;
