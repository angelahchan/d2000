
import * as React from 'react';
import { StyleSheet, Image, ScrollView,Dimensions, TouchableOpacity, TouchableWithoutFeedback, Modal, Button
} from 'react-native';
import * as PSTATE from '../constants/PaymentState';
import * as COL from '../constants/MainColors';
import { Ionicons } from '@expo/vector-icons';
import { Text, View} from '../components/Themed';
import { TouchableHighlight } from 'react-native-gesture-handler';
import GlobalContext from '../context/GlobalContext';

export default function CardDetail(props:any){ return (
    <View style={styles.paymentBox}>
         <Text style={styles.title}>Selected Card </Text>
        <Text style={styles.details}>Card No: {props.cardNumber}</Text>
        <Text style={styles.details}>Balance: ${props.balance}</Text>
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
        fontSize:20,
        width:'80%'
 
    },
    details:{
        textAlign:'center',
        padding:2,
        fontSize:16
 
    },
    
    paymentBox: {
        flex:1,
        alignItems:'center',
        borderWidth: 0,
        borderRadius: 10,
        width:'100%',
        backgroundColor:'rgb(255,244,230)',
        marginVertical:15,
    
        
    },
    
  });