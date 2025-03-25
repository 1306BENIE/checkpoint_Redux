import React, { useState } from "react";
import { deleteTask, toggleTask, updateTask } from "../redux/taskSlice";
import "../styles/global.css"; // Style global

const Task = ({ task, dispatch }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newDescription, setNewDescription] = useState(task.description);

  const handleEdit = () => {
    if (newDescription.trim()) {
      dispatch(updateTask({ id: task.id, description: newDescription }));
      setIsEditing(false);
    } else {
      alert("La description ne peut pas être vide.");
    }
  };

  return (
    <div className={`task-item ${task.isDone ? "completed" : ""}`}>
      {isEditing ? (
        <div className="task-edit">
          <input
            type="text"
            value={newDescription}
            onChange={(e) => setNewDescription(e.target.value)}
            className="task-input-edit"
          />
          <button onClick={handleEdit} className="task-button-edit">
            Sauvegarder
          </button>
        </div>
      ) : (
        <div className="task-content">
          <input
            type="checkbox"
            checked={task.isDone}
            onChange={() => dispatch(toggleTask(task.id))}
            className="task-checkbox"
          />
          <span className="task-description">{task.description}</span>
          <button onClick={() => setIsEditing(true)} className="task-button-edit">
            Modifier
          </button>
          <button
            onClick={() => dispatch(deleteTask(task.id))}
            className="task-button-delete"
          >
            Supprimer
          </button>
        </div>
      )}
    </div>
  );
};

export default Task;
