import React, {useEffect} from 'react';
import {View, Text, Alert} from 'react-native';
import TextButton from '../components/TextButton';
import {authorize, refresh} from 'react-native-app-auth';
import {COLORS} from '../constants';
import {useDispatch} from 'react-redux';
import {authenticateUser} from '../Redux/action';
const Authorize = () => {
  const dispatch = useDispatch();



  var client_id = '';
  var client_secret = ''; // In a real app you should not expose your client_secret to the user

  const AUTHORIZE = 'https://accounts.spotify.com/authorize';
  const requestAuthorization = async () => {
    const config = {
      issuer: 'https://accounts.spotify.com',
      clientId: '500d178b001d4745959acc58751d0992',
      redirectUrl: 'demospotify://app',
      scopes: [
        'playlist-read-private',
        'user-read-private',
        'user-read-email',
        'user-library-read',
        'user-top-read',
        'user-read-recently-played',
        'user-follow-read',
        'user-read-playback-state',
        'user-read-currently-playing',
        'user-modify-playback-state',
        'user-read-playback-position',
      ],
    };

    const result = await authorize(config);
    console.log(result, 11);

  };

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: COLORS.black,
      }}>
      <TextButton
        onPress={() => requestAuthorization()}
        label="LOG IN TO SPOTIFY"
      />
    </View>
  );
};

export default Authorize;
