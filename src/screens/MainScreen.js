import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import StatusBarHeader from '../components/StatusBarHeader';
import { useSelector } from 'react-redux';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Colors from '../components/Colors';

const mainScreen = props => {
  const items = useSelector(state => state.items.items);

  return (
    <>
      <StatusBarHeader name="My Planner" />
      <View style={styles.container}>
        <View style={styles.button}>
          <Ionicons name="ios-add" color="white" size={37} />
          <Button
            title="Add Items"
            color="white"
            onPress={() => {
              props.navigation.navigate('Add');
            }}
          />
        </View>
        {items.map(item => (
          <View key={item.id} style={styles.item}>
            <Text>{item.title}</Text>
            <Text>{item.description}</Text>
            <Text>Due: {item.time}</Text>
          </View>
        ))}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  item: {
    marginVertical: 10,
    width: '90%',
    shadowColor: 'black',
    shadowOffset: {
      height: 2,
      width: 0,
    },
    shadowRadius: 6,
    shadowOpacity: 0.26,
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 10,
  },
  button: {
    flexDirection: 'row',
    marginTop: 20,
    height: 36,
    backgroundColor: Colors.primary,
    marginBottom: 10,
    justifyContent: 'center',
    paddingHorizontal: 10,
    borderRadius: 20,
  },
});

export default mainScreen;
