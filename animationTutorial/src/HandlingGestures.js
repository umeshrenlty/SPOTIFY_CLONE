import {StyleSheet, Text, View, Animated, PanResponder} from 'react-native';
import React from 'react';

const App = () => {
  const position = new Animated.ValueXY({x: 0, y: 0});
  const pan = PanResponder.create({
    onMoveShouldSetPanResponder: () => true,
    // onPanResponderMove: Animated.event([
    //   null,
    //   {dx: position.x, dy: position.y},
    // ]),
    onPanResponderMove: (e, gesture) => {
      position.setValue({x: gesture.dx, y: gesture.dy});
    },
    onPanResponderRelease: () => {
      // position.setValue({
      //   x: 0,
      //   y: 0,
      // });
      Animated.spring(position, {
        toValue: {x: 0, y: 0},
      }).start();
    },
  });
  // Animated.timing(position, {
  //   toValue: {x: 200, y: 500},
  //   duration: 5000,
  // }).start();

  const rotate = position.x.interpolate({
    inputRange: [0, 100],
    outputRange: ['0deg', '360deg'],
  });
  return (
    <View style={styles.main}>
      <Animated.View
        {...pan.panHandlers}
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

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'blue',
    height: 800,
    width: 300,
    top: 400,
  },
});
