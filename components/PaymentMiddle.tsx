import * as React from 'react';
import { StyleSheet, Image, ScrollView,Dimensions, TouchableOpacity, Modal, Button} from 'react-native';
import * as PSTATE from '../constants/PaymentState';
import * as COL from '../constants/MainColors';
import { Ionicons } from '@expo/vector-icons';
import { Text, View} from '../components/Themed';
import { TouchableHighlight } from 'react-native-gesture-handler';
export default function PaymentMiddle(props:any){
    let  paymentStat = props.paymentStat;
    let setCanPay = props.setCanPay;
    //payment form to add a new card
    const [modalVisible, setModalVisible] = React.useState(false);
    return (
    <View style={styles.scrollbox} >
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
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}
          >
            <View style={styles.cardContainer}>
                <TouchableOpacity style={styles.paymentBox} onPress={() => {
                setModalVisible(!modalVisible);}
                }>
                    <Text>Add a Payment Method</Text>
                    <AddIcon name="ios-add" color="grey" />
                </TouchableOpacity>

            </View>
            
        </ScrollView>
    </View>
    )
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
    }

  });