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
  const [title, setTitle]=useState(props.task.title);
  const [description, setDescription]=useState(props.task.description);
  
  const handleChange=(event)=>{
    setTitle(event.target.value);
  }

  const handleSubmit=(event)=>{
    event.preventDefault();
    props.onSubmit(props.task.id,title)
  }

  return (
    <TaskEditBar onSubmit={handleSubmit}>
      <TextField
        value={title}
        onChange={handleChange}
        fullWidth
        placeholder="Please edit the task title"
      />
      <Button type="submit" variant="contained">
        Save
      </Button>
    </TaskEditBar>
  );
}
export default TaskEdit;
