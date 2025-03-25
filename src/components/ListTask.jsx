import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteTask, toggleTask, updateTask } from "../redux/taskSlice";
import Task from "./Task";
import "../styles/global.css"; // Style global

const ListTask = () => {
  const tasks = useSelector((state) => state.tasks.tasks);
  const filter = useSelector((state) => state.tasks.filter);
  const dispatch = useDispatch();

  // Filtrage des tâches selon le statut
  const filteredTasks = tasks.filter((task) => {
    if (filter === "all") return true;
    if (filter === "completed") return task.isDone;
    if (filter === "pending") return !task.isDone;
    return true;
  });

  return (
    <div className="task-list-container">
      {filteredTasks.map((task) => (
        <Task key={task.id} task={task} dispatch={dispatch} />
      ))}
    </div>
  );
};

export default ListTask;
