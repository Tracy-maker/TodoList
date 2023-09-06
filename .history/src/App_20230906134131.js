import { useState, useEffect, useContext } from "react";
import CreateTask from "./components/CreateTask";
import TaskList from "./components/TaskList";
import { Box } from "@mui/material";
import styled from "styled-components";
import Typography from "@mui/joy/Typography";
import TaskButton from "./components/TaskButton";
import axios from "axios";

const TaskForm = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: stretch;
`;
function App() {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("all");

  const fetchTask = async () => {
    const response = await axios.get("http://localhost:3001/tasks");
    setTasks(response);
  };
  useEffect(() => {
    fetchTask();
  }, []);

  const createTask = async (title) => {
    const response = await axios.post("http://localhost:3001/tasks", {
      title,
      status: "inProgress",
    });
    const updateTasks = [...tasks, response.data];
    setTasks(updateTasks);
  };

  const deleteTaskById = async (id) => {
    await axios.delete(`http://localhost:3001/tasks/${id}`);
    const updateTasks = tasks.filter((task) => {
      return task.id !== id;
    });
  };

  return (
    <TaskForm>
      <Typography variant="h1" component="h1">
        My Daily To Do List
      </Typography>
      <Typography variant="h1" component="h1">
        {new Date().toLocaleDateString()}
      </Typography>
      <TaskButton defaultValue={filter} onFilterChange={handleFilterTasks} />
      <TaskList tasks={filteredTasks} />
      <CreateTask />
    </TaskForm>
  );
}
export default App;
