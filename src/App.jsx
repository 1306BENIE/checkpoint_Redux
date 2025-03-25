import React from "react";
import AddTask from "./components/AddTask";
import ListTask from "./components/ListTask";
import FilterTasks from "./components/FilterTasks";
import ThemeToggle from "./components/ThemeToggle"; // Importer le bouton de bascule
import "./styles/global.css"; // Style global
import "./styles/theme.css";  // Importer les styles du thème

const App = () => {
  return (
    <div className="app-container">
      <h1>📝 To-Do List avec Redux</h1>
      <ThemeToggle />
      <AddTask />
      <FilterTasks />
      <ListTask />
    </div>
  );
};

export default App;
