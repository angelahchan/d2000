import * as React from 'react';
import { StyleSheet, Platform, Button, Switch, FlatList, ScrollView, TouchableOpacity} from 'react-native';

import { Text, View } from '../components/Themed';
import GlobalContext from '../context/GlobalContext';
import { Input } from 'react-native-elements';
import * as COL from '../constants/MainColors';
import { Ionicons } from '@expo/vector-icons';


export default function NotifListScreen(props:any) {
  const [global, setGlobal] = React.useContext(GlobalContext)
  React.useLayoutEffect(() => {
    props.navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity style={styles.add} onPress={ () =>{
            props.navigation.navigate('AddNotifScreen')
        }

        }>
        <AddIcon name="ios-add" color="white" />
        </TouchableOpacity>
      ),
    });
  }, [props.navigation]);
  function toggleSwitch(index:any){
    let selectedItem;
    let i = 0;
    const newList = global.notifs.map((item:any) => {


        if (i == index) {
          const updatedItem = {
            ...item,
            selected: !item.selected
          };
          selectedItem = updatedItem;
          i = i + 1;
          return updatedItem;
        }
        else {
            i = i + 1;
            return item;
        }
      });
   
      setGlobal({
        ...global,
        notifs: newList,
      });
  }
// handleToggleComplete(card.cardNumber)
    return (
        <View style={styles.container} > 
        <ScrollView  snapToAlignment="start"
        >
            <View style={styles.switches}>
            {
                global.notifs.map((notif:any, index:any) => {
                    // cards.map(card    for card in cards:
                    return (
                        <>
                        <View style={styles.switch}>
                            <View style={styles.notifLeft}>
                                <Text style={styles.title}>{notif.startStop} > {notif.endStop} </Text>
                                <Text style={styles.details}>{notif.notifDate} {notif.notifTime}</Text>
                            </View>
                            <View style={styles.notifRight}>
                                <Switch 
                                trackColor={{ false: "#767577", true: "#81b0ff" }}
                                thumbColor={notif.selected ? "#f5dd4b" : "#f4f3f4"}
                                ios_backgroundColor="#3e3e3e"
                                onValueChange={() => 
                                    {

                                        toggleSwitch(index)}}
                                value={notif.selected}
                                /> 
                            </View>
                        </View>
                        </>
                    );
                })
            }

            </View>
            
        </ScrollView>
    </View>
    );
  
}  function AddIcon(props: { name: string; color: string }) {
    return <Ionicons size={50}  {...props} />;
  }


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    width:'90%'
  },
  details: {
    fontSize: 14,
    color:'grey',
    width:'90%'
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
  switches:{
      flex:1,
    flexDirection:'column'
  },
  switch:{
      flex:0.2,
      flexDirection:'row',
      margin:10,
  },
  notifLeft:{
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems:'flex-start'
  },
  notifRight:{
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems:'flex-end'
  },
  add:{
    marginRight:10,
  }
});
