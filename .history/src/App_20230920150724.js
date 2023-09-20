import { useState, useEffect } from "react";
import axios from "axios";
import CreateTask from "./components/CreateTask";
import TaskList from "./components/TaskList";
import { Box, Stack } from "@mui/material";
import styled from "styled-components";
import Typography from "@mui/material/Typography";

import Image1 from "./image/7.jpg";

const StyledContainer = styled(Stack)`
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: stretch;
  padding-top: 6%;
  background-image: url(${Image1});
  background-size: cover;
  background-repeat: no-repeat;
`;

const TaskForm = styled(Box)`
  margin-left: auto;
  margin-right: auto;
  width: 1000px;
  background-color: white;
  border-radius: 15px;
  @media (max-width: 768px) {
    width: 100%;
  }
`;
const Title = styled(Typography)`
  color: white;
  margin: auto;
  width: 100%;
  padding: 10px;
  text-align: center;
`;

function App() {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("all");

  // const fetchTask = async () => {
  //   const response = await axios.get("http://localhost:3001/tasks");
  //   setTasks(response.data);
  // };

  // useEffect(() => {
  //   fetchTask();
  // }, []);

  const createTask = (title, description) => {
    const newTasks ={
      title:title,
      description:description,
      status: "inProgress",
    };
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
    <StyledContainer>
      <Title variant="h3" gutterBottom>
        🎃 Todo List 🕯️
      </Title>
      <TaskForm>
        <CreateTask onCreate={createTask} />
        <TaskList
          toggleCheckedBoxById={toggleCheckedBoxById}
          tasks={filteredTasks}
          onDelete={deleteTasksById}
          onEdit={editTaskById}
          defaultValue={filter}
          onFilterChange={handleFilterTasks}
        />
      </TaskForm>
    </StyledContainer>
  );
}
export default App;
