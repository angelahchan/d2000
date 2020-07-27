import * as React from 'react';
import { StyleSheet, Image,  TouchableOpacity} from 'react-native';
import * as PSTATE from '../constants/PaymentState';
import * as COL from '../constants/MainColors';
import { Ionicons } from '@expo/vector-icons';
let main_col = COL.COLS.MAIN_COL;
let backgroundCol = COL.COLS.BACKGROUND_COL;
import { Text, View,} from '../components/Themed';
export default function PaymentTop(props:any){
    let  paymentStat = props.paymentStat;
    let setCanPay = props.setCanPay;
    let paymentTitle;
    switch (paymentStat){
        case  PSTATE.PAYMENT_STATUS.NOT_READY:
            return(
                <TouchableOpacity style={styles.paymentTop} >
                        <Text style={styles.title}  textBreakStrategy={'simple'}>Not Ready To Pay</Text>
                        <Image
                            style={styles.iconContainer}
                            source={require('../assets/images/cross.png')} />
                        <Text style={styles.description}>Enable NFC and add a payment method.</Text>

                </TouchableOpacity>
            );
        case  PSTATE.PAYMENT_STATUS.READY:
            return(
                <TouchableOpacity style = {styles.paymentTop} onPress={() => setCanPay(PSTATE.PAYMENT_STATUS.IN_PROGRESS)}>
                    <Text style={styles.title}>NFC Ready</Text>
                    <Image
                        style={styles.iconContainer}
                        source={require('../assets/images/checkmark.png')} />
                    <Text style={styles.description}>Tap on here to start your trip.</Text>
                </TouchableOpacity>
            );
        /* on tap off return to payment complete  */
        case PSTATE.PAYMENT_STATUS.IN_PROGRESS:
            return (
                <TouchableOpacity style = {styles.paymentTop} onPress={() => {
                setCanPay(PSTATE.PAYMENT_STATUS.FINISHED)
                props.navigation.navigate('PaymentCompleteScreen')}}>
                <Text style={styles.title }>In Progress</Text>
                <Image
                        style={styles.iconContainer}
                        source={require('../assets/images/arrow.png')} />
                <Text style={styles.description}>Tap off here to finish your trip.</Text>
            </TouchableOpacity>
            )
        //hide component if payment complete
        default:
            return (<></>)
    }
}

const styles = StyleSheet.create({

    paymentTop: {
      flex:0.3,
      backgroundColor:backgroundCol,

      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
      borderBottomLeftRadius: 20,
      borderBottomRightRadius: 20,
      width:'90%',
      marginVertical: 15,
      borderColor:'gray',
      alignItems:'center',
      textAlignVertical:'bottom',

    },
    title:{
        fontWeight:'bold',
        textAlign:'center',
        textAlignVertical:'top',
        padding:2,
        fontSize:20,
        width:'90%'
 
    },
    description:{
        textAlignVertical:'bottom',
        padding:5,
        textAlign:'center',
        fontSize:12,
        width:'90%'


    },
    iconContainer:{
        height:50,
        width:50,
        padding:15,
        marginTop:10
    },
  
  });
  function StatusIcon(props: { name: string; color: string }) {
    return <Ionicons size={100} transform={'scale(.5, 1)'} {...props} />;
  }
  