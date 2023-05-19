import {set_Refresh_Token, set_Token} from '../constant';
const initialState = {tokenDetails: null};
const tokenReducer = (state = initialState, action) => {
  switch (action.type) {
    case set_Token:
      return {
        ...state.tokenDetails,
        auth: action.auth,
      };
    case set_Refresh_Token:
      return {
        ...state.tokenDetails,
        ...action.data,
      };

    default:
      return state;
  }
};

export default tokenReducer;
