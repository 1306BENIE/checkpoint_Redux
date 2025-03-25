import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../redux/taskSlice";
import "../styles/global.css"; // Style global

const AddTask = () => {
  const [description, setDescription] = useState("");
  const dispatch = useDispatch();

  const handleAddTask = (e) => {
    e.preventDefault();
    if (description.trim()) {
      const newTask = {
        id: Date.now(),
        description,
        isDone: false,
      };
      dispatch(addTask(newTask));
      setDescription(""); // Réinitialiser l'input après l'ajout
    } else {
      alert("Veuillez remplir la description de la tâche.");
    }
  };

  return (
    <form onSubmit={handleAddTask} className="add-task-form">
      <input
        type="text"
        placeholder="Ajouter une nouvelle tâche"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="add-task-input"
      />
      <button type="submit" className="add-task-button">
        Ajouter
      </button>
    </form>
  );
};

export default AddTask;
