import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet
} from 'react-native';

export default class Content extends Component {
  constructor() {
    super();
    this.onDelete = this.onDelete.bind(this);
  }

  onDelete(e) {
    this.props.delete(this.props.content);
  }
  
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.content}>{this.props.content}</Text>
        <Text onPress={this.onDelete} style={styles.btnClose}>x</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    marginBottom: 10,
    paddingTop: 10,
    paddingBottom: 10,
    borderBottomWidth: 2,
    borderBottomColor: '#eee',
    borderLeftWidth: 3,
    borderLeftColor: '#6688ff',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
  },

  content : {
    flex: 10,
    paddingRight: 15,
    paddingLeft: 15
  },

  btnClose: {
    flex: 1,
    textAlign: 'center',
    color: '#ff5555',
    marginRight: 5,
    width: 'auto'
  }
})
