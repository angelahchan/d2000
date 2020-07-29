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
      <Text style={styles.title}>$3.29</Text>
      <Text style={styles.description}>Paid by {global.selectedCard.type} card</Text>
      <Text style={styles.cardno}>{global.selectedCard.cardNumber}</Text>
      <View style={styles.btn}>
        <Button  title="Start a new trip!" onPress={() => {
          props.navigation.navigate('PaymentScreen')}}></Button>
      </View>
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
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  description:{
    fontSize: 16,
    width:'80%',
    textAlign:'center'
  },
  cardno:{
    fontSize: 16,
    width:'80%',
    textAlign:'center',
    color:'grey'
  },
  btn:{
    width:'90%'
  }
});

function AddIcon(props: { name: string; color: string }) {
  return <Ionicons size={100}  {...props} />;
}