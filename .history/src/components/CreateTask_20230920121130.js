import * as React from "react";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState } from "react";
import { styled } from "@mui/material";

const Input = styled(TextField)`
  padding: 5%;
  width: 65%;
`;

const AddButton = styled(Button)`
  padding: 5%;
  width:60px;
  height:30px;
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
        placeholder="Add a title"
        variant="filled"
      />
      <Input
        value={title}
        onChange={handleChange}
        placeholder="Add description"
        variant="filled"
      />
      <AddButton type="submit" variant="contained">
        Add Task
      </AddButton>
    </Stack>
  );
}

export default CreateTask;
