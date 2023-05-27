import { useContext } from "react";
import TasksContext from "../context/tasks";

function useTaskContext() {
  return useContext(TasksContext);
}
export default useTaskContext;
