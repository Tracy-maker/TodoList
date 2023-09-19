import { useState, useEffect } from "react";
import axios from "axios";
import CreateTask from "./components/CreateTask";
import TaskList from "./components/TaskList";
import { Box, Container } from "@mui/material";
import styled from "styled-components";
import Typography from "@mui/joy/Typography";
import TaskButton from "./components/TaskButton";
import Image from "../public/7.jpg"

const TaskForm = styled(Box)`
  display: flex;
  flex-direction: column;
  background-image: ;
  align-items: stretch;
`;
function App() {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("all");

  const fetchTask = async () => {
    const response = await axios.get("http://localhost:3001/tasks");
    setTasks(response.data);
  };

  useEffect(() => {
    fetchTask();
  }, []);

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

  const handleFilterTasks = (filter) => {
    setFilter(filter);
  };

  let filteredTasks = tasks;
  if (filter !== "all") {
    filteredTasks = tasks.filter((task) => task.status === filter);
  }

  const toggleCheckedBoxById = (id) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        let nextStatus;
        if (task.status === "done") {
          nextStatus = "inProgress";
        } else {
          nextStatus = "done";
        }
        return {
          ...task,
          status: nextStatus,
        };
      }
      return task;
    });
    setTasks(updatedTasks);
  };

  return (
    <Container maxWidth="xl">
      <Typography>My Daily To Do List</Typography>
      <TaskForm>
        <TaskList
          toggleCheckedBoxById={toggleCheckedBoxById}
          tasks={filteredTasks}
          onDelete={deleteTasksById}
          onEdit={editTaskById}
        />
        <TaskButton defaultValue={filter} onFilterChange={handleFilterTasks} />
        <CreateTask onCreate={createTask} />
      </TaskForm>
    </Container>
  );
}
export default App;
