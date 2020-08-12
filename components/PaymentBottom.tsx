import * as React from 'react';
import { StyleSheet, ScrollView } from 'react-native';

import { Text, View } from './Themed';
import  { COLS } from '../constants/MainColors';
import randwick from '../assets/data/randwick.json'
import { withTheme } from 'react-native-elements';


export default function PaymentBottom() {
  React.useEffect( ()=>{
    console.log("HELLO")
    console.log(randwick)
    randwick.map((stopName:any, index:any) => {
      console.log(stopName.name)
   })
  })
  return (
    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}
    >
      <View style={styles.scroll}>{
       randwick.map((stopName:any, index:any) => {
          return(
            <>
          <View style={ styles.stop} key={index}>
            <View style={
              {width: 40,
              height: 40,
              borderRadius: 40/2,
              backgroundColor: (index == 0) ? COLS.MAIN_ORANGE :'white',
              borderWidth: (index == 0) ? 0 : 2,
              borderColor: COLS.MAIN_ORANGE,
              marginVertical:5}
            } key={index}></View>
          <Text> {stopName.name} </Text>
          </View>
          
          
          
          </>
          )
       })
    }
    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 36,
    color:COLS.MAIN_COL
  },
  separator: {
    height: 10,
    width: 15,
  },
  scroll:{
    alignItems:'flex-start',
    flexDirection:'row',
    paddingVertical:30
  },
  circle: {
    width: 40,
    height: 40,
    borderRadius: 40/2,
    backgroundColor: COLS.MAIN_ORANGE,
    marginVertical:5
},

stop:{
  width:60,
  marginHorizontal:15

},
line:{
  borderBottomWidth:5,
}

});
