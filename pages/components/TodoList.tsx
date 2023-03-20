import React from "react";
import { useSelector } from "react-redux";
import { IInitialState } from "../redux/todos/types";
import { IRootState } from "../redux/types";
import Todo from "./Todo";

const TodoList = () => {
  const todos: any = useSelector((state: IRootState) => state.todos);
  return (
    <div className="mt-2 text-gray-700 text-sm max-h-[300px] overflow-y-auto">
      {todos.map((todo: IInitialState) => (
        <Todo todo={todo} key={todo.id} />
      ))}
    </div>
  );
};

export default TodoList;
