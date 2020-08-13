import * as React from 'react';
import { StyleSheet} from 'react-native';
import * as PSTATE from '../constants/PaymentState'
import PaymentTop from '../components/PaymentTop'
import PaymentMiddle from '../components/PaymentMiddle'
import GlobalContext from '../context/GlobalContext';

import { Text, View} from '../components/Themed';
//      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
export default function PaymentScreen(props:any) {
  const [global, setGlobal] = React.useContext(GlobalContext)
  const [canPay, setCanPay] = React.useState(PSTATE.PAYMENT_STATUS.NOT_READY);
  const [savedCards, setSavedCards] = React.useState();


  if (global.tripState == PSTATE.PAYMENT_STATUS.FINISHED){
    props.navigation.navigate('PaymentCompleteScreen')
  }
  return (
    <View style={styles.container}>
      <PaymentTop paymentStat={canPay} setCanPay={setCanPay}
      savedCards={savedCards} setSavedCards={setSavedCards}
      navigation={props.navigation}  />
      <PaymentMiddle paymentStat={canPay} setCanPay={setCanPay}
       savedCards={savedCards} setSavedCards={setSavedCards}
       navigation={props.navigation} />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',

  },

  separator: {
    marginVertical: 5,
    height: 1,
    width: '100%',
  },
  banner: {
    flex:0.1,
    alignItems:'center',
    overflow: 'hidden',
    width:'90%'

},

});
