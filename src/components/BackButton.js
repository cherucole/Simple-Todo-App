import React from 'react';
import {TouchableOpacity, StyleSheet, Platform} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const BackButton = props => {
  return (
    <TouchableOpacity
      onPress={props.onPressBack}
      style={{
        ...styles.button,
        ...{
          zIndex: 10,
          top: Platform.OS === 'ios' ? 34 : 24,
          width: 60,
          height: 40,
          left: -5,
        },
      }}>
      <Ionicons name="ios-arrow-back" size={35} color="white" />
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
  },
});

export default BackButton;
