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
const reducer = (state = initialState, action: IAction) => {
  const { payload, type } = action;
  if (type === ADDED) {
    return [
      ...state,
      {
        id: nextTodoId(state),
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
      };
    });
  } else if (type === COLORSELECTED) {
    const { todoId } = action.payload;
    return state.map((todo) => {
      if (todo.id !== todoId) {
        return todo;
      }
      return {
        ...todo,
        color: todo.color,
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

export default reducer;
