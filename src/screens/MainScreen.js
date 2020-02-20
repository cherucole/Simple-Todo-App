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
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.description}>{item.description}</Text>
            <Text style={styles.time}>{item.time}</Text>
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
  title: {
    color: '#000000',
    fontSize: 22,
  },
  description: {
    color: '#546e7a',
    fontSize: 18,
    marginVertical: 5,
  },
  time: {
    color: '#546e7a',
    fontSize: 16,
    // fontStyle: 'italic',
  },
});

export default mainScreen;
