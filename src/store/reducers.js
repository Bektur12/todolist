import {
  ADD_TASK,
  DELETE_TASK,
  TOGGLE_TASK,
  FILTER_TASKS,
  TOGGLE_THEME,
} from "./types";

const initialState = {
  tasks: [],
  filter: "ALL",
  theme: "LIGHT",
};

const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK:
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
      };
    case DELETE_TASK:
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== action.payload),
      };
    case TOGGLE_TASK:
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action.payload
            ? { ...task, completed: !task.completed }
            : task
        ),
      };
    case FILTER_TASKS:
      return {
        ...state,
        filter: action.payload,
      };
    case TOGGLE_THEME:
      return {
        ...state,
        theme: state.theme === "LIGHT" ? "DARK" : "LIGHT",
      };
    default:
      return state;
  }
};

export default taskReducer;
