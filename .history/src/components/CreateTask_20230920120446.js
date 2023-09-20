import * as React from "react";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState } from "react";
import { styled } from "@mui/material";

const Input = styled(TextField)`
  padding: 5%;
  width:70%
`;

function CreateTask(props) {
  const [title, setTitle] = useState("");

  const handleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (title.trim() !== "") {
      props.onCreate(title);
      setTitle("");
    }
  };

  return (
    <Stack onSubmit={handleSubmit} component="form" direction="row">
      <Input
        value={title}
        onChange={handleChange}
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
