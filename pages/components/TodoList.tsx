import React from "react";
import { useSelector } from "react-redux";
import { IInitialState } from "../redux/todos/types";
import { IRootState } from "../redux/types";
import Todo from "./Todo";

const TodoList = () => {
  const todos: any = useSelector((state: IRootState) => state.todos);
  const filters: any = useSelector((state: IRootState) => state.filter);

  const filterByStatus = (todo: IInitialState) => {
    const { status } = filters;
    if (status === "Complete") return todo.isComplete === true;
    else if (status === "Incomplete") return todo.isComplete === false;
    else return true;
  };

  const filterByColors = (todo: IInitialState) => {
    const { colors } = filters;
    if (colors.length > 0) {
      return colors.includes(todo?.color);
    } else return true;
  };

  return (
    <div className="mt-2 text-gray-700 text-sm max-h-[300px] overflow-y-auto">
      {todos
        .filter(filterByStatus)
        .filter(filterByColors)
        .map((todo: IInitialState) => (
          <Todo todo={todo} key={todo.id} />
        ))}
    </div>
  );
};

export default TodoList;
