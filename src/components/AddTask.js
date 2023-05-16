import * as React from "react";
import { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import styled from "styled-components";

const TaskSearchBar = styled.form`
  display: flex;
  justify-content: center;
  align-items: stretch;
`;
function AddTask({ onCreate }) {
  const [taskTitle, setTaskTitle] = useState("");

  const handleChange = (event) => {
    setTaskTitle(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    if (taskTitle.trim() !== "") {
      onCreate(taskTitle);
      setTaskTitle("");
    }
  };
  return (
    <TaskSearchBar onSubmit={handleSubmit}>
      <TextField
        value={taskTitle}
        onChange={handleChange}
        fullWidth
        placeholder="Add a new task"
      />
      <Button type="submit" variant="contained">
        Add
      </Button>
    </TaskSearchBar>
  );
}
export default AddTask;
