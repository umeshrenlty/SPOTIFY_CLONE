import {StyleSheet, Text, View, Animated} from 'react-native';
import React from 'react';

const App = () => {
  const position = new Animated.ValueXY({x: 0, y: 0});
  Animated.timing(position, {
    toValue: {x: 200, y: 500},
    duration: 5000,
  }).start();

  const rotate = position.y.interpolate({
    inputRange: [0, 50],
    outputRange: ['0deg', '360deg'],
  });
  return (
    <View style={{flex: 1}}>
      <Animated.View
        style={{
          height: 80,
          width: 80,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'red',
          transform: [
            {translateX: position.x},
            {translateY: position.y},
            {rotate: rotate},
          ],
        }}>
        <Text>hello</Text>
      </Animated.View>
      <Animated.View
        style={{
          height: 80,
          width: 80,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'red',
          transform: [
            {translateX: position.x},
            {translateY: position.y},
            {rotate: rotate},
          ],
        }}>
        <Text>hello</Text>
      </Animated.View>
      <Animated.View
        style={{
          height: 80,
          width: 80,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'red',
          transform: [
            {translateX: position.x},
            {translateY: position.y},
            {rotate: rotate},
          ],
        }}>
        <Text>hello</Text>
      </Animated.View>
      <Animated.View
        style={{
          height: 80,
          width: 80,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'red',
          transform: [
            {translateX: position.x},
            {translateY: position.y},
            {rotate: rotate},
          ],
        }}>
        <Text>hello</Text>
      </Animated.View>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({});
