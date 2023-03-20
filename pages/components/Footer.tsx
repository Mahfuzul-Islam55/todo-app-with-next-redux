import React, { useState } from "react";
import { useSelector } from "react-redux";
import { IRootState } from "../redux/types";
import { IInitialState } from "../redux/todos/types";

const Footer = () => {
  const todos: any = useSelector((state: IRootState) => state.todos);

  const todosRemaining = todos.filter(
    (todo: IInitialState) => !todo.completed
  ).length;

  const numberOfTodos = (todosRemaining: number) => {
    if (todosRemaining === 0) return "No task left";
    else if (todosRemaining === 1) return "1 task left";
    else return `${todosRemaining} tasks left`;
  };

  return (
    <div className="mt-4 flex justify-between text-xs text-gray-500">
      <p>{numberOfTodos(todosRemaining)}</p>
      <ul className="flex space-x-1 items-center text-xs">
        <li className="cursor-pointer font-bold">All</li>
        <li>|</li>
        <li className="cursor-pointer">Incomplete</li>
        <li>|</li>
        <li className="cursor-pointer">Complete</li>
        <li></li>
        <li></li>
        <li className="h-3 w-3 border-2 border-green-500 md:hover:bg-green-500 rounded-full cursor-pointer bg-green-500"></li>
        <li className="h-3 w-3 border-2 border-red-500 md:hover:bg-red-500 rounded-full cursor-pointer"></li>
        <li className="h-3 w-3 border-2 border-yellow-500 md:hover:bg-yellow-500 rounded-full cursor-pointer"></li>
      </ul>
    </div>
  );
};

export default Footer;
