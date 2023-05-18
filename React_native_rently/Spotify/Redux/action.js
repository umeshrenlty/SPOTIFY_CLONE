import {request_Refreshed_AccessToken, set_Refresh_Token} from './constant';
import {authenticate_User, set_Token} from './constant';

export const requestRefreshedAccessToken = () => {
  return {
    type: request_Refreshed_AccessToken,
  };
};
export const authenticateUser = () => {
  return {
    type: authenticate_User,
  };
};
export const setToken = auth => {
  return {
    type: set_Token,
    auth,
  };
};
export const setRefreshToken = data => {
  return {
    type: set_Refresh_Token,
    data,
  };
};
