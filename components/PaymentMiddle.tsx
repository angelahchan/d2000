import * as React from 'react';
import { StyleSheet, Image, ScrollView,Dimensions, TouchableOpacity, TouchableWithoutFeedback, Modal, Button
} from 'react-native';
import * as PSTATE from '../constants/PaymentState';
import * as COL from '../constants/MainColors';
import { Ionicons } from '@expo/vector-icons';
import { Text, View} from '../components/Themed';
import { TouchableHighlight } from 'react-native-gesture-handler';
import GlobalContext from '../context/GlobalContext';
import CardDetail from '../components/CardDetail'
import PaymentCard from '../components/PaymentCard'
import PaymentBottom from '../components/PaymentBottom';



export default function PaymentMiddle(props:any){
    let setCanPay = props.setCanPay;
    const [global, setGlobal] = React.useContext(GlobalContext);
    let  paymentStat = global.tripState
    
    const opalImage = <Image
    style={styles.paymentImage}
    source={require('../assets/images/opal-card.png')}>
    </Image>
    const creditImage = <Image
    style={styles.paymentImage}
    source={require('../assets/images/credit-card.jpg')}>
    </Image>

    /*
    Change card to selected item
    and change state to ready
    */
    function handleToggleComplete(id:any) {
        let selectedItem;
        let index = 0;
        const newList = global.cards.map((item:any) => {
            
            if (index === id) {
              const updatedItem = {
                ...item,
                selected: true,
              };
              selectedItem = updatedItem;
              index = index + 1;
              return updatedItem;
            }
            else {
                const updatedItem = {
                    ...item,
                    selected: false,
                  };
                  index = index + 1;
                return updatedItem;
            }

          });
       
          setGlobal({
            ...global,
            cards: newList,
            selectedCard: selectedItem,
            tripState:PSTATE.PAYMENT_STATUS.READY 
          });
    }

    if (paymentStat == PSTATE.PAYMENT_STATUS.NOT_READY || paymentStat == PSTATE.PAYMENT_STATUS.READY){
        return (
        <>
        <View style={styles.scrollbox} > 
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} snapToAlignment="start"
            >
                <View style={styles.cardContainer}>
                {
                    global.cards.map((card:any, index:any) => {
                        // cards.map(card    for card in cards:
                        return (
                        <TouchableOpacity 
                        activeOpacity={1} key={index}
                        onPress = { () =>  {
                            handleToggleComplete(index)
                            console.log('selected card index is ' +  index)
                         } }>
                             <PaymentCard cardType={card.type} isSelected={card.selected}/>
                        </TouchableOpacity>
                        );
                    })
                }
                    <TouchableOpacity style={styles.paymentBox} onPress={() => props.navigation.push('AddCardScreen')}
                    >
                        <Text>Add a Payment Method</Text>
                        <AddIcon name="ios-add" color={COL.COLS.MAIN_COL} />
                    </TouchableOpacity>

                </View>
                
            </ScrollView>
        </View>
        <View style={styles.cardDetailsBox}>
        {Object.keys(global.selectedCard).length != 0 && <CardDetail  cardNumber={global.selectedCard.cardNumber} 
        balance={parseFloat(global.selectedCard.balance).toFixed(2)}/> }
        </View>
        </>
        )
    }

    else if (paymentStat == PSTATE.PAYMENT_STATUS.FINISHED){
        return (<></>)
    }
    else {
        return ( <>
        <View style={styles.cardDetailsBox}>
        {Object.keys(global.selectedCard).length != 0 && <CardDetail cardNumber={global.selectedCard.cardNumber} 
        balance={parseFloat(global.selectedCard.balance).toFixed(2)}/> }
        </View>
        <View style={styles.cardDetailsBox}>
            <Text style={styles.currentTrip}>Current Trip</Text>
            <PaymentBottom/>
        </View>
        </>)
    }
}

function AddIcon(props: { name: string; color: string }) {
    return <Ionicons size={50}  {...props} />;
  }


const styles = StyleSheet.create({
    
    scrollbox: {
        flex:0.3,
        alignItems:'center',
        overflow: 'hidden'

    },
        
    cardDetailsBox: {
        flex:0.3,
        alignItems:'center',
        overflow: 'hidden',
        width:'90%'

    },
    title:{
        fontWeight:'bold',
        textAlign:'center',
        padding:2,
        fontSize:20
 
    },
    description:{
        padding:5,
        textAlign:'center',
        fontSize:12,
        width:'90%'
    },
    paymentBox: {
        flex:1,
        alignItems:'center',
        borderWidth: 1,
        borderStyle:'dashed',
        borderRadius: 10,
        width:210,
        backgroundColor:'white',
        height: 120,
        margin: 15,
        borderColor: COL.COLS.MAIN_COL
    },
    cardContainer:{
        flex:1,
        alignItems:'flex-start',
        flexDirection:'row',

    },
    paymentImage:{
        flex:1,
        width:'100%',
        height: '100%',
        margin: 15,
        resizeMode:"center",
        
    },
    modal:{
        zIndex: 1, /* Sit on top */
        paddingTop: 100,/* Location of the box */
        left: 0,
        top: 0,
        width: '100%',/* Full width */
        height: '100%', /* Full height */
        overflow: 'hidden', /* Enable scroll if needed */
        backgroundColor: 'rgb(255,255,255)', /* Fallback color */
    },
    closeBtn:{
        alignSelf: 'flex-end',
        padding:10,
        position: 'absolute',
        right:5
    },
    carditem: {
        padding: 5,
        margin: 15,
        backgroundColor: '#eeeeee',
        borderColor: '#999999',
        borderWidth: 1,
        width: '50%',
        minWidth: 150,
        height: 50,
      },
      selected:{
        width:210,
        height: 166,
        margin: 15,
        borderWidth: 5,
        borderRadius:10,
        borderColor: COL.COLS.MAIN_COL,
        alignContent:'center'
      },
      deselected:{
        width:264,
        height: 166,
        margin: 15,
        borderRadius:10,
      },
      currentTrip:{
          width:'30%',
        fontWeight:'bold',
        color:COL.COLS.MAIN_COL,
        fontSize:16
      }
    

  });