import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Colors from './Colors';

const RoundButton = props => (
  <View style={styles.button}>
    <Text style={{ fontSize: 40, color: 'white' }}>+</Text>
  </View>
);
export default RoundButton;

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.accent,
    width: 60,
    height: 60,
    borderRadius: 50,
    position: 'absolute',
    right: 20,
    bottom: 10,
    shadowColor: 'white',
    shadowOffset: {
      height: 2,
      width: 0,
    },
    shadowRadius: 6,
    shadowOpacity: 0.6,
  },
});
