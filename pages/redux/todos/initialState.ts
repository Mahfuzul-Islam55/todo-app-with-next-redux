import { IInitialState } from "./types";

export const initialState: IInitialState[] = [
  {
    id: 1,
    text: "Learn Next.js",
    completed: false,
    color: "green",
    isComplete: false,
  },
  {
    id: 2,
    text: "Learn Redux",
    completed: false,
    color: "yellow",
    isComplete: true,
  },
  {
    id: 3,
    text: "Learn Typescript",
    completed: false,
    color: "red",
    isComplete: false,
  },
];
