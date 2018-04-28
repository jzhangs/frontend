import React, { Component } from 'react';
import { Navigator, BackHandler, Platform } from 'react-native';

import LoginLeaf from './LoginLeaf';
import WaitingLeaf from './WaitingLeaf';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentScene: 'Login',
      phoneNumber: '',
      userPW: ''
    };
  }

  handleBackSingal = () => {
    const { currentScene } = this.state;
    if (currentScene === 'Waiting') {
      this.setState({ currentScene: 'Login' });
      return true;
    }
    return false;
  };

  onLoginPressed = (number, pw) =>
    this.setState({
      currentScene: 'Waiting',
      phoneNumber: number,
      userPW: pw
    });

  componentDidMount() { 
    if (Platform.OS === 'android') {
      BackHandler.addEventListener('hardwareBackPress', this.handleBackSingal);
    }
  }

  componentWillUnmount() {
    if (Platform.OS === 'android') {
      BackHandler.removeEventListener('hardwareBackPress', this.handleBackSingal);
    }
  }

  render() {
    const { currentScene, ...rest } = this.state;
    if (currentScene === 'Login') {
      return <LoginLeaf onLoginPressed={this.onLoginPressed} />;
    }
    return <WaitingLeaf {...rest} onGobackPressed={this.handleBackSingal} />;
  }
}
