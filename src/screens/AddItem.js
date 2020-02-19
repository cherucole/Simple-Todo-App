import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const AddItem = props => (
  <View style={styles.container}>
    <Text>AddItem</Text>
  </View>
);
export default AddItem;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
