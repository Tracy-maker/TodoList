import { useState } from "react";
import AddTask from "./components/AddTask";
import TaskList from "./components/TaskList";
import TaskButton from "./components/TaskButton";

function App() {
  const [tasks, setTasks] = useState([]);
  const [filterTasks, setFilteredTasks] = useState("all");

  const handleFilterTasks = (filter) => {
    switch (filter) {
      case "done":
        setFilteredTasks(tasks.filter((task) => task.status === "done"));
        break;
      case "proceed":
        setFilteredTasks(tasks.filter((task) => task.status === "proceed"));
        break;
      default:
        setFilteredTasks(tasks);
        break;
    }
  };

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
      {
        id: Math.random().toString(),
        taskTitle,
        status: "proceed",
      },
    ];
    setTasks(updatedTasks);
  };

  // const handleFilterChange = (selectedFilter) => {
  //   const updatedTasks = tasks.map((task) => {
  //     if (task.id === id) {
  //       return { ...task, status:"done" };
  //     }
  //     return task;
  //   });
  //   setFilteredButton(selectedFilter);
  // };

  return (
    <div>
      <h1>TO DO LIST</h1>
      <div>
        <AddTask onCreate={createTask} />
        <TaskButton defaultValue={filterTasks} onFilterChange={handleFilterTasks} />
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
