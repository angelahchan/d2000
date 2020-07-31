import * as React from 'react';
import { StyleSheet, Image, } from 'react-native';

import * as COL from '../constants/MainColors';


export default function PaymentCard(props:any){
    if (props.cardType == 'opal'){
        return (<Image source = {require('../assets/images/opal-card.png')}
        style={props.isSelected ? styles.selected : styles.deselected }/>)
    }
    else {
        return (
            <Image source = {require('../assets/images/credit-card.jpg')}
    style={props.isSelected ? styles.selected : styles.deselected }/>
        )
    }
}

const styles = StyleSheet.create({


      selected:{
        flex:1,
        width:190,
        height: 120,
        margin: 15,
        resizeMode:"contain",
        borderWidth:5,
        borderColor: COL.COLS.ORANGE,
        overflow:'hidden'

      },
      deselected:{
        flex:1,
        width:210,
        height: 120,
        margin: 15,
        resizeMode:"contain",
        borderRadius:10,
        borderColor: COL.COLS.MAIN_COL,

      }
  });