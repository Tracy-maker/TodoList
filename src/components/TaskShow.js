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

const TaskItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
`;

function TaskShow({ task, onDelete, onEdit }) {
  const [showEdit, setShowEdit] = useState(false);

  const handleEditClick = () => {
    setShowEdit(!showEdit);
  };

  const handleSubmit=()=>{
    setShowEdit(false);
  }
  let content = <h4>{task.taskTitle}</h4>;
  if (showEdit) {
    content = <TaskEdit onSubmit={handleSubmit} onEdit={onEdit} task={task}/>;
  }
  const handleDeleteClick = () => {
    onDelete(task.id);
  };

  

  return (
    <TaskItem>
      <Checkbox />
      <Typography level="h4">{content}</Typography>
      <Box>
        <Chip
          variant="soft"
          color="success"
          onClick={handleEditClick}
          endDecorator={<EditIcon />}
        >
          Edit
        </Chip>
        <Chip
          variant="soft"
          color="danger"
          endDecorator={<ChipDelete onClick={handleDeleteClick} />}
        >
          Delete
        </Chip>
      </Box>
    </TaskItem>
  );
}

export default TaskShow;
