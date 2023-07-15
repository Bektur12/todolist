import {
  ADD_TASK,
  DELETE_TASK,
  TOGGLE_TASK,
  FILTER_TASKS,
  TOGGLE_THEME,
} from "./types";

export const addTask = (task) => ({
  type: ADD_TASK,
  payload: task,
});

export const deleteTask = (taskId) => ({
  type: DELETE_TASK,
  payload: taskId,
});

export const toggleTask = (taskId) => ({
  type: TOGGLE_TASK,
  payload: taskId,
});

export const filterTasks = (filterType) => ({
  type: FILTER_TASKS,
  payload: filterType,
});

export const toggleTheme = () => ({
  type: TOGGLE_THEME,
});
