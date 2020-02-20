import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import StatusBarHeader from '../components/StatusBarHeader';
import { useSelector } from 'react-redux';

const Done = props => {
  const items = useSelector(state => state.items.items);

  return (
    <>
      <StatusBarHeader name="Completed" />
      <View style={styles.container}>
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
export default Done;

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
