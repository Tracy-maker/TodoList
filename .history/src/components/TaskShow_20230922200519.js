import * as React from "react";
import { useState } from "react";
import Typography from "@mui/material/Typography";
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
  margin: auto;
  width: 80%;
  padding: 10px;
  align-items: center;
  gap: 20px;
`;

const TaskInformation = styled(Typography)`
  text-decoration: ${({ isDeleted }) => (isDeleted ? "line-through" : "none")};
`;

function TaskShow({task,onEdit,toggleCheckedBoxById}) {
  const [showEdit, setShowEdit] = useState(false);

  const handleEdit = () => {
    setShowEdit(!showEdit);
  };

  const handleSubmit = (id, newTitle, newDescription) => {
    setShowEdit(false);
    onEdit(id, newTitle, newDescription);
  };

  let content;

  if (showEdit) {
    content = <TaskEdit onSubmit={handleSubmit} task={task} />;
  } else {
    if (
      typeof task.title === "string" &&
      typeof task.description === "string"
    ) {
      content = (
        <>
          <TaskInformation
            variant="h5"
            isDeleted={task.status === "done"}
          >
            {task.title}
          </TaskInformation>
          <TaskInformation
            variant="body1"
            isDeleted={task.status === "done"}
          >
            {task.description}
          </TaskInformation>
        </>
      );
    }
  }
  console.log(content);

  const handleDelete = () => {
    props.onDelete(props.task.id);
  };

  const handleCheckboxChange = () => {
    props.toggleCheckedBoxById(props.task.id);
  };

  return (
    <TaskItem>
      <Checkbox
        checked={props.task.status === "done"}
        onChange={handleCheckboxChange}
      />
      <TaskContent>{content}</TaskContent>

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
