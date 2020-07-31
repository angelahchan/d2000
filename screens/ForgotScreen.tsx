import * as React from 'react';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { FORGOT_STATUS } from '../constants/ForgotState';


import { StackScreenProps } from '@react-navigation/stack';

import { StyleSheet, AsyncStorage, Button, TextInput, TouchableOpacity } from 'react-native';

import GlobalContext from '../context/GlobalContext';
import { RootStackParamList } from '../types';

export default function SignUpScreen({
    navigation,
}: StackScreenProps<RootStackParamList, 'Forgot'>) {
    const [global, setGlobal] = React.useContext(GlobalContext);
    const [name, setName] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [mobile, setmobile] = React.useState('');
    const [confimPass, setconfimPass] = React.useState('');
    const [forgotstate, setforgotState] = React.useState(FORGOT_STATUS.READY);

    function submitUser() {


        const newList = global.users.map((item) => {
            if (item.mail == name) {
                if (item.mail == mobile) {
                    if (password != confimPass) {
                        item.password = password;
                        setforgotState(FORGOT_STATUS.SUCCESS);
                    } else {
                        setforgotState(FORGOT_STATUS.FAILPASS);
                    }

                } else {
                    setforgotState(FORGOT_STATUS.FAILMOBILE);
                }

            }
            else {

                setforgotState(FORGOT_STATUS.FAILMAIL);
            }
        });


        if (forgotstate == FORGOT_STATUS.SUCCESS) {
            navigation.navigate('Login');
        } else {
            navigation.navigate('Forgot');
        }
    }
    switch (forgotstate) {
        case FORGOT_STATUS.READY:
            return (
                <View style={styles.container}>
                    <Text style={styles.title}>Forgot</Text>
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
                    <Text>ConfimPassword:</Text>
                    <TextInput
                        style={styles.textInput}
                        value={confimPass}
                        onChangeText={text => setconfimPass(text)}
                    />
                    <Text>Mobile:</Text>
                    <TextInput
                        style={styles.textInput}
                        value={mobile}
                        onChangeText={text => setmobile(text)}
                    />
                    <View style={styles.button}>
                        <Button title="Submit" onPress={submitUser} />
                    </View>
                    <Text>Already have an account?</Text>
                    <TouchableOpacity onPress={() => navigation.replace('Login')} style={styles.link}>
                        <Text style={styles.linkText}>Log in</Text>
                    </TouchableOpacity>
                </View>
            );
        case FORGOT_STATUS.FAILMAIL:
            return (
                <View style={styles.container}>
                    <Text style={styles.title}>Forgot</Text>
                    <Text>Email:</Text>
                    <TextInput
                        style={styles.textInput}
                        value={name}
                        onChangeText={text => setName(text)}
                    />
                    <Text style={styles.warn}>Email Wrong!</Text>
                    <Text>Password:</Text>
                    <TextInput
                        style={styles.textInput}
                        value={password}
                        onChangeText={text => setPassword(text)}
                    />
                    <Text>ConfimPassword:</Text>
                    <TextInput
                        style={styles.textInput}
                        value={confimPass}
                        onChangeText={text => setconfimPass(text)}
                    />
                    <Text>Mobile:</Text>
                    <TextInput
                        style={styles.textInput}
                        value={mobile}
                        onChangeText={text => setmobile(text)}
                    />
                    <View style={styles.button}>
                        <Button title="Submit" onPress={submitUser} />
                    </View>
                    <Text>Already have an account?</Text>
                    <TouchableOpacity onPress={() => navigation.replace('Login')} style={styles.link}>
                        <Text style={styles.linkText}>Log in</Text>
                    </TouchableOpacity>
                </View>
            );
        case FORGOT_STATUS.FAILMOBILE:
            return (
                <View style={styles.container}>
                    <Text style={styles.title}>Forgot</Text>
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
                    <Text>ConfimPassword:</Text>
                    <TextInput
                        style={styles.textInput}
                        value={confimPass}
                        onChangeText={text => setconfimPass(text)}
                    />
                    <Text>Mobile:</Text>
                    <TextInput
                        style={styles.textInput}
                        value={mobile}
                        onChangeText={text => setmobile(text)}
                    />
                    <Text style={styles.warn}>Phone Wrong!</Text>
                    <View style={styles.button}>
                        <Button title="Submit" onPress={submitUser} />
                    </View>
                    <Text>Already have an account?</Text>
                    <TouchableOpacity onPress={() => navigation.replace('Login')} style={styles.link}>
                        <Text style={styles.linkText}>Log in</Text>
                    </TouchableOpacity>
                </View>
            );
        case FORGOT_STATUS.FAILPASS:
            return (
                <View style={styles.container}>
                    <Text style={styles.title}>Forgot</Text>
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
                    <Text>ConfimPassword:</Text>
                    <TextInput
                        style={styles.textInput}
                        value={confimPass}
                        onChangeText={text => setconfimPass(text)}
                    />
                    <Text style={styles.warn}>ComfimPassword should be same as Password!</Text>
                    <Text>Mobile:</Text>
                    <TextInput
                        style={styles.textInput}
                        value={mobile}
                        onChangeText={text => setmobile(text)}
                    />
                    <View style={styles.button}>
                        <Button title="Submit" onPress={submitUser} />
                    </View>
                    <Text>Already have an account?</Text>
                    <TouchableOpacity onPress={() => navigation.replace('Login')} style={styles.link}>
                        <Text style={styles.linkText}>Log in</Text>
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
