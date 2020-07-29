import * as React from 'react';
import { StyleSheet,  AsyncStorage, Button,TextInput, Picker } from 'react-native';
import CardContext from '../context/CardContext'
import { Text, View,  } from '../components/Themed';
import GlobalContext from '../context/GlobalContext';
import { Input } from 'react-native-elements';
import * as COL from '../constants/MainColors'


export default function OpalCardForm(props:any){
/*
no idea but probably typescript issue
*/
const [global, setGlobal] = React.useContext(GlobalContext);
const [cardNumber, setCardNumber] = React.useState('');
const [cvv, setCVV] = React.useState('');
const [expiry, setExpiry] = React.useState('');
const cardInput = React.createRef<Input>()
const cvvInput = React.createRef<Input>()
   function submitCardDetails() {
    setGlobal({
        ...global,
        cards: [
            ...global.cards,
            {
            type: 'credit',
            cardNumber: cardNumber,
            expiry: expiry,
            cvv:cvv,
            balance:1000,
            selected:false
            },
        ]
    });
    setCardNumber('')
    setCVV('')
    /*
    typescript issue - I know this can't be null but beyond suppressing strict null checks idk what to do
    */
    cardInput.current.clear()
    cvvInput.current.clear()
    props.navigation.navigate('PaymentScreen')
   }
    return (
    <><Text style={styles.title}>Add a credit/debit card</Text>
    <View  style={styles.input}>
    <Input 
      label='Credit/debit card number'
      placeholder='Credit/debit card number'
      leftIcon={{ type: 'font-awesome', name: 'credit-card' }}
      autoCompleteType='cc-number'
      errorStyle={{ color: 'red' }}
      onChangeText={text => setCardNumber(text)}
      ref={cardInput}
    />
    <Input
      label='CVV/CSC'
      placeholder='CVV/CSC'
      leftIcon={{ type: 'font-awesome', name: 'credit-card' }}
      autoCompleteType='cc-csc'
      keyboardType = 'numeric'
      errorStyle={{ color: 'red' }}
      value={cvv}
      onChangeText={text => setCVV(text)}
      ref={cvvInput}
    />
    <View style={styles.button}>
    <Button  title="Add Card" onPress= {submitCardDetails}
         />
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
      
  
