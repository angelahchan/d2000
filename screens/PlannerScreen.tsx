import * as React from 'react';
import { StyleSheet } from 'react-native';
import lines from '../test.json';
import images from '../routes';
import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import ProgressBar from '../components/progressBar';
import MapContainer from '../components/GoogleApiWrapper';
import{Animated,ProgressBarAndroid,TouchableOpacity,Button, AppRegistry, ScrollView, Image,TextInput,Picker,TouchableHighlight} from 'react-native';

var start : string;
var des : string;
var obj :ScrollList;
var sortKey='time';
var displayList: JSX.Element[] =[];
var imageSrc:any;
displayList.push(
  <View style={{
    width:'300px',
    margin:20,
    backgroundColor:'#fff',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height:'100px',
  }}>
    <Text>Please enter some shit</Text>

  </View>
);
class ScrollList extends React.Component {
  constructor(state:[]) {
    super(state);
    obj=this;
    this.state={innerList:displayList, val:null,judge:false}
  }
  search(li:[]){
    this.setState({innerList:li});
  }
  setTag(tag:object){
    this.setState({val:tag});
  }
  check(){
    if(this.state.judge==false) this.setState({judge:true})
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
      <View style={{alignItems: 'center'}}>
        <TouchableOpacity onPress={()=>this.setTag(null)}>
          <Image style={styles.back} source={require('../assets/images/back.png')}/>
        </TouchableOpacity>
        <View style={{height:'500px',width:'500px'}}>
          <MapContainer start={this.state.val.start} end={this.state.val.des} id={this.state.val.id}></MapContainer>
          
        </View>
        <View key={index} style={styles.seg}>
        <Text>{"start: "+this.state.val.start}</Text>
        <Text>{"end: "+this.state.val.des}</Text>
        <Text>{"arrive: "+this.state.val.arrive}</Text>
        <ProgressBar width={parseInt(this.state.val.seats)}/>
        <Text>{"seats left: "+this.state.val.seats}</Text>
        <Text>{"cost: "+this.state.val.price}</Text>
      </View>
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
      <Picker onValueChange={(key) => setSortKey(key)}>
        <Picker.Item label="Time" value="time" />
        <Picker.Item label="Money" value="cost" />
      </Picker>
      <View   style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
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
        <ProgressBar width={parseInt(element.seats)}/>
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
    height:'150px',
    margin:20,
    backgroundColor:'#fff',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  back:{
    width:'50px',
    height:'50px'
  },
  route:{
    width:'500px',
    height:'500px'
  },
  progressBar: {
    height: 20,
    width: '100%',
    backgroundColor: 'white',
    borderColor: '#000',
    borderWidth: 2,
    borderRadius: 5
  }
  ,inner: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});
