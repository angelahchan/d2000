import * as React from 'react';
import { StyleSheet,  AsyncStorage, Button,TextInput, Picker, ToastAndroid, Platform } from 'react-native';
import CardContext from '../context/CardContext'
import { Text, View,  } from '../components/Themed';
import GlobalContext from '../context/GlobalContext';
import { Input } from 'react-native-elements';
import * as COL from '../constants/MainColors'
import { Formik } from 'formik';
import * as yup from 'yup';


export default function CreditCardForm(props:any){
/*
no idea but probably typescript issue
*/
const cardSchema = yup.object({
    cardNumber: yup.string()
      .required()
      .min(15)
      .max(16),
    cvv: yup.string()
      .required()
      .min(3)
      .max(4),
    expiry: yup.date()
      .required()
      
  });
const [global, setGlobal] = React.useContext(GlobalContext);
const [cardNumber, setCardNumber] = React.useState('');
const [cvv, setCVV] = React.useState('');
const [expiry, setExpiry] = React.useState('');
const cardInput = React.createRef<Input>()
const cvvInput = React.createRef<Input>()
   function submitCardDetails(values:any) {
    setGlobal({
        ...global,
        cards: [
            ...global.cards,
            {
            type: 'credit',
            cardNumber: values.cardNumber,
            expiry: values.expiry,
            cvv:values.cvv,
            balance:1000,
            selected:false
            },
        ]
    });
    setCardNumber('')
    setCVV('')

    if (Platform.OS == 'android')
        ToastAndroid.show("Added Credit Card", ToastAndroid.SHORT);
        props.navigation.navigate('PaymentScreen')
   }
    return (
    <View style={styles.input}><Text style={styles.title}>Add a credit/debit card</Text>
    <Formik
        initialValues={{ cardNumber: '', cvv: '', expiry: '' }}
        validationSchema={cardSchema}
        onSubmit={(values, actions) => {
          actions.resetForm(); 
          submitCardDetails(values);
        }}
      >
           {({ handleChange, handleBlur, handleSubmit, values,touched,errors }) => (
              <View  >
                            <Input 
                label='Credit/debit card number'
                placeholder='Credit/debit card number'
                leftIcon={{ type: 'font-awesome', name: 'credit-card' }}
                autoCompleteType='cc-number'
                keyboardType = 'numeric'
                errorStyle={{ color: 'red' }}
                onChangeText={handleChange('cardNumber')}
                ref={cardInput}
                errorMessage={touched.cardNumber && errors.cardNumber}
                onBlur={handleBlur('cardNumber')} 
                    value={values.cardNumber}
                />
                <Input
                label='CVV/CSC'
                placeholder='CVV/CSC'
                leftIcon={{ type: 'font-awesome', name: 'credit-card' }}
                autoCompleteType='cc-csc'
                keyboardType = 'numeric'
                errorStyle={{ color: 'red' }}
                onChangeText={handleChange('cvv')}
                errorMessage={touched.cvv && errors.cvv}
                onBlur={handleBlur('cvv')} 
                    value={values.cvv}
                />
                <Input 
                label='Expiry'
                placeholder='13-08'
                leftIcon={{ type: 'font-awesome', name: 'credit-card' }}
                keyboardType = 'numeric'
                errorStyle={{ color: 'red' }}
                onChangeText={handleChange('expiry')}
                onBlur={handleBlur('expiry')} 
                errorMessage={touched.expiry && errors.expiry}
                value={values.expiry}
                />
                {touched.expiry &&
                <Text style={styles.errorText}>{touched.expiry && errors.expiry}</Text>
}
                <View style={styles.button}>
                <Button  title="Add Card" onPress={handleSubmit}/>
                </View>
            </View>
          
        )}
      </Formik>
      </View>
  
    
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
    errorText: {
        color: 'crimson',
        fontWeight: 'bold',
        marginBottom:'3%',
        textAlign: 'center',
      },
    item: {
        width: '50%'
     } // is 50% of container width
    })
      
  
