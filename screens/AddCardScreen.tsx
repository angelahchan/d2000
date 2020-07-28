import * as React from 'react';
import { StyleSheet,  AsyncStorage, Button,TextInput } from 'react-native';
import CardContext from '../context/CardContext'
import { Text, View } from '../components/Themed';
import GlobalContext from '../context/GlobalContext';

export default function AddCardScreen(props:any) {
  const [global, setGlobal] = React.useContext(GlobalContext);
  const [type, setType] = React.useState('');
  const [cardNumber, setCardNumber] = React.useState('');

  
  function submitCardDetails() {
    setGlobal({
      ...global,
      cards: [
        ...global.cards,
        {
          type: type,
          cardNumber: cardNumber,
          selected:false
        },
      ]
    });
    props.navigation.push('PaymentScreen');
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create New Card</Text>
      <Text>Card Type:</Text>
      <TextInput
        style={styles.textInput}
        value={type}
        onChangeText={text => setType(text)}
      /> 
      <Text>Card Number:</Text>
      <TextInput
        style={styles.textInput}
        value={cardNumber}
        onChangeText={text => setCardNumber(text)}
      /> 
      <View style={styles.button}>
      <Button  title="Add Card" onPress={submitCardDetails} />
      </View>
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
  button:{
    marginVertical:10
  }

});
