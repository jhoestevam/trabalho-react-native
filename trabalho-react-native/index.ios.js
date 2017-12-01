import React, { Component } from 'react';
import {
  AppRegistry
} from 'react-native';
import Container from './src/components/container';

export default class ToDo extends Component {
  render() {
    return (
      <Container />
    );
  }
}

AppRegistry.registerComponent('ToDo', () => ToDo);
