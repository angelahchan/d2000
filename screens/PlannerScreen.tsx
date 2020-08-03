import * as React from 'react';
import { StyleSheet } from 'react-native';
import lines from '../test.json';
import images from '../routes';
import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import * as Progress from 'react-native-progress';
import{ProgressBarAndroid,TouchableOpacity,Button, AppRegistry, ScrollView, Image,TextInput,Picker,TouchableHighlight} from 'react-native'

var start : string;
var des : string;
var obj :ScrollList;
var sortKey='time';
var displayList: JSX.Element[] =[];
var imageSrc:any;
displayList.push(<Text key='0'>Test</Text>);
displayList.push(<Text key='1'>Test2</Text>);
class ScrollList extends React.Component {
  constructor(state:[]) {
    super(state);
    obj=this;
    this.state={innerList:displayList, val:null}
  }
  search(li:[]){
    this.setState({innerList:li});
  }
  setTag(tag:object){
    this.setState({val:tag});
  }
  render(){
    if(this.state.val==null)
    return (
      <ScrollView style={styles.con} contentContainerStyle = {{alignItems: 'center'}}>
          {this.state.innerList.map(function(ele: React.ReactNode){index++;return <Text key={index}>{ele}</Text>})}
      </ScrollView>
    );
    else 
    return (
      <View>
        <TouchableOpacity onPress={()=>this.setTag(null)}>
          <Image style={styles.back} source={require('../assets/images/back.png')}/>
        </TouchableOpacity>
        <Image style={styles.route} source={images['png'+this.state.val.id]}/>
        <Text>{this.state.val.arrive}</Text>
      </View>
    );
  }
}

var index=2;
export default function PlannerScreen() {
  
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tab One</Text>
      <TextInput placeholder="Start location" onChangeText={(text) => setStart(text)}></TextInput>
      <TextInput placeholder="end location" onChangeText={(text) => setDes(text)}></TextInput>
      <View   style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <Picker onValueChange={(key) => setSortKey(key)}>
        <Picker.Item label="Time" value="time" />
        <Picker.Item label="Money" value="cost" />
      </Picker>
      <ScrollList></ScrollList>
    
      <EditScreenInfo path="/screens/PlannerScreen.tsx" />
    </View>
  );
}
function setSortKey(key:string){
  sortKey=key;
  display();
}
function setStart(startT:string){
  start=startT;
  display();
  
}
function setDes(desT:string){
  des=desT;
  display();
  
}

function display(){
  var Li: JSX.Element[]=[];
  var reg: any[]=[];
  var temp: any[]=[];
  
  lines.lines.forEach((element) => {
    if(start==element.start && des==element.des){
      console.log(element.arrive);
      temp.push(element);
    }
    
  });
  switch(sortKey){
    case "time":
      reg=temp.sort((a,b)=>parseInt(a.duration)-parseInt(b.duration));
      break;
    case "cost":
      reg=temp.sort((a,b)=>parseInt(a.price)-parseInt(b.price));
      break;
    default:
  }
  temp.forEach((element)=>{
    Li.push(
      <TouchableOpacity onPress = {()=>obj.setTag(element)}>
      <View key={index} style={styles.seg}>
        <Text>{"start: "+element.start}</Text>
        <Text>{"end: "+element.des}</Text>
        <Text>{"arrive: "+element.arrive}</Text>
        <Text>{"seats left: "+element.seats}</Text>
        <Text>{"cost: "+element.price}</Text>
      </View>
      </TouchableOpacity>
      );
      index++;
  });
   obj.search(Li);
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
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
  con:{
    backgroundColor:'#eee',
    width:'80%',
  },
  seg:{
    width:'300px',
    margin:20,
    backgroundColor:'#fff',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  back:{
    float:'left',
    width:'50px',
    height:'50px'
  },
  route:{
    width:'500px',
    height:'500px'
  },
  progressBar:{
    width:'30px',
    height:'30px'
  },inner: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});
