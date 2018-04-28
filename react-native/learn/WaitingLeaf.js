import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class WaitingLeaf extends React.Component {
  constructor(props) {
    super(props);
  }

  onGobackPressed = () => this.props.onGobackPressed();

  render() {
    const { phoneNumber, userPW } = this.props;
    return (
      <View style={styles.container}>
        <Text style={styles.textPromptStyle}>Login number: {phoneNumber}</Text>
        <Text style={styles.textPromptStyle}>Login password: {userPW}</Text>
        <Text style={styles.bigTextPrompt} onPress={this.onGobackPressed}>
          Back
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
    backgroundColor: '#f5fcff'
  },
  textPromptStyle: {
    fontSize: 20
  },
  bigTextPrompt: {
    width: 300,
    backgroundColor: 'gray',
    color: 'white',
    textAlign: 'center',
    fontSize: 60,
    height: 60
  }
});
