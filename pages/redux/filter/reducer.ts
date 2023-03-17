import { COLORCHANGED, STATUSCHANGED } from "./actionTypes";
import { IAction, IInitialState } from "./types";

const reducer = (state: IInitialState, action: IAction) => {
  const { type, payload } = action;
  switch (type) {
    case STATUSCHANGED:
      return {
        ...state,
        status: payload.status,
      };
    case COLORCHANGED:
      const { color, changeType } = payload;
      switch (changeType) {
        case "added":
          return {
            ...state,
            colors: [...state.colors, color],
          };
        case "removed":
          return {
            ...state,
            colors: state.colors?.filter(
              (existingColor) => existingColor !== color
            ),
          };
        default:
          return state;
      }
    default:
      return state;
  }
};
