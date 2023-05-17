import {set_Token} from '../constant';

const reducer = (state = {token: ''}, action) => {
  console.log(action.type, state, 455);

  switch (action.type) {
    case set_Token:
      console.log(11);
      return {
        ...state,
        token: action.token,
      };

    default:
      return state;
  }
};

export default reducer;
