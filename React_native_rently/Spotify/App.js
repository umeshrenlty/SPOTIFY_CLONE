import React, {useEffect} from 'react';
import {StatusBar} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import {NavigationContainer} from '@react-navigation/native';

import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  CardStyleInterpolators,
  createStackNavigator,
} from '@react-navigation/stack';

import {LoadingSpinner} from './components/LoadSpinner';
import {useSelector, useDispatch} from 'react-redux';
import Authorize from './screens/Authorize';
import TrackPlayer from './screens/TrackPlayer';
import HomeTabs from './Navigation/HomeTab';

// import {
//   setTokens,
//   requestRefreshedAccessTokenAsync,
// } from './store/slices/authSlice';

const Stack = createStackNavigator();

const App = () => {
  // if (auth.tokenIsLoading) return <LoadingSpinner />;
  const auth = false;
  return (
    <>
      <StatusBar
        translucent={true}
        animated={true}
        backgroundColor={'transparent'}
        barStyle={'light-content'}
      />
      <NavigationContainer>
        <Stack.Navigator
          // initialRouteName="Home"
          screenOptions={() => ({
            headerShown: false,
            tabBarShowLabel: false,
          })}>
          {auth ? (
            <Stack.Group>
              <Stack.Screen name="HomeTabs" component={HomeTabs} />
              <Stack.Screen name="TrackPlayer" component={TrackPlayer} />
            </Stack.Group>
          ) : (
            <Stack.Group>
              <Stack.Screen name="Authorize" component={Authorize} />
              <Stack.Screen name="HomeTabs" component={HomeTabs} />
            </Stack.Group>
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;
