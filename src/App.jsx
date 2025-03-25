import AddTask from "./components/AddTask";
import ListTask from "./components/ListTask";
import "./styles/styles.css";

const App = () => {
  return (
    <div className="app-container">
      <h1>📝 Ma To-Do List</h1>
      <AddTask />
      <ListTask />
    </div>
  );
};

export default App;
