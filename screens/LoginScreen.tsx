import * as React from 'react';
import { StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';


import { StackScreenProps } from '@react-navigation/stack';

import { TouchableOpacity } from 'react-native';


import { RootStackParamList } from '../types';

export default function LoginScreen({
  navigation,
}: StackScreenProps<RootStackParamList, 'Login'>) {
  return (
    <View style={styles.container}>
          <Text style={styles.title}>Welcome Back</Text>
          <Text style={styles.container}>Email/Phone</Text>
          <input></input>
          <Text style={styles.container}>Password</Text>
          <input></input>
          <button> "Login "</button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
  linkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
});
