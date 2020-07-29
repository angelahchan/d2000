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


export default function PaymentMiddle(props:any){
    let setCanPay = props.setCanPay;
    const [global, setGlobal] = React.useContext(GlobalContext);
    let  paymentStat = global.tripState
    //payment form to add a new card
    const [modalVisible, setModalVisible] = React.useState(false);
    const [cardNo, setCardNo] = React.useState('')
    const [balance, setBalance] = React.useState('')
    
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
        const newList = global.cards.map((item) => {
            if (item.cardNumber === id) {
              const updatedItem = {
                ...item,
                selected: true,
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
                    global.cards.map((card, index) => {
                        // cards.map(card    for card in cards:
                        return (
                        <TouchableOpacity style={[card.selected ? styles.selected: styles.deselected ]}
                        activeOpacity={1} key={index}
                        onPress = { () =>  {
                            handleToggleComplete(card.cardNumber)
                            setBalance(card.balance)
                            setCardNo(card.cardNumber)
                         } }>
                            {card.type == 'opal' && opalImage}
                            {card.type == 'credit' && creditImage}
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
        {cardNo != '' && <CardDetail cardNumber={cardNo} balance={balance}/> }
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
        {cardNo != '' && <CardDetail cardNumber={cardNo} balance={balance}/> }
        </View>
        </>)
    }
}
/*
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
            >   
                <View style={styles.modal}>
                    <TouchableOpacity
                        style={styles.closeBtn} 
                        onPress={() => {
                        setModalVisible(!modalVisible);
                    }}>
                        <AddIcon name="ios-close" color="gray"/>
                    </TouchableOpacity>
                <Text>
                    Hellooooo
                </Text>
                </View>
            </Modal> 
    */
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
        backgroundColor:COL.COLS.BACKGROUND_COL,
        height: 120,
        marginVertical:15,
        borderColor: COL.COLS.MAIN_COL
    },
    cardContainer:{
        flex:1,
        alignItems:'flex-start',
        flexDirection:'row',

    },
    paymentImage:{
        flex:1,
        width:250,
        height: 125,
        marginVertical:15,
        resizeMode:"contain"
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
          opacity:1
      },
      deselected:{
          opacity:0.5
      }
    

  });