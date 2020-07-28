import * as React from 'react';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';


import { StackScreenProps } from '@react-navigation/stack';

import { StyleSheet, AsyncStorage, Button, TextInput, TouchableOpacity } from 'react-native';

import GlobalContext from '../context/GlobalContext';
import { RootStackParamList } from '../types';

export default function LoginScreen({
    navigation,
}: StackScreenProps<RootStackParamList, 'Login'>) {
    const [global, setGlobal] = React.useContext(GlobalContext);
    const [name, setName] = React.useState('');
    const [password, setPassword] = React.useState('');


    function submitUser() {
        setGlobal({
            ...global,
            User: {
                name: name,
                password: password
            },
            
        });
        navigation.navigate('Root');
    }
  return (
      <View style={styles.container}>
          <Text style={styles.title}>Welcome Back</Text>
          <Text>Email/Phone:</Text>
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
          <TouchableOpacity onPress={() => navigation.replace('Sign')} style={styles.link}>
              <Text style={styles.linkText}>forgot?</Text>
          </TouchableOpacity>
          <View style={styles.button}>
              <Button title="Login" onPress={submitUser} />
          </View>

          <Text>Don't have a account?</Text>
          <TouchableOpacity onPress={() => navigation.replace('Sign')} style={styles.link}>
              <Text style={styles.linkText}>Sign up</Text>
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
