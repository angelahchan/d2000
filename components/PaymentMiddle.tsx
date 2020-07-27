import * as React from 'react';
import { StyleSheet, Image, ScrollView,Dimensions} from 'react-native';
import * as PSTATE from '../constants/PaymentState';
import * as COL from '../constants/MainColors';
import { Ionicons } from '@expo/vector-icons';
import { Text, View} from '../components/Themed';
export default function PaymentMiddle(props:any){
    let  paymentStat = props.paymentStat;
    let setCanPay = props.setCanPay;

    return (

    <View style={styles.scrollbox} >
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}
          >
            <View style={styles.cardContainer}>
                <View style={styles.paymentBox}>
                    <Text>Add a Payment Method</Text>
                    <AddIcon name="ios-add" color="grey" />
                </View>
                <View style={styles.paymentBox}></View>
                <View style={styles.paymentBox}></View>
                <View style={styles.paymentBox}></View>

            </View>
            
        </ScrollView>
    </View>
    )
}
function AddIcon(props: { name: string; color: string }) {
    return <Ionicons size={50}  {...props} />;
  }
  let width = Dimensions.get('window').width;
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

    }

  });