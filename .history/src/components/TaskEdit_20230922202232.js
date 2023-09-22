import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import styled from "styled-components";
import { Box } from "@mui/material";

const TaskEditBar = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

function TaskEdit({task,onSubmit}) {
  const [newTitle, setNewTitle] = useState(task.title);
  const [newDescription, setNewDescription] = useState(task.description);

  const handleChangeName = (event) => {
    setNewTitle(event.target.value);
  };

  const handleChangeDescriptions = (event) => {
    setNewDescription(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    
    onSubmit(task.id, newTitle, newDescription);
  };
 

  return (
    <TaskEditBar component="form" onSubmit={handleSubmit}>
      <TextField
        value={newTitle}
        onChange={handleChangeName}
        fullWidth
        placeholder="Edit task title"
      />
      <TextField
        value={newDescription}
        onChange={handleChangeDescriptions}
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
