import React, { Component } from 'react';
import {
  TextInput,
  Button,
  View,
  StyleSheet
} from 'react-native';

export default class InputContainer extends Component {
  constructor() {
    super();
    this.state = {
      text: null
    }
    this.btnOnPress = this.btnOnPress.bind(this);
  }

  btnOnPress(e) {
    if (this.state.text) {
      this.props.add(this.state.text);
      this.textClear.setNativeProps({ text: null });
      this.setState({ text: null });
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          autoCapitalize='sentences'
          ref={ e => this.textClear = e }
          placeholder='Input your to-do!'
          onChangeText={ e => this.setState({ text: e }) }
          onSubmitEditing={ this.btnOnPress }
        />
        <Button
          title='INPUT'
          onPress={ this.btnOnPress }
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    marginBottom: 10,
    marginRight: 15,
    marginLeft: 15,
  }
})
