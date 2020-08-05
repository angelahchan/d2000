import * as React from 'react';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { FORGOT_STATUS } from '../constants/ForgotState';


import { StackScreenProps } from '@react-navigation/stack';

import { StyleSheet, AsyncStorage, Button, TextInput, TouchableOpacity } from 'react-native';
import { Input } from 'react-native-elements';
import GlobalContext from '../context/GlobalContext';
import { RootStackParamList } from '../types';

export default function SignUpScreen(props: any) {
    const [global, setGlobal] = React.useContext(GlobalContext);
    const [name, setName] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [mobile, setmobile] = React.useState('');
    const [confimPass, setconfimPass] = React.useState('');
    const [forgotstate, setforgotState] = React.useState(FORGOT_STATUS.READY);

    function submitUser() {

        let canfinduser = false;
        let correctpass = false;
        let correctmobile = false;
        let newusers = global.users;
        for (var i = 0; i < newusers.length; i++) {
            if (newusers[i].name == name ) {
                canfinduser = true;
                if (newusers[i].mobile == mobile) {
                    correctmobile = true;
                    if (password == confimPass) {
                        correctpass = true;
                        newusers[i].password = password;
                        setGlobal({
                            ...global,
                            users: newusers,
                        });
                        setforgotState(FORGOT_STATUS.SUCCESS);
                        props.navigation.navigate('AccountScreen');
                        return 0;
                    }
                }

            }
        }
        //     const newList = global.users.map((item) => {

        //     });



        if (canfinduser == true && correctmobile == true &&correctpass == false) {
            setforgotState(FORGOT_STATUS.FAILPASS);
        }

        if (canfinduser == true && correctmobile == false) {
            setforgotState(FORGOT_STATUS.FAILMOBILE);
        }

        if (canfinduser == false) {
            setforgotState(FORGOT_STATUS.FAILMAIL);
        }

        props.navigation.navigate('PassScreen');
    }
    switch (forgotstate) {
        case FORGOT_STATUS.READY:
            return (
                <View style={styles.container}>

                    <div className="about-backgroundImage" >
                        <img src={require('../assets/images/train.png')} />
                    </div>
                    <div className="about-backgroundImage" >
                        <img src={require('../assets/images/reset.png')} />
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
                            label='ConfimPassword'
                            placeholder='   Enter ConfimPassword'
                            leftIcon={{ type: 'font-awesome', name: 'check' }}
                            errorStyle={{ color: 'red' }}
                            onChangeText={text => setconfimPass(text)}
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
                        <Button title="Submit" onPress={submitUser} />
                    </View>
                    <Text>Don't want to change the password?</Text>
                    <TouchableOpacity onPress={() => props.navigation.replace('AccountScreen')} style={styles.link}>
                        <Text style={styles.linkText}>Log in</Text>
                    </TouchableOpacity>
                </View>
            );
        case FORGOT_STATUS.FAILMAIL:
            return (
                <View style={styles.container}>

                    <div className="about-backgroundImage" >
                        <img src={require('../assets/images/train.png')} />
                    </div>
                    <div className="about-backgroundImage" >
                        <img src={require('../assets/images/reset.png')} />
                    </div>

                    <View style={styles.body}>
                        <Input
                            label='Username'
                            placeholder='  Enter Username'
                            leftIcon={{ type: 'font-awesome', name: 'user' }}
                            errorStyle={{ color: 'red' }}
                            onChangeText={text => setName(text)}

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
                            secureTextEntry={true}
                        />
                    </View>

                    <View style={styles.body}>
                        <Input
                            label='ConfimPassword'
                            placeholder='   Enter ConfimPassword'
                            leftIcon={{ type: 'font-awesome', name: 'check' }}
                            errorStyle={{ color: 'red' }}
                            onChangeText={text => setconfimPass(text)}
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
                        <Button title="Submit" onPress={submitUser} />
                    </View>
                    <Text>Don't want to change the password?</Text>
                    <TouchableOpacity onPress={() => props.navigation.replace('AccountScreen')} style={styles.link}>
                        <Text style={styles.linkText}>Log in</Text>
                    </TouchableOpacity>
                </View>
            );
        case FORGOT_STATUS.FAILMOBILE:
            return (
                <View style={styles.container}>

                    <div className="about-backgroundImage" >
                        <img src={require('../assets/images/train.png')} />
                    </div>
                    <div className="about-backgroundImage" >
                        <img src={require('../assets/images/reset.png')} />
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
                            label='ConfimPassword'
                            placeholder='   Enter ConfimPassword'
                            leftIcon={{ type: 'font-awesome', name: 'check' }}
                            errorStyle={{ color: 'red' }}
                            onChangeText={text => setconfimPass(text)}
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
                        <Text style={styles.warn}>Phone Wrong!</Text>
                    </View>

                    <View style={styles.button}>
                        <Button title="Submit" onPress={submitUser} />
                    </View>
                    <Text>Don't want to change the password?</Text>
                    <TouchableOpacity onPress={() => props.navigation.replace('AccountScreen')} style={styles.link}>
                        <Text style={styles.linkText}>Log in</Text>
                    </TouchableOpacity>
                </View>
            );
        case FORGOT_STATUS.FAILPASS:
            return (
                <View style={styles.container}>

                    <div className="about-backgroundImage" >
                        <img src={require('../assets/images/train.png')} />
                    </div>
                    <div className="about-backgroundImage" >
                        <img src={require('../assets/images/reset.png')} />
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
                            label='ConfimPassword'
                            placeholder='   Enter ConfimPassword'
                            leftIcon={{ type: 'font-awesome', name: 'check' }}
                            errorStyle={{ color: 'red' }}
                            onChangeText={text => setconfimPass(text)}
                            secureTextEntry={true}
                        />
                        <Text style={styles.warn}>ComfimPassword should be same as Password!</Text>
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
                        <Button title="Submit" onPress={submitUser} />
                    </View>
                    <Text>Don't want to change the password?</Text>
                    <TouchableOpacity onPress={() => props.navigation.replace('AccountScreen')} style={styles.link}>
                        <Text style={styles.linkText}>Account</Text>
                    </TouchableOpacity>
                </View>
            );
        default: return (<Text>Password Change Success!</Text>)
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
    warn: {
        color: 'red',
        textAlign: 'center'
    },
    body: {
        width: '40%'
    },

});
