import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IRootState } from "../redux/types";
import { IInitialState } from "../redux/todos/types";
import { colorChanged, statusChanged } from "../redux/filter/actions";

const Footer = () => {
  const todos: any = useSelector((state: IRootState) => state.todos);
  const filters: any = useSelector((state: IRootState) => state.filter);
  const dispatch = useDispatch();

  const { status, colors, changeType } = filters;
  const todosRemaining = todos.filter(
    (todo: IInitialState) => !todo.isComplete
  ).length;

  const numberOfTodos = (todosRemaining: number) => {
    if (todosRemaining === 0) return "No task left";
    else if (todosRemaining === 1) return "1 task left";
    else return `${todosRemaining} tasks left`;
  };

  const handleStatusChange = (status: string) => {
    dispatch(statusChanged(status));
  };

  const handleColorChange = (color: string) => {
    if (colors.includes(color)) dispatch(colorChanged(color, "removed"));
    else dispatch(colorChanged(color, "added"));
  };

  return (
    <div className="mt-4 flex justify-between text-xs text-gray-500">
      <p>{numberOfTodos(todosRemaining)}</p>
      <ul className="flex space-x-1 items-center text-xs">
        <li
          className={`cursor-pointer ${status === "All" && "font-bold"}`}
          onClick={() => handleStatusChange("All")}
        >
          All
        </li>
        <li>|</li>
        <li
          className={`cursor-pointer ${status === "Incomplete" && "font-bold"}`}
          onClick={() => handleStatusChange("Incomplete")}
        >
          Incomplete
        </li>
        <li>|</li>
        <li
          className={`cursor-pointer ${status === "Complete" && "font-bold"}`}
          onClick={() => handleStatusChange("Complete")}
        >
          Complete
        </li>
        <li></li>
        <li></li>
        <li
          className={`h-3 w-3 border-2 border-green-500 md:hover:bg-green-500 ${
            colors.includes("green") && "bg-green-500"
          } cursor-pointer rounded-full`}
          onClick={() => handleColorChange("green")}
        ></li>
        <li
          className={`h-3 w-3 border-2 border-red-500 md:hover:bg-red-500  ${
            colors.includes("red") && "bg-red-500"
          }  rounded-full cursor-pointer`}
          onClick={() => handleColorChange("red")}
        ></li>
        <li
          className={`h-3 w-3 border-2 border-yellow-500 md:hover:bg-yellow-500   ${
            colors.includes("yellow") && "bg-yellow-500"
          }   rounded-full cursor-pointer`}
          onClick={() => handleColorChange("yellow")}
        ></li>
      </ul>
    </div>
  );
};

export default Footer;
