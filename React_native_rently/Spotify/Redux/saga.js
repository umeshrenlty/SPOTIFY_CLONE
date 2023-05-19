import {takeEvery, put, takeLatest, all} from 'redux-saga/effects';
import {spotifyAuthConfig} from '../utils/spotifyAuthConfig';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {authorize, refresh} from 'react-native-app-auth';
import {authenticate_User, get_User_Playlists} from './constant';
import {request_Refreshed_AccessToken} from './constant';
import {set_Token} from './constant';

import axios from 'axios';
const saveTokensToAsyncStorage = (
  accessToken,
  refreshToken,
  accessTokenExpirationDate,
) => {
  AsyncStorage.setItem(
    'authData',
    JSON.stringify({
      accessToken,
      refreshToken,
      accessTokenExpirationDate,
    }),
  );
};
function* getToken() {
  const auth = yield authorize(spotifyAuthConfig);
  const {accessToken, refreshToken, accessTokenExpirationDate} = auth;

  saveTokensToAsyncStorage(
    accessToken,
    refreshToken,
    accessTokenExpirationDate,
  );
}

function* requestRefreshedAccessToken(refreshTokenFromStorage) {
  const auth = yield refresh(spotifyAuthConfig, {
    refreshToken: refreshTokenFromStorage,
  });
  const {accessToken, refreshToken, accessTokenExpirationDate} = auth;
  console.log(accessToken, 'refreshOe');
  saveTokensToAsyncStorage(
    accessToken,
    refreshToken,
    accessTokenExpirationDate,
  );
}
function* getUser(value) {
  console.log('hello');
  const authData = yield AsyncStorage.getItem('authData');
  const {accessToken} = yield JSON.parse(authData);
  yield axios('https://api.spotify.com/v1/playlists/3cEYpjA9oz9GiPac4AsH4n', {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + accessToken,
    },
  })
    .then(response => {
      console.log(response);
    })
    .catch(error => {
      console.log('error', error.message);
    });
}

function* getTokenSaga() {
  console.log(1111, 3455);
  try {
    yield takeLatest(authenticate_User, getToken);
    yield takeEvery(request_Refreshed_AccessToken, requestRefreshedAccessToken);
    yield takeEvery(get_User_Playlists, getUser);
  } catch (error) {
    console.error(error);
  }
}

export default getTokenSaga;
