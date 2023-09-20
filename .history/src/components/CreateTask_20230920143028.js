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
  margin: auto;
  width: 20%;
  padding: 10px;
  text-align: center;
`;

function CreateTask(props) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (title.trim() !== "" || description.trim() !== "") {
      props.onCreate({ title, description });
      setTitle("");
      setDescription("");
    }
  };

  return (
    <Stack onSubmit={handleSubmit} component="form" direction="row">
      <Input
        value={title}
        onChange={handleTitleChange}
        placeholder="Add a title"
        variant="filled"
      />
      <Input
        value={description}
        onChange={handleDescriptionChange}
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
