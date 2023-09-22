import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import Checkbox from "@mui/material/Checkbox";
import Chip from "@mui/material/Chip";
import Box from "@mui/material/Box";
import EditIcon from "@mui/icons-material/Edit";
import TaskEdit from "./TaskEdit";

function TaskShow(props) {
  const [showEdit, setShowEdit] = useState(false);

  const handleEdit = () => {
    setShowEdit(!showEdit);
  };

  const handleSubmit = (id, newTitle, newDescription) => {
    setShowEdit(false);
    props.onEdit(id, newTitle, newDescription);
  };

  const handleDelete = () => {
    props.onDelete(props.task.id);
  };

  const handleCheckboxChange = () => {
    props.toggleCheckedBoxById(props.task.id);
  };

  return (
    <div className="task-show">
      <Checkbox
        checked={props.task.status === "done"}
        onChange={handleCheckboxChange}
      />
      <div className="task-content">
        {showEdit ? (
          <TaskEdit onSubmit={handleSubmit} task={props.task} />
        ) : (
          <>
            <Typography
              variant="h5"
              sx={{ textDecoration: props.task.status === "done" && "line-through" }}
            >
              {props.task.title}
            </Typography>
            <Typography
              variant="h7"
              sx={{ textDecoration: props.task.status === "done" && "line-through" }}
            >
              {props.task.description}
            </Typography>
          </>
        )}
      </div>

      <Box>
        <Chip
          variant="soft"
          color="success"
          onClick={handleEdit}
          endIcon={<EditIcon />}
        />
        <Chip
          variant="soft"
          color="danger"
          onDelete={handleDelete}
        />
      </Box>
    </div>
  );
}

export default TaskShow;
