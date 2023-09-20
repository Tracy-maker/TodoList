import * as React from "react";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState } from "react";
import { styled } from "@mui/material";

const Container = styled(Stack)`
  margin: auto;
  width: 50%;
  padding: 10px;
  text-align: center;
`;
const Input = styled(TextField)`
  padding: 5%;
  width: 65%;
`;

const AddButton = styled(Button)`
  
  text-align: center;
`;

function CreateTask(props) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === "title") {
      setTitle(value);
    } else if (name === "description") {
      setDescription(value);
    }
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
    <Container onSubmit={handleSubmit} component="form" direction="row">
      <Input
        name="title"
        value={title}
        onChange={handleChange}
        placeholder="Add a title"
        variant="filled"
      />
      <Input
        name="description"
        value={description}
        onChange={handleChange}
        placeholder="Add description"
        variant="filled"
      />
      <AddButton type="submit" variant="contained">
        Add Task
      </AddButton>
    </Container>
  );
}

export default CreateTask;