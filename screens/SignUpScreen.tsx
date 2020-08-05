import * as React from 'react';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';

import { Input } from 'react-native-elements';
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


        if (global.users) {
            setGlobal({
                ...global,
                users: [
                    ...global.users,
                    {
                        name: name,
                        password: password,
                        mobile: mobile
                    }
                ]
            });
        } else {
            setGlobal({
                ...global,
                users: [
                    {
                        name: name,
                        password: password,
                        mobile: mobile
                    }
                ]
            });
        }

        navigation.navigate('Login')
    }

  return (
      <View style={styles.container}>
          <div className="about-backgroundImage" >
              <img src={require('../assets/images/train.png')} />
          </div>
          <div className="about-backgroundImage" >
              <img src={require('../assets/images/sign.png')} />
          </div>

          <View style={styles.body}>
              <Input
                  label='Username'
                  placeholder='  Enter Username'
                  leftIcon={{ type: 'font-awesome', name: 'user' }}
                  errorStyle={{ color: 'red' }}
                  onChangeText={text => setName(text)}
              />
          </View>

          <View style={styles.body}>
              <Input
                  label='Password'
                  placeholder='   Enter password'
                  leftIcon={{ type: 'font-awesome', name: 'check' }}
                  errorStyle={{ color: 'red' }}
                  onChangeText={text => setPassword(text)}
                  secureTextEntry={true}
              />
          </View>

          <View style={styles.body}>
              <Input
                  label='Mobile'
                  placeholder='   Enter mobile'
                  leftIcon={{ type: 'font-awesome', name: 'phone' }}
                  errorStyle={{ color: 'red' }}
                  onChangeText={text => setmobile(text)}
              />
          </View>
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
        marginVertical: 10,
        backgroundColor: '#006666',
        width: '40%'
    },
    linkText: {
        fontSize: 16,
        color: '#006666'
    },
    link: {
        marginTop: 15,
        paddingVertical: 15,
    },
    body: {
        width: '40%'
    },
});
