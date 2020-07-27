import * as React from 'react';
import { StyleSheet, Button} from 'react-native';
import { Text, View } from '../components/Themed';
import GlobalContext from '../context/GlobalContext';
import { useLinkProps } from '@react-navigation/native';
import * as PSTATE from '../constants/PaymentState';

export default function PaymentCompleteScreen(props:any) {
  const [global, setGlobal] = React.useContext(GlobalContext)

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Payment Complete!</Text>
      <Text>Card: {global.selectedCard.cardNumber}</Text>
      <Text>Type: {global.selectedCard.type}</Text>
      <Button title="Start a new trip!" onPress={() => {
        setGlobal({
            ...global,
            tripState:PSTATE.PAYMENT_STATUS.READY
          });
        props.navigation.navigate('PaymentScreen')}}></Button>
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
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
