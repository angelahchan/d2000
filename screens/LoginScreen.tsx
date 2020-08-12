import * as React from 'react';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { LOGIN_STATUS } from '../constants/LoginState';

import { StackScreenProps } from '@react-navigation/stack';

import { StyleSheet, AsyncStorage, Button, TextInput, ScrollView, TouchableOpacity, Image } from 'react-native';

import { Input } from 'react-native-elements';

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
                    navigation.replace('Root');
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

        navigation.replace('Login');
        
    }

    switch (loginState) {
        case LOGIN_STATUS.READY:
            return (
                <ScrollView endFillColor='white'>
                <View style={styles.container}>
                    <View style={styles.topImg}>
                        <View  >
                            <Image source={require('../assets/images/train.png')} />
                        </View>
                        <View style={styles.image} >
                            <Image source={require('../assets/images/welcome.png')} />
                        </View>
                    </View>
                    <View style={styles.space}></View>
                    <View style={styles.body}>
                        <Input
                            label='Email'
                            placeholder='  Enter Email'
                            leftIcon={{ type: 'font-awesome', name: 'user' }}
                            errorStyle={{ color: 'red' }}
                            onChangeText={text => setName(text)}
                            keyboardType="email-address"
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

                    <TouchableOpacity onPress={() => navigation.replace('Forgot')} style={styles.link1}>
                        <Text style={styles.right}>Forgot?</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button}>
                        <Button background-color="#006666" title="Login" onPress={submitUser} />
                    </TouchableOpacity>

                    <Text style={styles.account}>Don't have a account?</Text>
                    <TouchableOpacity onPress={() => navigation.replace('Sign')} style={styles.link}>
                        <Text style={styles.linkText}>Sign up</Text>
                    </TouchableOpacity>
                </View>
                </ScrollView>
            );
        case LOGIN_STATUS.FAILNAME:
            return (
                <ScrollView endFillColor='white'>
                <View style={styles.container}>
                    <View style={styles.topImg}>
                    <View  >
                        <Image source={require('../assets/images/train.png')} />
                    </View>
                    <View >
                        <Image source={require('../assets/images/welcome.png')} />
                    </View>
                    </View>
                    <View style={styles.body}>
                        <Input
                            label='Email'
                            placeholder='  Enter Email'
                            leftIcon={{ type: 'font-awesome', name: 'user' }}
                            errorStyle={{ color: 'red' }}
                            onChangeText={text => setName(text)}
                            keyboardType="email-address"
                        />
                        <Text style={styles.warn}>Name Wrong!</Text>
                    </View>

                    <View style={styles.body}>
                        <Input

                            label='Password'
                            placeholder='   Enter password'
                            leftIcon={{ type: 'font-awesome', name: 'check' }}
                            errorStyle={{ color: 'red' }}
                            onChangeText={text => setPassword(text)}
                            secureTextEntry = {true}
                        />
                    </View>

                    <TouchableOpacity onPress={() => navigation.replace('Forgot')} style={styles.link1}>
                        <Text style={styles.right}>Forgot?</Text>
                    </TouchableOpacity>
                    <View style={styles.button}>
                        <Button background-color="#006666" title="Login" onPress={submitUser} />
                    </View>

                    <Text  style={styles.account} >Don't have a account?</Text>
                    <TouchableOpacity onPress={() => navigation.replace('Sign')} style={styles.link}>
                        <Text style={styles.linkText}>Sign up</Text>
                    </TouchableOpacity>
                </View>
                </ScrollView>
            );
        case LOGIN_STATUS.FAILPASS:
            return (
                <ScrollView endFillColor='white'>
                <View style={styles.container}>
                    <View style={styles.topImg}>
                    <View  >
                        <Image source={require('../assets/images/train.png')} />
                    </View>
                    <View >
                        <Image source={require('../assets/images/welcome.png')} />
                    </View>
                    </View>

                    <View style={styles.body}>
                        <Input
                            label='Email'
                            placeholder='  Enter Email'
                            leftIcon={{ type: 'font-awesome', name: 'user' }}
                            errorStyle={{ color: 'red' }}
                            onChangeText={text => setName(text)}
                            keyboardType="email-address"
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
                        <Text style={styles.warn}>Password Wrong!</Text>
                    </View>

                    
                    <TouchableOpacity onPress={() => navigation.replace('Forgot')} style={styles.link1}>
                        <Text style={styles.right}>Forgot?</Text>
                    </TouchableOpacity>
                    <View style={styles.button}>
                        <Button background-color="#006666" title="Login" onPress={submitUser} />
                    </View>

                    <Text  style={styles.account} >Don't have a account?</Text>
                    <TouchableOpacity onPress={() => navigation.replace('Sign')} style={styles.link}>
                        <Text style={styles.linkText}>Sign up</Text>
                    </TouchableOpacity>
                </View>
                </ScrollView>
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
        marginVertical: 10,
        backgroundColor: '#006666',
        width:'80%'
    },
    linkText: {
        fontSize: 16,
        color: '#006666',
        marginBottom:'5%',
        textDecorationLine:'underline'
    },
    link: {
        marginTop: 15,
        paddingVertical: 3,
    },
    warn: {
        color: 'red',
        textAlign: 'center'
    },
    body: {
        width: '80%',
        
    },
    right: {
        textAlign: 'right',
        fontSize: 14,
        color: '#006666',
        textDecorationLine:'underline'
    },
    space:{
        paddingVertical:20,
    },
    image:{
        paddingBottom:20,
    },
    account:{
        marginTop:'5%'
    },
    img:{
        marginTop:10
    },
    topImg:{
        height:'20%',
        alignSelf:'center',
        alignItems:'center',
        marginVertical:'5%'
    },
    link1:{
        alignSelf:'flex-end',
        marginBottom:'5%',
        marginRight:'10%'
    }
    
});
