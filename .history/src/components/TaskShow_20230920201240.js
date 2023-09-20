import * as React from "react";
import { useState } from "react";
import Typography from '@mui/material/Typography';
import Checkbox from "@mui/joy/Checkbox";
import Chip from "@mui/joy/Chip";
import ChipDelete from "@mui/joy/ChipDelete";
import styled from "styled-components";
import { Box } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import TaskEdit from "./TaskEdit";

const TaskItem = styled(Box)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  border-style: solid;
  border-width: 1px;
  margin: 2%;
  border-radius: 17px;
  border-color: lightgray;
`;

const TaskContent = styled(Box)`
  display: flex;
`;


const TaskInformation = styled(Typography)`
  
  text-decoration: ${({ isDeleted }) => (isDeleted ? "line-through" : "none")};
`;

function TaskShow(props) {
  const [showEdit, setShowEdit] = useState(false);

  const handleEdit = () => {
    setShowEdit(!showEdit);
  };

  const handleSubmit = (id, newTitle, newDescription) => {
    setShowEdit(false);
    props.onEdit(id, newTitle, newDescription);
  };

  let content;

  // if (showEdit) {
  //   content = <TaskEdit onSubmit={handleSubmit} task={props.task} />;
  // } else {
  //   content = (
  //     <>
  //       <h3>{props.task.title}</h3>
  //       <p>{props.task.description}</p>
  //     </>
  //   );
  // }

  const handleDelete = () => {
    props.onDelete(props.task.id);
  };

  const handleCheckboxChange = () => {
    props.toggleCheckedBoxById(props.task.id);
  };

  return (
    <TaskItem>
      <Checkbox onChange={handleCheckboxChange} />
      <TaskContent>
        <TaskInformation variant="h4">title</TaskInformation>
        <TaskInformation variant="h6">description</TaskInformation>
      </TaskContent>

      <Box>
        <Chip
          variant="soft"
          color="success"
          onClick={handleEdit}
          endDecorator={<EditIcon />}
        />
        <Chip
          variant="soft"
          color="danger"
          endDecorator={<ChipDelete onClick={handleDelete} />}
        />
      </Box>
    </TaskItem>
  );
}

export default TaskShow;
