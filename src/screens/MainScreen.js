import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import StatusBarHeader from '../components/StatusBarHeader';
import { connect, useDispatch } from 'react-redux';

const mainScreen = props => {
  const { title, description, time } = props.items;

  return (
    <View style={styles.container}>
      <StatusBarHeader name="Add Items" />

      <Button
        title="Add Items"
        color="red"
        onPress={() => {
          props.navigation.navigate('Add');
        }}
      />
      <View style={styles.item}>
        <Text>{title}</Text>
        <Text>{description}</Text>
        <Text>{description}</Text>
      </View>
    </View>
  );
};
const mapStateToProps = state => {
  return {
    items: state.items,
  };
};

export default connect(mapStateToProps)(mainScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    borderWidth: 10,
    borderColor: '#000',
    height: 100,
  },
});
