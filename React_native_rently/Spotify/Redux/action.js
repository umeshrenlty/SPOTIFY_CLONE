import {access_Token} from './constant';
import {authenticate_User, set_Token} from './constant';

export const accessToken = () => {
  return {
    type: access_Token,
  };
};
export const authenticateUser = () => {
  return {
    type: authenticate_User,
  };
};
export const setToken = data => {
  return {
    type: set_Token,
    data,
  };
};
