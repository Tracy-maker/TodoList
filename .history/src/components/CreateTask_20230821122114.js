import * as React from "react";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState } from "react";
import useTaskContext from "../hooks/use-tasks-context";

function CreateTask() {
  const [title, setTitle] = useState("");
  const { createTask } = useTaskContext();

  const handleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (title.trim() !== "") {
      createTask(title);
      setTitle("");
    }
  };

  return (
    <Stack onSubmit={handleSubmit} component="form" direction="row" spacing={4}>
      <TextField
        value={title}
        onChange={handleChange}
        fullWidth
        hiddenLabel
        placeholder="Add a task"
        variant="filled"
      />
      <Button
        sx={{
          width: "25ch",
          backgroundColor: "#778899",
        }}
        type="submit"
        variant="contained"
      >
        Add Task
      </Button>
    </Stack>
  );
}

export default CreateTask;
