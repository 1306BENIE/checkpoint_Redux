import { createSlice } from "@reduxjs/toolkit";

// État initial
const initialState = {
  tasks: [],
};

const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.tasks.push(action.payload);
    },
    deleteTask: (state, action) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
    },
    toggleTask: (state, action) => {
      const task = state.tasks.find((t) => t.id === action.payload);
      if (task) task.isDone = !task.isDone;
    },
    updateTask: (state, action) => {
      const { id, description } = action.payload;
      const task = state.tasks.find((t) => t.id === id);
      if (task) task.description = description;
    },
  },
});

export const { addTask, deleteTask, toggleTask, updateTask } = taskSlice.actions;
export default taskSlice.reducer;
