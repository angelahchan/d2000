import * as React from 'react';
import { StyleSheet, Platform, Button, TouchableOpacity} from 'react-native';

import { Text, View } from '../components/Themed';
import DateTimePicker from '@react-native-community/datetimepicker';
import GlobalContext from '../context/GlobalContext';
import { Input } from 'react-native-elements';
import * as COL from '../constants/MainColors';
//this works idk why it says the import not working
import SearchableDropdown from 'react-native-searchable-dropdown'
import sales from '../assets/data/Sales.json'



export default function AddSaleScreen() {
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
          <View style={styles.timePicker}>
            <Input
                label='Name'
                placeholder={"Opal Card account"}
                editable={true}
               
              />
         </View>
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
            items={sales}
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
        <Button  title="Add Sale" onPress= { () =>{

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
