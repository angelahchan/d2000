import * as React from 'react';
import { StyleSheet, ImageBackground, ToastAndroid, TouchableOpacity, Image,Platform} from 'react-native';
//import { Button } from 'react-native-elements';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View, } from '../components/Themed';
import GlobalContext from '../context/GlobalContext';
import  { COLS } from '../constants/MainColors';




export default function Reward(props:any) {
  const [global, setGlobal] = React.useContext(GlobalContext);

  return (
        <ImageBackground source = {require('../assets/images/angryimg.png')}
          style={styles.card}
          >
          <Text style={styles.title}>{props.discount.amount}%</Text>
          <Text style={styles.title}>OFF</Text>
            {!props.discount.redeemed &&
            <TouchableOpacity style={styles.btn}
            onPress={() =>{
                if (Platform.OS =='android')
                ToastAndroid.show("Redeemed Discount! Discount will be used in next trip", ToastAndroid.SHORT);
                const newDiscounts = [...global.discounts];
                newDiscounts.splice(props.index, 1);
                setGlobal ({
                  ...global,
                  currentDiscount:props.discount,
                  discounts:newDiscounts
                })
            }}>
              <Text style={styles.redeem}>REDEEM</Text>
            </TouchableOpacity>
            }
        </ImageBackground>  
  )
}  
 


const styles = StyleSheet.create({
  container: {
    flex: 0.6,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 32,
    color:'white',
    textAlign:'center'
  },   
  redeem:{
    width:'90%',
    fontSize:14,
    color:'white',
    textAlign:'center'
  },
  card:{
    flex:1,
    width:150,
    height: 150,
    margin: 15,
    resizeMode:"contain",

    borderRadius: 20,
    borderWidth:0,
    overflow:'hidden',
    justifyContent: "center",
    alignItems: "center"
  },
  btn:{
    width:'50%',
    alignItems:'center',
    backgroundColor:'#020024',
    marginVertical:10,
    height:'20%',
    justifyContent:'center',
    borderRadius:10,
    borderWidth:1,
    borderColor:'white'
    
  }


});
