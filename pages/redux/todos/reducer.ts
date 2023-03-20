import {
  ADDED,
  ALLCOMPLETED,
  CLEARCOMPLETED,
  COLORSELECTED,
  DELETED,
  TOGGLED,
} from "./actionTypes";
import { initialState } from "./initialState";
import { IAction } from "./types";

const nextTodoId = (todos: Array<Object>) => {
  const maxId: number = todos.reduce(
    (maxId: number, todo: any) => Math.max(todo.id, maxId),
    -1
  );

  return maxId + 1;
};
const todoReducer = (state = initialState, action: IAction) => {
  const { payload, type } = action;
  if (type === ADDED) {
    return [
      ...state,
      {
        id: nextTodoId(state),
        text: payload.todoText,
        completed: false,
        isComplete: false,
      },
    ];
  } else if (type === TOGGLED) {
    return state.map((todo) => {
      if (todo.id !== payload.todoId) {
        return todo;
      }
      return {
        ...todo,
        completed: !todo.completed,
        isComplete: !todo.isComplete,
      };
    });
  } else if (type === COLORSELECTED) {
    const { todoId, color } = action.payload;
    return state.map((todo) => {
      if (todo.id !== todoId) {
        return todo;
      }
      return {
        ...todo,
        color: color,
      };
    });
  } else if (type === DELETED) {
    const { todoId } = action.payload;
    return state.filter((todo) => todo.id !== todoId);
  } else if (ALLCOMPLETED) {
    return state.map((todo) => {
      return {
        ...todo,
        completed: true,
      };
    });
  } else if (type === CLEARCOMPLETED) {
    return state.filter((todo) => !todo.completed);
  }
};

export default todoReducer;
