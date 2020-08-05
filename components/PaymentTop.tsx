import * as React from 'react';
import { StyleSheet, Image,  TouchableOpacity} from 'react-native';
import * as PSTATE from '../constants/PaymentState';
import * as COL from '../constants/MainColors';
import { Ionicons } from '@expo/vector-icons';
let main_col = COL.COLS.MAIN_COL;
let backgroundCol = COL.COLS.BACKGROUND_COL;
import GlobalContext from '../context/GlobalContext';
import { Text, View,} from '../components/Themed';
import moment from 'moment';
export default function PaymentTop(props:any){
    const [global, setGlobal] = React.useContext(GlobalContext);
    let  paymentStat = global.tripState
    let setCanPay = props.setCanPay;
    let paymentTitle;
    let discount  = 0;
    
    if (Object.keys(global.currentDiscount).length != 0){
        discount = global.currentDiscount.amount
    }
    function chargeCard(id:any) {
        let selectedItem;
        let discount = 1;
        let concession = 1;
        if (global.hasConcession)
            concession = 0.8
        if (Object.keys(global.currentDiscount).length != 0)
            discount = global.currentDiscount.amount/100;
        const amountCharged = 6.1*discount*concession;
        const newList = global.cards.map((item:any) => {
            if (item.cardNumber === id) {
              const updatedItem = {
                ...item,
                balance: item.balance - amountCharged,
              };
              selectedItem = updatedItem;
              return updatedItem;
            }
            else {
                const updatedItem = {
                    ...item,
                    selected: false,
                  };
                return updatedItem;
            }
          });
         const newHistory = [...global.tripHistory, {
            cost:6.1,
            startTime: global.startTime,
            endTime: global.endTime,
            selectedCard: global.selectedCard
         }]
          setGlobal({
            ...global,
            cards: newList,
            selectedCard: selectedItem,
            tripState:PSTATE.PAYMENT_STATUS.READY,
            endTime: moment()
            .utcOffset('+10')
            .format('YYYY/MM/DD hh:mm:ss'),
            tripHistory:newHistory,
            currentDiscount:{}

          });
          return (amountCharged)
    }

    switch (paymentStat){
        case  PSTATE.PAYMENT_STATUS.NOT_READY:
            return(
                <TouchableOpacity style={styles.paymentTop} >
                        <Text style={styles.title}  textBreakStrategy={'simple'}>Not Ready To Pay</Text>
                        <Image
                            style={styles.iconContainer}
                            source={require('../assets/images/cross.png')} />
                        <Text style={styles.description}>Enable NFC and add/select a payment method.</Text>

                </TouchableOpacity>
            );
        case  PSTATE.PAYMENT_STATUS.READY:
            return(
                <TouchableOpacity style = {styles.paymentTop} onPress={() =>
                    setGlobal({
                      ...global,
                      tripState:PSTATE.PAYMENT_STATUS.IN_PROGRESS,
                      startTime: moment()
                      .utcOffset('+10')
                      .format('YYYY/MM/DD hh:mm:ss')
                      
                    })}>
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
                     const cost = chargeCard(global.selectedCard.cardNumber)
                        props.navigation.navigate('PaymentCompleteScreen',{
                            discount:discount,
                            cost:cost
                        })
                }}>
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

    },
    title:{
        fontWeight:'bold',
        textAlign:'center',
        padding:2,
        fontSize:20,
        width:'90%'
 
    },
    description:{
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
  