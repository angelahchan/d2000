import * as React from 'react';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';


import { StackScreenProps } from '@react-navigation/stack';

import { StyleSheet, AsyncStorage, Button, TextInput, TouchableOpacity } from 'react-native';

import GlobalContext from '../context/GlobalContext';
import { RootStackParamList } from '../types';

export default function SignUpScreen({
    navigation,
}: StackScreenProps<RootStackParamList, 'Sign'>) {
    const [global, setGlobal] = React.useContext(GlobalContext);
    const [name, setName] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [mobile, setmobile] = React.useState('');

    function submitUser() {
        setGlobal({
            ...global,
            User: {
                name: name,
                password: password,
                mobile:mobile
            },
            
        });
        navigation.navigate('Login');
    }
  return (
      <View style={styles.container}>
          <Text style={styles.title}>Sign up</Text>
          <Text>Email:</Text>
          <TextInput
              style={styles.textInput}
              value={name}
              onChangeText={text => setName(text)}
          />
          <Text>Password:</Text>
          <TextInput
              style={styles.textInput}
              value={password}
              onChangeText={text => setPassword(text)}
          />
          <Text>Mobile:</Text>
          <TextInput
              style={styles.textInput}
              value={mobile}
              onChangeText={text => setmobile(text)}
          />
          <View style={styles.button}>
              <Button title="SignUp" onPress={submitUser} />
          </View>
          <Text>Already have an account?</Text>
          <TouchableOpacity onPress={() => navigation.replace('Login')} style={styles.link}>
              <Text style={styles.linkText}>Log in</Text>
          </TouchableOpacity>
      </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        width: '80%',
        textAlign: 'center',
        margin: 30

    },
    separator: {
        marginVertical: 30,
        height: 1,
        width: '80%',
    },
    textInput: {
        borderColor: 'gray',
        borderWidth: 1,
        width: '50%',
        marginTop: 5,
        marginBottom: 25
    },
    button: {
        marginVertical: 10
    },
    linkText: {
        fontSize: 14,
        color: '#2e78b7',
    },
    link: {
        marginTop: 15,
        paddingVertical: 15,
    }
});
