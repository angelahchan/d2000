import * as React from 'react';
import { StyleSheet, Button} from 'react-native';
import { Text, View } from '../components/Themed';
import GlobalContext from '../context/GlobalContext';
import { useLinkProps } from '@react-navigation/native';
import * as PSTATE from '../constants/PaymentState';
import { Ionicons } from '@expo/vector-icons';

export default function PaymentCompleteScreen(props:any) {
  const [global, setGlobal] = React.useContext(GlobalContext)

  return (
    <View style={styles.container}>
      <AddIcon name='ios-checkmark-circle-outline' color='green'></AddIcon>
      <Text style={styles.title}>$6.10</Text>
      <Text style={styles.description}>Paid by {global.selectedCard.type} card</Text>
      <Text style={styles.cardno}>{global.selectedCard.cardNumber}</Text>
      <View style={styles.space}></View>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <View style={styles.paymentDetails} >
        <Text style={styles.label}>Start of trip </Text>
        <Text style={styles.labelRight} >{global.startTime}</Text>
      </View>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <View style={styles.paymentDetails} >
        <Text style={styles.label}>End of trip </Text>
        <Text style={styles.labelRight} >{global.endTime}</Text>
      </View>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <View style={styles.paymentDetails} >
        <Text style={styles.label}> Line </Text>
        <Text style={styles.labelRight} >Randwick Line</Text>
      </View>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <View style={styles.paymentDetails} >
        <Text style={styles.label}>Start Location </Text>
        <Text style={styles.labelRight} >UNSW High Street</Text>
      </View>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <View style={styles.paymentDetails} >
        <Text style={styles.label}>End Location </Text>
        <Text style={styles.labelRight} >Central Chalmers Street</Text>
      </View>
      <View style={styles.space}></View>
      <View style={styles.btn}>
        <Button  title="Start a new trip!" onPress={() => {
          props.navigation.navigate('PaymentScreen')}}></Button>
      </View>
      <View style={styles.space}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    width:'80%',
    textAlign:'center'
  },
  space:{
    marginVertical:20,
  },
  separator: {
    height: 1,
    width: '100%',
    marginBottom: 5
  },
  description:{
    fontSize: 16,
    width:'80%',
    textAlign:'center'
  },
  label:{
    fontSize: 16,
    width:'100%',
    textAlign:'left',
    color:'grey',
  },
  labelRight:{
    fontSize: 16,
    width:'100%',
    textAlign:'left'
  },
  cardno:{
    fontSize: 16,
    width:'80%',
    textAlign:'center',
    color:'grey'
  },
  btn:{
    width:'90%'
  },
  paymentDetails:{
    flex:0.2,
    flexDirection:'row',
    alignItems: 'flex-start',
    height:30,
    width:'90%'
  }
});

function AddIcon(props: { name: string; color: string }) {
  return <Ionicons size={100}  {...props} />;
}