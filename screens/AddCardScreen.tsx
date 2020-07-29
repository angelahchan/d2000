import * as React from 'react';
import { StyleSheet,  AsyncStorage, Button,TextInput, Picker } from 'react-native';
import CardContext from '../context/CardContext'
import { Text, View,  } from '../components/Themed';
import GlobalContext from '../context/GlobalContext';
import { Input } from 'react-native-elements';
import CreditCardForm from '../components/CreditCardForm'
import OpalCardForm from '../components/OpalCardForm'


export default function AddCardScreen(props:any) {
  //const [global, setGlobal] = React.useContext(GlobalContext);
  const [type, setType] = React.useState('');
  const [cardNumber, setCardNumber] = React.useState('');
  const [selectedValue, setSelectedValue] = React.useState("none");
  let displayForm = selectedValue == "none"
  let form;

  if (selectedValue == "credit-card"){
    form = <CreditCardForm navigation={props.navigation}></CreditCardForm>
  }
  else if (selectedValue == "opal"){
    form = <OpalCardForm navigation={props.navigation}/>
  }
  return (
    <View style={styles.container}>
      {displayForm &&
      <Picker
        selectedValue={selectedValue}
        style={styles.picker}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
      > 
        <Picker.Item label="Select a card type" value="none" />
        <Picker.Item label="Credit/Debit Card" value="credit-card" />
        <Picker.Item label="Opal Card" value="opal" />
      </Picker>
      }
      {form}
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
  input:{
    width:'80%',
    justifyContent:'flex-start'
  },
  button:{
    marginVertical:10,
    width:'80%'
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
    width: '50%' // is 50% of container width
  }

});
