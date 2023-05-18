import { useState } from "react";
import AddTask from "./components/AddTask";
import TaskList from "./components/TaskList";
import TaskButton from "./components/TaskButton";

function App() {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("all");


  const handleFilterTasks = (filter) => {
    console.log(filter);
    setFilter(filter)
   
  };

    const toggleCheckedBoxById = (id) => {
     const updatedTasks = tasks.map((task) => {
    if (task.id === id) {
      let nextStatus;
      if(task.status==="done"){
        nextStatus="proceed"
      }else{
        nextStatus="done"
      }
      return {
        ...task,
        status:nextStatus,
      };
    }
    return task;
  });
  setTasks(updatedTasks);
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



let filteredTasks = tasks;
if (filter !== "all") {
    filteredTasks = tasks.filter((task) => task.status === filter);
}
  // const filteredTasks = filter === "all" ? tasks : tasks.filter((task) => task.status === filter);



  return (
    <div>
      <h1>TO DO LIST</h1>
      <div>
        <AddTask onCreate={createTask} />
        <TaskButton defaultValue={filter} onFilterChange={handleFilterTasks} />
        <TaskList
          toggleCheckedBoxById={toggleCheckedBoxById}
          onEdit={editTaskById}
          tasks={filteredTasks}
          onDelete={deleteTaskById}
        />
      </div>
    </div>
  );
}

export default App;
