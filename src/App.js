import { useState, useEffect, useContext } from "react";
import CreateTask from "./components/CreateTask";
import TaskList from "./components/TaskList";
import { Box } from "@mui/material";
import styled from "styled-components";
import Typography from "@mui/joy/Typography";
import TaskButton from "./components/TaskButton";
import TasksContext from "./context/tasks";

const TaskForm = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: stretch;
`;
function App() {
  const { fetchTask } = useContext(TasksContext);
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    fetchTask();
  }, [fetchTask]);

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
    <TaskForm>
      <Typography variant="h1" component="h1">
        My Daily To Do List
      </Typography>
      <Typography variant="h1" component="h1">
        {new Date().toLocaleDateString()}
      </Typography>
      <TaskButton defaultValue={filter} onFilterChange={handleFilterTasks} />
      <TaskList
        toggleCheckedBoxById={toggleCheckedBoxById}
        tasks={filteredTasks}
      />
      <CreateTask />
    </TaskForm>
  );
}
export default App;
