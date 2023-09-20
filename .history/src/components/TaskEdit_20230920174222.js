import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import styled from "styled-components";

const TaskEditBar = styled.form`
  display: flex;
  justify-content: flex-start;
  align-items: stretch;
`;

function TaskEdit(props) {
  const [formData, setFormData] = useState({
    title: props.task.title,
    description: props.task.description,
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.onSubmit(props.task.id, formData.title, formData.description);
  };

  return (
    <TaskEditBar onSubmit={handleSubmit}>
      <TextField
        name="title"
        value={formData.title}
        onChange={handleChange}
        fullWidth
        placeholder="Please edit the task title"
      />
      <TextField
        name="description"
        value={formData.description}
        onChange={handleChange}
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
