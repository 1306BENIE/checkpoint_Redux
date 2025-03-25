// Types d'actions
export const ADD_TASK = "ADD_TASK";
export const TOGGLE_TASK = "TOGGLE_TASK";
export const UPDATE_TASK = "UPDATE_TASK";
export const FILTER_TASKS = "FILTER_TASKS";

// Action pour ajouter une tâche
export const addTask = (task) => ({
  type: ADD_TASK,
  payload: task,
});

// Action pour marquer une tâche comme faite / non faite
export const toggleTask = (taskId) => ({
  type: TOGGLE_TASK,
  payload: taskId,
});

// Action pour modifier une tâche
export const updateTask = (updatedTask) => ({
  type: UPDATE_TASK,
  payload: updatedTask,
});

// Action pour filtrer les tâches (toutes, complétées, non complétées)
export const filterTasks = (filter) => ({
  type: FILTER_TASKS,
  payload: filter,
});
