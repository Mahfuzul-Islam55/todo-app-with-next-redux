import { COLORCHANGED, STATUSCHANGED } from "./actionTypes";

export const colorChanged = (color: string, changeType: string) => {
  return {
    type: COLORCHANGED,
    payload: {
      color: color,
      changeType: changeType,
    },
  };
};

export const statusChanged = (status: string) => {
  return {
    type: STATUSCHANGED,
    payload: {
      status: status,
    },
  };
};
