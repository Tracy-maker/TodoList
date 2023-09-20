import * as React from "react";
import { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import styled from "styled-components";

const TaskEditBar = styled.form`
  display: flex;
  justify-content: flex-start;
  align-items: stretch;
`;
function TaskEdit(props) {
  const [title, setTitle] = useState(props.task.title);
  const [description, setDescription] = useState(props.task.description);

  const handleChange1 = (event) => {
    setTitle(event.target.value);
  };

  const handleChange2 = (event) => {
    setDescription(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.onSubmit(props.task.id, title);
    props.onSubmit(props.task.id, description);
  };

  return (
    <TaskEditBar onSubmit={handleSubmit}>
      <TextField
        value={title}
        onChange={handleChange1}
        fullWidth
        placeholder="Please edit the task title"
      />
      <TextField
        value={description}
        onChange={handleChange2}
        fullWidth
        placeholder="Please edit the task description"
      />
      <Button type="submit" variant="contained">
        Save
      </Button>
    </TaskEditBar>
  );
}
export default TaskEdit;
