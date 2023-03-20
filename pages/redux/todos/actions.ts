import {
  ADDED,
  ALLCOMPLETED,
  ALLDONE,
  CLEARCOMPLETED,
  COLORSELECTED,
  DELETED,
  TOGGLED,
} from "./actionTypes";

export const added = (todoText: string) => {
  return {
    type: ADDED,
    payload: { todoText: todoText },
  };
};

export const toggled = (todoId: number) => {
  return {
    type: TOGGLED,
    payload: { todoId: todoId },
  };
};

export const colorSelected = (todoId: number, color: string) => {
  return {
    type: COLORSELECTED,
    payload: {
      todoId: todoId,
      color: color,
    },
  };
};

export const deleted = (todoId: number) => {
  return {
    type: DELETED,
    payload: { todoId: todoId },
  };
};

export const allCompleted = () => {
  return {
    type: ALLDONE,
  };
};

export const clearCompleted = () => {
  return {
    type: CLEARCOMPLETED,
  };
};
