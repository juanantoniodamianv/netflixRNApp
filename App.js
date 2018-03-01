import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import List from './src/components/List';
import Slide from './src/components/Slider';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Slide />
        <List />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
