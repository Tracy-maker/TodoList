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
  const [newTitle, setNewTitle] = useState(props.title);
  const [newDescription, setNewDescription] = useState(props.description);

  const handleChange = (event) => {
    setNewTitle(event.target.value);
    setNewDescription(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.onSubmit(props.id, newTitle, newDescription);
  };

  return (
    <TaskEditBar onSubmit={handleSubmit}>
      <TextField
        value={newTitle}
        onChange={handleChange}
        fullWidth
        placeholder="Edit task title"
      />
      <TextField
        value={newDescription}
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
