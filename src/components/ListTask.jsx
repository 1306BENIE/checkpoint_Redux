import { useSelector } from "react-redux";
import Task from "./Task";

const ListTask = () => {
  const tasks = useSelector((state) => state.tasks.tasks);

  return (
    <div className="task-list">
      {tasks.length === 0 ? (
        <p>Aucune tâche pour le moment.</p>
      ) : (
        tasks.map((task) => <Task key={task.id} task={task} />)
      )}
    </div>
  );
};

export default ListTask;
