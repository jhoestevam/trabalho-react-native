import React, { Component } from 'react';
import {
  ScrollView,
  Text,
  StyleSheet,
  AsyncStorage
} from 'react-native';

import InputContainer from './Input';
import ContentList from './ContentList';

export default class Container extends Component {
  constructor() {
    super();
    this.state = {
      list: []
    }
    this.onAdd = this.onAdd.bind(this);
    this.onDelete = this.onDelete.bind(this);
  }

  componentDidMount() {
    AsyncStorage.getItem('myList').then(val => {
      let newVal = JSON.parse(val);
      if (newVal === null) {
        newVal = []
      }
      this.setState({list: newVal});
    })
  }

  onAdd(data) {
    let list = this.state.list;
    list.unshift(data);
    this.setState({
      list: list
    });
    AsyncStorage.setItem('myList', JSON.stringify(this.state.list));
  }

  onDelete(e) {
    let newList = this.state.list.filter(result => result !== e);
    this.setState({ list: newList }, () => {
      AsyncStorage.setItem('myList', JSON.stringify(this.state.list));
    });
  }
  
  render() {
    return (
      <ScrollView>
        <Text style={styles.title}>TO-DO LIST</Text>
        <InputContainer add={this.onAdd} />
        <ContentList list={this.state.list} delete={this.onDelete} />
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 20,
    marginBottom: 15
  }
})
