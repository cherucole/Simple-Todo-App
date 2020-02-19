import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Done = props => (
  <View style={styles.container}>
    <Text>Done</Text>
  </View>
);
export default Done;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
