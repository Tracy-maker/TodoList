import React from "react";
import TaskShow from "./TaskShow";

function TaskList(props) {
  const renderedTasksList = props.tasks.map((task) => {
    return (
      {props.tasks.length===0&&"NO TASKS 🕷️"}
      <TaskShow
        key={task.id}
        task={task}
        onDelete={props.onDelete}
        onEdit={props.onEdit}
        toggleCheckedBoxById={props.toggleCheckedBoxById}
      />
    );
  });
  console.log(props.tasks);
  return <>{renderedTasksList}</>;
}

export default TaskList;
