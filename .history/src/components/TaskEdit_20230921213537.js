import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

function TaskEdit({ task, onSubmit }) {
  const [formTask, setFormTask] = useState({
    title: task.title,
    description: task.description,
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormTask({ ...formTask, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(task.id, formTask.title, formTask.description);
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        name="title"
        value={formTask.title}
        onChange={handleChange}
        fullWidth
        placeholder="Edit the task title"
      />
      <TextField
        name="description"
        value={formTask.description}
        onChange={handleChange}
        fullWidth
        placeholder="Edit the task description"
      />
      <Button type="submit" variant="contained">
        Save
      </Button>
    </form>
  );
}

export default TaskEdit;
