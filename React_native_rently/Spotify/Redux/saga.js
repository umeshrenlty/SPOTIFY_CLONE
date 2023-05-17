import {takeEvery, put} from 'redux-saga/effects';
import {spotifyAuthConfig} from '../utils/spotifyAuthConfig';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {authorize, refresh} from 'react-native-app-auth';
import {authenticate_User, refresh_authenticate_User} from './constant';
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

  const {accessToken, refreshToken, accessTokenExpirationDate} =
    yield authorize(spotifyAuthConfig);
  console.log(accessToken, refreshToken, accessTokenExpirationDate);
  saveTokensToAsyncStorage(
    accessToken,
    refreshToken,
    accessTokenExpirationDate,
  );

  yield put({
    type: set_Token,
    accessToken,
  });
  return {accessToken, refreshToken, accessTokenExpirationDate};
}

// function* getRefreshToken(refreshTokenFromStorage) {
//   const {accessToken, refreshToken, accessTokenExpirationDate} = yield refresh(
//     spotifyAuthConfig,
//     {refreshToken: refreshTokenFromStorage},
//   );
//   console.log(accessToken);
//   saveTokensToAsyncStorage(
//     accessToken,
//     refreshToken,
//     accessTokenExpirationDate,
//   );
//   return {accessToken, refreshToken, accessTokenExpirationDate};
// }

function* getTokenSaga() {
  console.log(1111, 3455);
  yield takeEvery(authenticate_User, getToken);
  // yield takeEvery(refresh_authenticate_User, getRefreshToken);
}

export default getTokenSaga;
