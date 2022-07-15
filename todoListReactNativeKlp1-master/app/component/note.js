/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
export default class Note extends React.Component {
  render() {
    return (
      <View key={this.props.keyval} styles={styles.note}>
        <Text style={styles.noteText}>{this.props.val.date}</Text>
        <Text style={styles.noteText}>{this.props.val.note}</Text>
        <TouchableOpacity
          onPress={this.props.deleteMethod}
          style={styles.noteDelete}>
          <Text style={styles.noteDeleteText}>Delete</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  note: {
    position: 'relative',
    padding: 20,
    paddingRight: 200,
  },
  noteText: {
    marginTop: 10,
    paddingLeft: 20,
  },
  noteDelete: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1e90ff',
    padding: 8,
    top: 10,
    bottom: 10,
    right: 10,
    borderRadius: 10,
  },
  noteDeleteText: {
    Text: '#ff0000',
  },
});
