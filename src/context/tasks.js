import { createContext, useState, useCallback } from "react";
import axios from "axios";

const TasksContext = createContext();

function Provider({ children }) {
  const [tasks, setTasks] = useState([]);
 

  const fetchTask = useCallback(async () => {
    const response = await axios.get("http://localhost:3001/tasks");
    setTasks(response.data);
  },[]);

  const createTask = async (title) => {
    const response = await axios.post("http://localhost:3001/tasks", {
      title,
      status: "inProgress",
    });
    const updatedTasks = [...tasks, response.data];
    setTasks(updatedTasks);
  };

  const deleteTasksById = async (id) => {
    await axios.delete(`http://localhost:3001/tasks/${id}`);
    const updatedTasks = tasks.filter((task) => {
      return task.id !== id;
    });
    setTasks(updatedTasks);
  };

  const editTaskById = async (id, newTitle) => {
    const response = await axios.put(`http://localhost:3001/tasks/${id}`, {
      title: newTitle,
    });

    const updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        return {
          ...task,
          ...response.data,
        };
      }
      return tasks;
    });
    setTasks(updatedTasks);
  };

 

  const valueToShare = {
    tasks,
    deleteTasksById,
    editTaskById,
    createTask,
    fetchTask,
  };

  return (
    <TasksContext.Provider value={valueToShare}>
      {children}
    </TasksContext.Provider>
  );
}

export { Provider };
export default TasksContext;
