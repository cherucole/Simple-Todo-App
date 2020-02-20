import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import StatusBarHeader from '../components/StatusBarHeader';
import { useSelector } from 'react-redux';

const mainScreen = props => {
  const items = useSelector(state => state.items.items);

  return (
    <>
      <StatusBarHeader name="Add Items" />
      <View style={styles.container}>
        <Button
          title="Add Items"
          color="red"
          onPress={() => {
            props.navigation.navigate('Add');
          }}
        />
        {items.map(item => (
          <View key={item.title} style={styles.item}>
            <Text>{item.title}</Text>
            <Text>{item.description}</Text>
            <Text>{item.time}</Text>
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
});

export default mainScreen;
