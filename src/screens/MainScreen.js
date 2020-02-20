import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import StatusBarHeader from '../components/StatusBarHeader';
import { useSelector, useDispatch } from 'react-redux';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import Colors from '../components/Colors';
import { deleteItem, doneItem } from '../store/actions';
import RoundButton from '../components/RoundButton';

const mainScreen = props => {
  const items = useSelector(state => state.items.items);
  const dispatch = useDispatch();

  return (
    <>
      <StatusBarHeader name="My Planner" />
      <View style={styles.container}>
        <RoundButton
          onPress={() => {
            props.navigation.navigate('Add');
          }}
        />
        {items.length > 0 &&
          items.map(item => (
            <View key={item.id} style={styles.item}>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.description}>{item.description}</Text>
              <Text style={styles.time}>{item.time}</Text>
              <View style={styles.actions}>
                <MaterialIcons
                  name="delete"
                  color={Colors.primary}
                  size={32}
                  onPress={() => dispatch(deleteItem(item.id))}
                />
                <Ionicons
                  name="ios-done-all"
                  color={Colors.primary}
                  size={32}
                  onPress={() => dispatch(doneItem(item.id))}
                />
              </View>
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
    paddingTop: 10,
    backgroundColor: Colors.primary,
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
    backgroundColor: Colors.accent,
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
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 5,
  },
  title: {
    color: 'white',
    fontSize: 22,
  },
  description: {
    color: Colors.primary,
    fontSize: 18,
    marginVertical: 5,
  },
  time: {
    color: Colors.primary,
    fontSize: 16,
    // fontStyle: 'italic',
  },
});

export default mainScreen;
