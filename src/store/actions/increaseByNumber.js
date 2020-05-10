import * as actionTypes from "./actionTypes";

export const increaseByNumber = (number) => {
  return {
    type: actionTypes.ADD_NUMBER,
    value: number,
  };
};
