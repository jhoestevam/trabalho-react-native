import React, { Component } from 'react';
import {
  AppRegistry
} from 'react-native';
import Container from './src/components/Container';

export default class ToDo extends Component {
  render() {
    return (
      <Container />
    );
  }
}

AppRegistry.registerComponent('ToDo', () => ToDo);
