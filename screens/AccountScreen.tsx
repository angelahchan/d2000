import * as React from 'react';
import { StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import{ AppRegistry, ScrollView, Image,TextInput,Picker} from 'react-native'

var start : string;
var des : string;
var obj :object;
var sortKey='time';
var displayList: JSX.Element[] =[];
displayList.push(<Text key='0'>Free Trip</Text>)
displayList.push(<Text key='1'>Free Trip</Text>)
var index=2;
class ScrollList extends React.Component {
  constructor(state:[]) {
    super(state);
    obj=this;
    this.state={innerList:displayList}
  }
  search(li:[]){
    this.setState({innerList:li});
  }

  render(){
    return (
      <ScrollView style={styles.con} contentContainerStyle = {{alignItems: 'center'}}>
          {this.state.innerList.map(function(ele: React.ReactNode){index++;return <Text key={index}>{ele}</Text>})}
      </ScrollView>
    );
  }
}

export default function AccountScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome, Jess</Text>
      <Text style={styles.subtitle}>Adult No Concession</Text>
      <Text style={styles.h2}>Rewards</Text>
      <ScrollList></ScrollList>
    </View>
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
    margin:12
    
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
  }

});
