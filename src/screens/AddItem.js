import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  KeyboardAvoidingView,
  Button,
  TouchableHighlight,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
} from 'react-native';
import StatusBarHeader from '../components/StatusBarHeader';
import Colors from '../components/Colors';
import BackButton from '../components/BackButton';

const AddItem = props => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [time, setTime] = useState('');
  const onSubmitHandler = () => {
    Alert.alert(title);
  };
  return (
    <View style={styles.mainContainer}>
      <BackButton />
      <StatusBarHeader name="Add Items" />
      <KeyboardAvoidingView
        behavior="position"
        keyboardVerticalOffset={50}
        enabled>
        <TouchableWithoutFeedback
          onPress={() => {
            Keyboard.dismiss();
          }}>
          <View style={styles.container}>
            <TextInput
              style={styles.input}
              placeholder="Title"
              placeholderTextColor="grey"
              autoCapitalize="none"
              onChangeText={text => setTitle(text)}
              value={title}
            />
            <TextInput
              style={{...styles.input, ...{height: 160}}}
              placeholder="Item Description"
              placeholderTextColor="grey"
              autoCapitalize="none"
              onChangeText={text => setDescription(text)}
              value={description}
              multiline={true}
            />
            <TextInput
              style={styles.input}
              placeholder="Time"
              placeholderTextColor="grey"
              autoCapitalize="none"
              onChangeText={text => setTime(text)}
              value={time}
            />
            <TouchableHighlight
              style={styles.button}
              onPress={onSubmitHandler}
              underlayColor="#99d9f4">
              <Text style={styles.buttonText}>Add Item</Text>
            </TouchableHighlight>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </View>
  );
};
export default AddItem;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  container: {
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#ffffff',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginVertical: 10,
    paddingLeft: 10,
    borderRadius: 5,
  },
  button: {
    height: 36,
    backgroundColor: Colors.primary,
    borderRadius: 8,
    marginBottom: 10,
    alignSelf: 'stretch',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
    alignSelf: 'center',
  },
});
