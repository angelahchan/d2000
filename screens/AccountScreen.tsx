
import * as React from 'react';
import { StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import{ AppRegistry, ScrollView, Image,TextInput,Picker, Button} from 'react-native'
import Reward from '../components/Reward'
import GlobalContext from '../context/GlobalContext';


export default function AccountScreen(props:any) {
  const [global, setGlobal] = React.useContext(GlobalContext);
  let status;
  if (global.hasConcession)
    status = 'Student with Concession'
  else
    status = 'Adult No Concession'
  return (
    <ScrollView endFillColor='white'>
      <View style={styles.container}>
        <Text style={styles.title}>Welcome {global.CurrentUser.name}</Text>
        
        <Text style={styles.subtitle}>{status}</Text>
        <View style={styles.btn}>
        { !global.hasConcession &&
            <Button title='Apply For Concession' onPress={()=>{
              setGlobal({
                ...global,
                hasConcession:true
              })
            }}></Button>
      }
        </View>
        <Text style={styles.h2}>Rewards</Text>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scroll}
        >
          
            <View style={styles.rewards}>
            {
             global.discounts.map((discount:any, index:any) => {
               return (
                <Reward discount={discount} index={index} key={index} />
               )
               })
              }
            </View>
        </ScrollView>
        <Text style={styles.h2}>4 more days until new reward</Text>
        <Image source={require('../assets/images/daysleft.jpg')}
        style={styles.daysleft}/>
              <View style={styles.btn}>
        </View>
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
  h2: {
    fontSize: 20,
    fontWeight: 'bold',
    width:'80%',
    textAlign:'left',
    
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    width:'80%',
    textAlign:'center',
    margin:12
    
  },
  subtitle: {
    fontSize: 14,
    width:'80%',
    textAlign:'center',
    margin:10
    
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  textInput: {
    borderColor: 'gray',
    borderWidth: 1,
    width:'50%',
    marginTop:5,
    marginBottom:25
  },
  input:{
    width:'80%',
    justifyContent:'flex-start'
  },
  button:{
    marginVertical:10,
    width:'80%'
  },
  picker:{
    width:'80%',
    borderWidth:1,
  },
  formname: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start'// if you want to fill rows left to right
  },
  item: {
    width: '50%' // is 50% of container width
  },
  rewards:{

    alignItems:'flex-start',
    flexDirection:'row',
  },
  daysleft:{
    width:'90%',
    resizeMode:"contain",
    height:70,
    marginVertical:10
  },
  scroll:{
    flexGrow:1,
  },
  btn:{
    width:'90%',
    alignSelf:'center',
    borderRadius:30,
    borderWidth:0,
    marginVertical:15,
  }

});