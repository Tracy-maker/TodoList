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

function TaskEdit(props) {
  const [newTitle, setNewTitle] = useState(props.task.title);
  const [newDescription, setNewDescription] = useState(props.task.description);

  const handleChangeName = (event) => {
    setNewTitle(event.target.value);
  };

  const handleChangeDescriptions = (event) => {
    setNewDescription(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.onSubmit(props.task.id, newTitle, newDescription);
  };
 

  return (
    <TaskEditBar onSubmit={handleSubmit}>
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
