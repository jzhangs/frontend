/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Dimensions,
  PixelRatio
} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

const { height, width } = Dimensions.get('window');
const pixelRatio = PixelRatio.get();

type Props = {};
export default class App extends Component<Props> {
  render() {
    let aValue;
    console.log('Render has been executed.');
    console.log('Screen height is: ' + height);
    console.log('aValue is: ' + aValue);
    console.log('The type of aValue is: ' + typeof(aValue));

    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          One logic pixel equals {pixelRatio} physical pixel
        </Text>
        <Text style={styles.instructions}>
          Height of device is {height} logic pixel
        </Text>
        <Text style={styles.instructions}>
          Width of device is {width} logic pixel
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
