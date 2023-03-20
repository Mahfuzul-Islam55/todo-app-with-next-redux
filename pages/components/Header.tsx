import React, { useState } from "react";
import Image from "next/image";
import doubleTick from "../images/double-tick.png";
import notes from "../images/notes.png";
import plus from "../images/plus.png";
import { useDispatch } from "react-redux";
import { added, allCompleted, clearCompleted } from "../redux/todos/actions";
const Header = () => {
  const [input, setInput] = useState<string>("");
  const dispatch = useDispatch();

  const handleInput = (e: React.FormEvent<HTMLInputElement>) => {
    setInput(e.currentTarget.value);
    console.log(input);
  };
  const submitHandler = (e: React.SyntheticEvent) => {
    e.preventDefault();
    dispatch(added(input));
    setInput("");
  };

  const completeHandler = () => {
    dispatch(allCompleted());
  };

  const clearHandler = () => {
    dispatch(clearCompleted());
  };
  return (
    <div>
      <form
        className="flex items-center bg-gray-100 px-4 py-4 rounded-md"
        onSubmit={submitHandler}
      >
        <Image
          src={notes}
          className="w-6 h-6"
          alt="Add todo"
          width={500}
          height={500}
        />
        <input
          type="text"
          placeholder="Type your todo"
          className="w-full text-lg px-4 py-1 border-none outline-none bg-gray-100 text-gray-500"
          value={input}
          onChange={handleInput}
        />
        <button
          type="submit"
          className={`appearance-none w-8 h-8  bg-no-repeat bg-contain`}
        >
          <Image
            src={plus}
            className="w-4 h-4"
            alt="Complete"
            width={900}
            height={900}
          />
        </button>
      </form>

      <ul className="flex justify-between my-4 text-xs text-gray-500">
        <li className="flex space-x-1 cursor-pointer">
          <Image
            src={doubleTick}
            className="w-4 h-4"
            alt="Complete"
            width={500}
            height={500}
          />
          <span onClick={completeHandler}>Complete All Tasks</span>
        </li>
        <li className="cursor-pointer" onClick={clearHandler}>
          Clear completed
        </li>
      </ul>
    </div>
  );
};

export default Header;
