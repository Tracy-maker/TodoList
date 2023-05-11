import AddTaskBar from "./components/AddTaskBar";
import Button from "./components/Bottom.js";
import ListForm from "./components/ListForm";

function App() {
  return (
    <>
      <h1>TO DO LIST</h1>
      <div>
      <AddTaskBar />
        <Button />
      <ListForm/>
      </div>
    </>
  );
}

export default App;
