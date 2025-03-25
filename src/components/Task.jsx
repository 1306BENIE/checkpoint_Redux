import { useDispatch } from "react-redux";
import { toggleTask, deleteTask } from "../redux/taskSlice";

const Task = ({ task }) => {
  const dispatch = useDispatch();

  return (
    <div className={`task ${task.isDone ? "completed" : ""}`}>
      <span onClick={() => dispatch(toggleTask(task.id))}>
        {task.description}
      </span>
      <button onClick={() => dispatch(deleteTask(task.id))}>🗑️</button>
    </div>
  );
};

export default Task;
