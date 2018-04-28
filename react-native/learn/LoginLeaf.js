/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Dimensions, PixelRatio, TextInput, Alert } from 'react-native';

const inputHeight = Platform.select({
  ios: 60,
  android: 40
});

const { height, width } = Dimensions.get('window');
const pixelRatio = PixelRatio.get();
const widthOfMargin = width * 0.05;

type Props = {};
export default class LoginLeaf extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {
      inputNum: '',
      inputPW: ''
    };
  }

  updateNum = inputNum => this.setState({ inputNum });

  updatePW = inputPW => this.setState({ inputPW });

  userPressConfirm = () => {
    const { inputNum, inputPW } = this.state;
    Alert.alert('Confrim', `Use ${inputNum} to login?`, [
      { text: 'Cancel', onPress: () => {}, style: 'cancel' },
      {
        text: 'OK',
        onPress: () => {
          this.props.onLoginPressed(inputNum, inputPW);
        }
      }
    ]);
  };

  userPressAddressBook = () => {};

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.textInputStyle}
          placeholder={'Please input phone number'}
          onChangeText={this.updateNum}
        />
        <Text style={styles.textPromptStyle}>The iphone you input: {this.state.inputNum}</Text>
        <TextInput
          style={styles.textInputStyle}
          placeholder={'Please input password'}
          password={true}
          onChangeText={this.updatePW}
        />
        <Text style={styles.bigTextPrompt} onPress={this.userPressConfirm}>
          Confirm
        </Text>
        <Text style={styles.bigTextPrompt} onPress={this.userPressAddressBook}>
          Contacts
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
    backgroundColor: '#F5FCFF'
  },
  textInputStyle: {
    margin: widthOfMargin,
    backgroundColor: 'gray',
    fontSize: 20,
    height: inputHeight
  },
  textPromptStyle: {
    margin: widthOfMargin,
    fontSize: 20
  },
  bigTextPrompt: {
    margin: widthOfMargin,
    backgroundColor: 'gray',
    color: 'white',
    textAlign: 'center',
    fontSize: 30
  }
});
