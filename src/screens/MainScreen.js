import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

const mainScreen = props => (
  <View style={styles.container}>
    <Text>mainScreen</Text>
  </View>
);
export default mainScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
