import * as React from 'react';
import { StyleSheet, Platform, Button, TouchableOpacity, ToastAndroid} from 'react-native';

import { Text, View } from '../components/Themed';
import DateTimePicker from '@react-native-community/datetimepicker';
import GlobalContext from '../context/GlobalContext';
import { Input } from 'react-native-elements';
import * as COL from '../constants/MainColors';
//this works idk why it says the import not working
import SearchableDropdown from 'react-native-searchable-dropdown'
import stopInfo from '../assets/data/stopInfo.json'



export default function AddNotifScreen(props:any) {
    const [time, setTime] = React.useState(new Date());
    const [date, setDate] = React.useState(new Date());
    const [mode, setMode] = React.useState('date');
    const [show, setShow] = React.useState(false);
    const [datePickerVisible, setDatePickerVisible] = React.useState(false);
    const [pickerVisible, setPickerVisible] = React.useState(false);
    const [startStop, setStartStop] = React.useState('');
    const [endStop, setEndStop] = React.useState('');
    const [global, setGlobal] = React.useContext(GlobalContext)


    function addNotif(props:any){
      const newNotifs = [
        ...global.notifs,
        {
          notifDate:date.toLocaleDateString(),
          notifTime:time.toLocaleTimeString(),
          startStop:startStop,
          endStop:endStop,
          selected:false
        },
    ]
      setGlobal({
        ...global,
        notifs: newNotifs
  })
  props.navigation.push('NotifListScreen');
  if (Platform.OS == 'android')
    ToastAndroid.show("Added Notification", ToastAndroid.SHORT);
  }
  return (
    <View style={styles.container}>
        <TouchableOpacity style={styles.timePicker}
            onPress={()=> setDatePickerVisible(true)}
        >
            <Input
                label='Date'
                placeholder={"5/08/2020"}
                editable={false}
                value={date.toLocaleDateString()}
            />
        </TouchableOpacity>
        {datePickerVisible &&
            (<DateTimePicker
                mode={"date"} 
                value={date}

                onChange={(event, value) => {
                    setDatePickerVisible(false)
                    if (event.type === "set"){
                        setDate(value)
                    }
                    if (event.type === "cancel"){
                        setDatePickerVisible(false)
                    }
                }}
            />)}
        <TouchableOpacity style={styles.timePicker}
            onPress={()=> setPickerVisible(true)}
        >
            <Input
                label='Time'
                placeholder={"3:20PM"}
                editable={false}
                value={time.toLocaleTimeString()}
            />
        </TouchableOpacity>
        {pickerVisible &&
            (<DateTimePicker
                mode={"time"} 
                display='clock'
                is24Hour={true}
                value={time}

                onChange={(event, value) => {
                    setPickerVisible(false)
                    if (event.type === "set"){
                        setTime(value)
                    }
                    if (event.type === "cancel"){
                        setPickerVisible(false)
                    }
                }}
            />)}
            <Text style={styles.stopLabel}>Start Stop</Text>
             <SearchableDropdown
            onItemSelect={(item:any) => {
              setStartStop(item.name)
            }}
            containerStyle={{ padding: 5, width:'90%'}}
            itemStyle={{
              padding: 10,
              marginTop: 2,
              backgroundColor: '#ddd',
              borderColor: '#bbb',
              borderWidth: 1,
              borderRadius: 5,
            }}
            itemTextStyle={{ color: '#222' }}
            itemsContainerStyle={{ maxHeight: 140 }}
            items={stopInfo}
            resetValue={false}
            textInputProps={
              {
                placeholder: "Start Stop",
                underlineColorAndroid: "transparent",
                style: {
                    padding: 12,
                    borderWidth: 1,
                    borderColor: '#ccc',
                    borderRadius: 5,
                },
              }
            }
            listProps={
              {
                nestedScrollEnabled: true,
              }
            }
        />
          <Text style={styles.stopLabel}>End Stop</Text>
         <SearchableDropdown
            onItemSelect={(item:any) => {
              setEndStop(item.name)
            }}
            containerStyle={{ padding: 5, width:'90%'}}
            itemStyle={{
              padding: 10,
              marginTop: 2,
              backgroundColor: '#ddd',
              borderColor: '#bbb',
              borderWidth: 1,
              borderRadius: 5,
            }}
            itemTextStyle={{ color: '#222' }}
            itemsContainerStyle={{ maxHeight: 140 }}
            items={stopInfo}
            resetValue={false}
            textInputProps={
              {
                placeholder: "End Stop",
                underlineColorAndroid: "transparent",
                style: {
                    padding: 12,
                    borderWidth: 1,
                    borderColor: '#ccc',
                    borderRadius: 5,
                },
              }
            }
            listProps={
              {
                nestedScrollEnabled: true,
              }
            }
        />
        <View style={styles.btn}>
        <Button  title="Add Notification" onPress= { () => {
          addNotif(props)

        }}/>
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
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  timePicker:{
      width:'90%'
  },
  btn:{
    width:'90%',
    marginVertical:20
  },
  stopLabel:{
    width:'90%',
    textAlign:'left',
    marginLeft:15,
    
    fontWeight:'bold',
    color:'gray',
    fontSize:15
    
  }
});
