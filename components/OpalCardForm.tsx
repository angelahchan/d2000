import * as React from 'react';
import { StyleSheet,  AsyncStorage, Button,TextInput, Picker } from 'react-native';
import CardContext from '../context/CardContext'
import { Text, View,  } from '../components/Themed';
import GlobalContext from '../context/GlobalContext';
import { Input } from 'react-native-elements';
import * as COL from '../constants/MainColors';


export default function OpalCardForm(props:any){
 const [global, setGlobal] = React.useContext(GlobalContext);
const [cardNumber, setCardNumber] = React.useState('');
const [securityNumber, setSecurityNumber] = React.useState('');


function submitCardDetails() {
        setGlobal({
        ...global,
        cards: [
            ...global.cards,
            {
            type: 'opal',
            cardNumber: cardNumber,
            security:securityNumber,
            balance:1000,
            selected:false
            },
        ]
    });
    props.navigation.navigate('PaymentScreen')
}
    return (
        <><Text style={styles.title}>Add a opal card</Text>
  <View  style={styles.input}>
  <Input
    label='Opal card number'
    placeholder='Opal card number'
    leftIcon={{ type: 'font-awesome', name: 'credit-card' }}
    keyboardType = 'numeric'
    errorStyle={{ color: 'red' }}
    onChangeText={text => setCardNumber(text)}
  />
    <Input
      label='Security Code'
      placeholder='4 digit security code'
      leftIcon={{ type: 'font-awesome', name: 'credit-card' }}
      keyboardType = 'numeric'
      errorStyle={{ color: 'red' }}
      onChangeText={text => setSecurityNumber(text)}
    />
    <View style={styles.button}>
  <Button  title="Add Card" 
  onPress={submitCardDetails} />
  </View>
  </View></>
    )
}

const styles = StyleSheet.create({

    title: {
        fontSize: 20,
        fontWeight: 'bold',
        width:'80%',
        textAlign:'center',
        margin:30
        
    },
    separator: {
        marginVertical: 30,
        height: 1,
        width: '80%',
    },
    textInput: {
        borderColor: 'gray',
        borderWidth: 1,
        width:'50%',
        marginTop:5,
        marginBottom:25
    },
    input:{
        width:'80%',
        justifyContent:'flex-start'
    },
    button:{
        marginVertical:30,
        color:COL.COLS.MAIN_COL
    },
    picker:{
        width:'50%',
    },
    formname: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'flex-start'// if you want to fill rows left to right
    },
    item: {
        width: '50%'
     } // is 50% of container width
    })
      
  
