import React, {useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';

const CallbackScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    const handleCallback = url => {
      // Extract the necessary information from the callback URL
      // For example, you can use a library like query-string to parse the URL parameters
      // and retrieve the access token or authorization code from the URL

      // Once you have the required information, you can store it or use it as needed
      // For demonstration purposes, let's assume we have retrieved the access token
      const accessToken = 'YOUR_ACCESS_TOKEN';

      // Perform any necessary actions with the access token (e.g., save it, use it for API requests)

      // Now navigate to the desired screen in your app
      navigation.navigate('MainScreen');
    };

    // Get the URL of the callback from the browser or web view
    const url = ''; // Set the callback URL obtained from the browser or web view here

    handleCallback(url);
  }, [navigation]);

  return null; // Return null since we don't need to render anything in this screen
};

export default CallbackScreen;
