import * as React from "react";
import { useState } from "react";
import Typography from "@mui/joy/Typography";
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
  padding: 10px;
  border-style: solid;
  border-width: 1px;
`;

const Title = styled(Typography)`
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

  if (showEdit) {
    content = <TaskEdit onSubmit={handleSubmit} task={props.task} />;
  } else {
    content = (
      <>
        <h3>{props.task.title}</h3>
        <p>{props.task.description}</p>
      </>
    );
  }

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
      <Title isDeleted={props.task.status === "done"} level="h4">
        {content}
      </Title>
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
