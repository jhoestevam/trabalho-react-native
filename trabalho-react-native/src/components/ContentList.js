import React, { Component } from 'react';
import {
  View,
  StyleSheet
} from 'react-native';

import Content from './Content';

export default class ContentList extends Component {
  constructor() {
    super();
    this.onDelete = this.onDelete.bind(this);
  }

  onDelete(e) {
    this.props.delete(e);
  }
  
  render() {
    let i = 1;
    return (
      <View style={styles.container}>
        {this.props.list.map(row => {
          return (
            <Content key={i++} content={row} delete={this.onDelete} />
          )
        })}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 15,
    marginBottom: 15,
    marginLeft: 15,
    marginRight: 15
  }
})
