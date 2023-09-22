import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import styled from "styled-components";

const TaskEditBar = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

function TaskEdit(props) {
  const [title, setTitle] = useState(props.title);
  const [description, setDescription] = useState(props.description);

  const handleChange = (event) => {
    setTitle(event.target.value);
    setDescription(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    
    props.onSubmit(props.id, title, description);
  };

  return (
    <TaskEditBar onSubmit={handleSubmit}>
      <TextField
        name="title"
        value={formTask.title}
        onChange={handleChange}
        fullWidth
        placeholder="Edit task title"
      />
      <TextField
        name="description"
        value={formTask.description}
        onChange={handleChange}
        fullWidth
        placeholder="Edit task description"
      />
      <Button type="submit" variant="contained">
        Save
      </Button>
    </TaskEditBar>
  );
}

export default TaskEdit;
