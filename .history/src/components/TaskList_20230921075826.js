import React from "react";
import TaskShow from "./TaskShow";

function TaskList(props) {
  const renderedTasksList = props.tasks.map((task) => {
    return (
      <TaskShow
        key={task.id}
        task={task}
        onDelete={props.onDelete}
        onEdit={props.onEdit}
        toggleCheckedBoxById={props.toggleCheckedBoxById}
      />
    );
  });

  return (
    <>
      {props.tasks.length === 0 && "NO TASKS 🕷️"}
      {renderedTasksList}
    </>
  );
}

export default TaskList;
