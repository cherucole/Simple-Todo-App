import React from 'react';
import { View, Text, StatusBar, StyleSheet, Platform } from 'react-native';
import Colors from './Colors';
const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 30 : StatusBar.currentHeight;
const APPBAR_HEIGHT = Platform.OS === 'ios' ? 44 : 56;

const MyStatusBar = ({ backgroundColor, ...props }) => (
  <View style={[styles.statusBar, { backgroundColor }]}>
    <StatusBar translucent backgroundColor={backgroundColor} {...props} />
  </View>
);

const StatusBarHeader = props => {
  return (
    <View style={styles.mainContainer}>
      <MyStatusBar backgroundColor={Colors.primary} barStyle="light-content" />
      <View style={styles.appBar}>
        <Text style={styles.headerText}>{props.name}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    borderBottomColor: '#6161F3',
    borderBottomWidth: 0.5,
  },
  headerText: {
    fontSize: 31,
    color: '#fff',
    fontWeight: '500',
  },

  statusBar: {
    height: STATUSBAR_HEIGHT,
  },
  appBar: {
    backgroundColor: Colors.primary, //bar just below status bar
    height: APPBAR_HEIGHT,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default StatusBarHeader;
