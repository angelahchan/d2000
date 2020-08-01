import * as React from 'react';
import { StyleSheet, Platform, Button, TouchableOpacity} from 'react-native';

import { Text, View } from '../components/Themed';
import DateTimePicker from '@react-native-community/datetimepicker';
import GlobalContext from '../context/GlobalContext';
import { Input } from 'react-native-elements';
import * as COL from '../constants/MainColors';
//this works idk why it says the import not working
import SearchableDropdown from 'react-native-searchable-dropdown'
import stopInfo from '../assets/data/stopInfo.json'



export default function AddNotifScreen() {
    const [date, setDate] = React.useState(new Date());
    const [mode, setMode] = React.useState('date');
    const [show, setShow] = React.useState(false);
    const [pickerVisible, setPickerVisible] = React.useState(false);
    const [selectedItems, setSelectedItems] = React.useState([]);
    const [destination, setDestination] = React.useState([]);
  
    const onChange =  (event, selectedDate) => {
      const currentDate = selectedDate || date;
      setShow(Platform.OS === 'android');
      setDate(currentDate);
    };
  
    const showMode = currentMode => {
      setShow(true);
      setMode(currentMode);
    };
  
    const showDatepicker = () => {
      showMode('date');
    };
  
    const showTimepicker = () => {
      showMode('time');
    };
  return (
    <View style={styles.container}>
        <TouchableOpacity style={styles.timePicker}
            onPress={() => setPickerVisible(true)}
        >
            <Input
                label='Time'
                placeholder={"3:20PM"}
                editable={false}
                value={date.toLocaleTimeString()}
            />
        </TouchableOpacity>
        {pickerVisible &&
            (<DateTimePicker
                mode={"time"} 
                display='clock'
                is24Hour={true} 
                value={date}

                onChange={(event, value) => {
                    setPickerVisible(false)
                    if (event.type === "set"){
                        setDate(value)
                    }
                    if (event.type === "cancel"){
                        setPickerVisible(false)
                    }
                }}
            />)}
             <SearchableDropdown
            onItemSelect={(item:any) => {
              const items = selectedItems;
              items.push(item)
              setSelectedItems(items)
            }}
            containerStyle={{ padding: 5, width:'90%'}}
            onRemoveItem={(item, index) => {
              const items = selectedItems.filter((sitem) => sitem.id !== item.id);
              setSelectedItems(items);
            }}
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
            defaultIndex={2}
            resetValue={false}
            textInputProps={
              {
                placeholder: "placeholder",
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
         <SearchableDropdown
            onItemSelect={(item:any) => {
              const items = destination;
              items.push(item)
              setSelectedItems(items)
            }}
            containerStyle={{ padding: 5, width:'90%'}}
            onRemoveItem={(item, index) => {
              const items = destination.filter((sitem) => sitem.id !== item.id);
              setSelectedItems(items);
            }}
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
            defaultIndex={2}
            resetValue={false}
            textInputProps={
              {
                placeholder: "placeholder",
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
        <Button  title="Add Notification" onPress= { () =>{

        }}
        
         />
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
  }
});