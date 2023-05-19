import {
  get_User_Playlists,
  request_Refreshed_AccessToken,
  set_Refresh_Token,
  get_Featured_Playlists,
  get_User_Recently_Playlists,
  get_Category_Playlists,
  get_User_Top_Artists,
  set_User_Playlists,
} from './constant';
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
  console.log(4);
  return {
    type: set_Refresh_Token,
    data,
  };
};
export const getUserPlaylists = data => {
  return {
    type: get_User_Playlists,
    data: data,
  };
};
export const setUserPlaylists = playlist => {
  return {
    type: set_User_Playlists,
    playlist,
  };
};
export const getUserTopArtists = () => {
  return {
    type: get_User_Top_Artists,
  };
};
export const getUserRecentlyPlaylists = () => {
  return {
    type: get_User_Recently_Playlists,
  };
};
export const getCategoryPlaylists = () => {
  return {
    type: get_Category_Playlists,
  };
};
