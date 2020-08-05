import * as React from 'react';
import { StyleSheet, ImageBackground, Button, TouchableOpacity, Image} from 'react-native';
//import { Button } from 'react-native-elements';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View, } from '../components/Themed';
import  { COLS } from '../constants/MainColors';



export default function Reward(props:any) {
  return (
    <View style={styles.container}>
      <ImageBackground source = {require('../assets/images/angryimg.png')}
        style={styles.card}>
        <Text style={styles.title}>{props.amount}%</Text>
        <Text style={styles.title}>OFF</Text>
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.redeem}>REDEEM</Text>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 0.6,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 32,
    color:'white',
    textAlign:'center'
  },   
  redeem:{
    width:'90%',
    fontSize:14,
    color:'white',
    textAlign:'center'
  },
  card:{
    flex:1,
    width:150,
    height: 150,
    margin: 15,
    resizeMode:"contain",
    position:'relative',
    borderRadius: 20,
    borderWidth:0,
    overflow:'hidden',
    justifyContent: "center",
    alignItems: "center"
  },
  btn:{
    width:'50%',
    alignItems:'center',
    backgroundColor:'#020024',
    marginVertical:10,
    height:'20%',
    justifyContent:'center',
    borderRadius:10,
    borderWidth:1,
    borderColor:'white'
    
  }


});
