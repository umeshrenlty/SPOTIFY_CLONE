import {ADD_ITEM, REMOVE_ITEM} from '../actionType';

export const Reducers = (state = [], action) => {
  switch (action.type) {
    case ADD_ITEM: {
      return [...state, action.payload];
    }
    case REMOVE_ITEM:
      const deleteArray = action.payload.filter((item, index) => {
        return (index = action.payload);
      });
      return deleteArray;

    default:
      return state;
  }
};
