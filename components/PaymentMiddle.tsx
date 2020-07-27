import * as React from 'react';
import { StyleSheet, Image, ScrollView,Dimensions, TouchableOpacity, Modal, Button
} from 'react-native';
import * as PSTATE from '../constants/PaymentState';
import * as COL from '../constants/MainColors';
import { Ionicons } from '@expo/vector-icons';
import { Text, View} from '../components/Themed';
import { TouchableHighlight } from 'react-native-gesture-handler';
import GlobalContext from '../context/GlobalContext';

export default function PaymentMiddle(props:any){
    let setCanPay = props.setCanPay;
    const [global, setGlobal] = React.useContext(GlobalContext);
    let  paymentStat = global.tripState
    
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

    //payment form to add a new card
    const [modalVisible, setModalVisible] = React.useState(false);
    if (paymentStat == PSTATE.PAYMENT_STATUS.NOT_READY || paymentStat == PSTATE.PAYMENT_STATUS.READY){
        return (
        <View style={styles.scrollbox} > 
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}
            >
                <View style={styles.cardContainer}>
                {
                    global.cards.map((card, index) => { // cards.map(card    for card in cards:
                        return (
                        <TouchableOpacity style={styles.paymentBox} activeOpacity={0.5} key={index}
                        onPress = { () =>  handleToggleComplete(card.cardNumber) }>
                            <Text>{card.cardNumber}</Text>
                            <Text>{card.type}</Text>
                            <Text>{card.selected.toString()}</Text>
                        </TouchableOpacity>
                        );
                    })
                }
                    <TouchableOpacity style={styles.paymentBox} onPress={() => props.navigation.push('AddCardScreen')}
                    >
                        <Text>Add a Payment Method</Text>
                        <AddIcon name="ios-add" color="grey" />
                    </TouchableOpacity>

                </View>
                
            </ScrollView>
        </View>
        )
    }

    else if (paymentStat == PSTATE.PAYMENT_STATUS.FINISHED){
        return (<></>)
    }
    else {
        return ( <TouchableOpacity style={styles.paymentBox}>
            <Text>{global.selectedCard.cardNumber}</Text>
            <Text>{global.selectedCard.type}</Text>
        </TouchableOpacity>)
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
    title:{
        fontWeight:'bold',
        textAlign:'center',
        padding:2,
        fontSize:20
 
    },
    description:{
        textAlignVertical:'bottom',
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
        width:270,
        height: 125,
        margin:15,
        color:'grey'
    },
    cardContainer:{
        flex:1,
        alignItems:'flex-start',
        flexDirection:'row',

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
      }
    

  });