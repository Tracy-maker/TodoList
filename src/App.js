import { useState } from "react";
import AddTask from "./components/AddTask";
import Button from "./components/Bottom.js";
import TaskList from "./components/TaskList";

function App() {
  const [tasks, setTasks] = useState([]);

  const [filter, setFilter] = useState('all');


  const editTaskById = (id, newTitle) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        return {
          ...task,
          taskTitle: newTitle,
        };
      }
      return task;
    });
    setTasks(updatedTasks);
  };

  const deleteTaskById = (id) => {
    const updatedTasks = tasks.filter((task) => {
      return task.id !== id;
    });
    setTasks(updatedTasks);
  };

  const createTask = (taskTitle) => {
    const updatedTasks = [
      ...tasks,
      { id: Math.round(Math.random() * 9999), taskTitle },
    ];
    setTasks(updatedTasks);
  };

  return (
    <div>
      <h1>TO DO LIST</h1>
      <div>
        <AddTask onCreate={createTask} />
        <Button />
        <TaskList
          onEdit={editTaskById}
          tasks={tasks}
          onDelete={deleteTaskById}
        />
      </div>
    </div>
  );
}

export default App;
