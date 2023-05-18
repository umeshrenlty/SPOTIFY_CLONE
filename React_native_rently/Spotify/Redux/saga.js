import {takeEvery, put, takeLatest, delay} from 'redux-saga/effects';
import {spotifyAuthConfig} from '../utils/spotifyAuthConfig';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {authorize, refresh} from 'react-native-app-auth';
import {authenticate_User} from './constant';
import {request_Refreshed_AccessToken} from './constant';
import {set_Token} from './constant';
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
  console.log(11);

  const auth = yield authorize(spotifyAuthConfig);
  const {accessToken, refreshToken, accessTokenExpirationDate} = auth;
  console.log(accessToken, 'start');
  saveTokensToAsyncStorage(
    accessToken,
    refreshToken,
    accessTokenExpirationDate,
  );
}

function* requestRefreshedAccessToken(refreshTokenFromStorage) {
  console.log('hello');
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
  yield put({type: set_Token, auth});
}

function* getTokenSaga() {
  console.log(1111, 3455);
  try {
    yield takeLatest(authenticate_User, getToken);
    yield takeEvery(request_Refreshed_AccessToken, requestRefreshedAccessToken);
  } catch (error) {
    console.error(error);
  }
}

export default getTokenSaga;
