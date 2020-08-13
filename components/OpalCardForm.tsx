import * as React from 'react';
import { StyleSheet,  Platform, Button,TextInput, Picker, ToastAndroid } from 'react-native';
import CardContext from '../context/CardContext'
import { Text, View,  } from '../components/Themed';
import GlobalContext from '../context/GlobalContext';
import { Input } from 'react-native-elements';
import * as COL from '../constants/MainColors';
import { Formik } from 'formik';
import * as yup from 'yup';
import { DrawerActionType } from '@react-navigation/native';


export default function OpalCardForm(props:any){
 const [global, setGlobal] = React.useContext(GlobalContext);
const [cardNumber, setCardNumber] = React.useState('');
const [securityNumber, setSecurityNumber] = React.useState('');

const cardSchema = yup.object({
    cardNumber: yup.string()
      .required()
      .min(16)
      .max(16),
    security: yup.string()
      .required()
      .min(4)
      .max(4),
  });


function submitCardDetails(values:any) {
        setGlobal({
        ...global,
        cards: [
            ...global.cards,
            {
            type: 'opal',
            cardNumber: values.cardNumber,
            security:values.security,
            balance:1000,
            selected:false
            },
        ]
    });
    if (Platform.OS == 'android')
        ToastAndroid.show("Added Opal Card", ToastAndroid.SHORT);
    props.navigation.navigate('PaymentScreen')
}
    return (
         <View style={styles.input}><Text style={styles.title}>Add an Opal card</Text>
    <Formik
        initialValues={{ cardNumber: '', security: ''}}
        validationSchema={cardSchema}
        onSubmit={(values, actions) => {
          actions.resetForm(); 
          submitCardDetails(values);
        }}
      >
           {({ handleChange, handleBlur, handleSubmit, values,touched,errors }) => (
              <View  >
                            <Input 
                label='Opal card number'
                placeholder='16 digit Opal card number'
                leftIcon={{ type: 'font-awesome', name: 'credit-card' }}
                autoCompleteType='cc-number'
                keyboardType = 'numeric'
                errorStyle={{ color: 'red' }}
                onChangeText={handleChange('cardNumber')}
                errorMessage={touched.cardNumber && errors.cardNumber}
                onBlur={handleBlur('cardNumber')} 
                    value={values.cardNumber}
                />
                <Input
                label='Security Number'
                placeholder='4 digit Security Number'
                leftIcon={{ type: 'font-awesome', name: 'credit-card' }}
                autoCompleteType='cc-csc'
                keyboardType = 'numeric'
                errorStyle={{ color: 'red' }}
                onChangeText={handleChange('security')}
                errorMessage={touched.security && errors.security}
                onBlur={handleBlur('security')} 
                    value={values.security}
                />
                <View style={styles.button}>
                <Button  title="Add Opal Card" onPress={handleSubmit}/>
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
      
  
