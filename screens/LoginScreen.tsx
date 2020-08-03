import * as React from 'react';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { LOGIN_STATUS } from '../constants/LoginState';

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
    const [loginState, setLoginState] = React.useState(LOGIN_STATUS.READY);



    function submitUser() {
        console.log(global);
        if (!global.users) {
            setLoginState(LOGIN_STATUS.FAILNAME);
            return 0;
        }

        let canfinduser = false;
        let correctpass = false;
        for (var i = 0; i < global.users.length;i++) {
            if (global.users[i].name == name || global.users[i].moblie == name) {
                canfinduser = true;
                if (global.users[i].password == password) {
                    correctpass = true;
                    setGlobal({
                        ...global,
                        CurrentUser: {
                            name: name,
                            password: password
                        },

                    });
                    navigation.navigate('Root');
                    return 0;
                }

            }
        }
   //     const newList = global.users.map((item) => {

   //     });

        console.log(loginState);


        if (canfinduser == true && correctpass == false) {
            setLoginState(LOGIN_STATUS.FAILPASS);
        }

        if (canfinduser == false) {
            setLoginState(LOGIN_STATUS.FAILNAME);
        }

        navigation.navigate('Login');
        
    }

    switch (loginState) {
        case LOGIN_STATUS.READY:
            return (
                <View style={styles.container}>
                    <Text style={styles.title}>Welcome Back</Text>
                    <Text>Name:</Text>
                    <TextInput
                        textContentType='username'
                        style={styles.textInput}
                        value={name}
                        onChangeText={text => setName(text)}
                    />
                    <Text>Password:</Text>
                    <TextInput
                        textContentType='password'
                        style={styles.textInput}
                        value={password}
                        onChangeText={text => setPassword(text)}
                    />
                    <TouchableOpacity onPress={() => navigation.replace('Forgot')} style={styles.link}>
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
        case LOGIN_STATUS.FAILNAME:
            return (
                <View style={styles.container}>
                    <Text style={styles.title}>Welcome Back</Text>
                    <Text>Email/Phone:</Text>
                    <TextInput
                        textContentType='username'
                        style={styles.textInput}
                        value={name}
                        onChangeText={text => setName(text)}
                    />
                    <Text style={styles.warn}>Name Wrong!</Text>
                    <Text>Password:</Text>
                    <TextInput
                        textContentType='password'
                        style={styles.textInput}
                        value={password}
                        onChangeText={text => setPassword(text)}
                    />
                    <TouchableOpacity onPress={() => navigation.replace('Forgot')} style={styles.link}>
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
        case LOGIN_STATUS.FAILPASS:
            return (
                <View style={styles.container}>
                    <Text style={styles.title}>Welcome Back</Text>
                    <Text>Email/Phone:</Text>
                    <TextInput
                        textContentType='username'
                        style={styles.textInput}
                        value={name}
                        onChangeText={text => setName(text)}
                    />
                    <Text>Password:</Text>
                    <TextInput
                        textContentType='password'
                        style={styles.textInput}
                        value={password}
                        onChangeText={text => setPassword(text)}
                    />
                    <Text style={styles.warn}>Password Wrong!</Text>
                    <TouchableOpacity onPress={() => navigation.replace('Forgot')} style={styles.link}>
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
        default: return (<Text>Login Success!</Text>)
    }
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
    },
    warn: {
        color: 'red'
    }
});
