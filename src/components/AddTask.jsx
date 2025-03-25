import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../redux/taskSlice";

const AddTask = () => {
  const [description, setDescription] = useState("");
  const dispatch = useDispatch();

  const handleAddTask = () => {
    if (!description.trim()) return;
    dispatch(addTask({ id: Date.now(), description, isDone: false }));
    setDescription("");
  };

  return (
    <div className="add-task">
      <input
        type="text"
        placeholder="Nouvelle tâche..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button onClick={handleAddTask}>Ajouter</button>
    </div>
  );
};

export default AddTask;
