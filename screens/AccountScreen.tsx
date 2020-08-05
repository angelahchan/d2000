import * as React from 'react';
import { StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import{ AppRegistry, ScrollView, Image,TextInput,Picker} from 'react-native';
import { COLS } from '../constants/MainColors';
import GlobalContext from '../context/GlobalContext';


var start : string;
var des : string;
var obj :object;
var sortKey='time';
var displayList: JSX.Element[] =[];
displayList.push(<Text key='0'>50% Off</Text>)
displayList.push(<Text key='1'>30% Off</Text>)
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
      <ScrollView contentContainerStyle = {{alignItems: 'center', height: 10}}>
          {this.state.innerList.map(function(ele: React.ReactNode){index++;return <Text key={index}>{ele}</Text>})}
      </ScrollView>
    );
  }
}

export default function AccountScreen() {
    const [global, setGlobal] = React.useContext(GlobalContext);
    //props.navigation.navigate('HistoryScreen')
  return (
    <View style={styles.container}>
          <Text style={styles.title}>Welcome,{ global.CurrentUser.name } </Text>
      <Text style={styles.subtitle}>Adult No Concession</Text>
      <hr  style={{
          backgroundColor: '#eee',
          height: "0.5",
          width: "100%",
          borderColor : '#eee',
          margin: 12,
      }}/>
      <Text style={styles.h2}>Rewards</Text>
      <ScrollList></ScrollList>
      <Text style={styles.body}>4 more trips until next reward</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  body : {
    fontSize: 12,
    fontWeight: 'bold',
    width:'80%',
    textAlign:'left',
    margin:2,
  },
  h2: {
    fontSize: 20,
    fontWeight: 'bold',
    width:'80%',
    textAlign:'left',
    margin:2,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    width:'80%',
    textAlign:'center',
    margin:12,
    color:COLS.MAIN_COL
  },
  subtitle: {
    fontSize: 14,
    width:'80%',
    textAlign:'center',
    margin:0,
    color:COLS.MAIN_COL
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
