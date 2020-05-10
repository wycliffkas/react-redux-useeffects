import * as actionTypes from "../actions/actionTypes";

const initialState = {
  count: 0,
};

const changeValue = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.INCREMENT:
      console.log("reaching reducer");
      return {
        ...state,
        count: state.count + 1,
      };
    case actionTypes.DECREMENT:
      return {
        ...state,
        count: state.count - 1,
      };

    case actionTypes.ADD_NUMBER:
      return {
        ...state,
        count: state.count + action.value,
      };
    default:
      return state;
  }
};

export default changeValue;
