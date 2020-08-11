import * as React from 'react';
import { StyleSheet } from 'react-native';
import lines from '../test.json';
import images from '../routes';
import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import {MapWrapper} from '../components/MapWrapper';
import{Animated,ProgressBarAndroid,TouchableOpacity,Button, AppRegistry, ScrollView, Image,TextInput,Picker,TouchableHighlight} from 'react-native';

var start : string;
var des : string;
var obj :ScrollList;
var sortKey='time';
var displayList: JSX.Element[] =[];
var imageSrc:any;
displayList.push(
  <View style={{
    width:200,
    margin:20,
    backgroundColor:'#fff',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height:100
  }}>
    <Text>Please enter some thing</Text>

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
          {this.state.innerList.map(function(ele: React.ReactNode){return ele})}
      </ScrollView>
    );
    else 
    return (
      <View style={{alignItems: 'center',padding:'10%',backgroundColor:'#eee',paddingTop:0}}>
        <TouchableOpacity onPress={()=>this.setTag(null)}>
          <Image style={styles.back} source={require('../assets/images/back.png')}/>
        </TouchableOpacity>
        <View style={{height:500,width:500}}>
          <MapWrapper start={this.state.val.start} des={this.state.val.des} id={this.state.val.line} startPos={this.state.val.startPos} desPos={this.state.val.desPos}></MapWrapper>
        </View>
        
        <View  key={index++} style={styles.seg}>
            <View key={index++} style={styles.seg3}>
                <Text style={styles.left} > {"Randwick Line"}</Text>
                <Text style={styles.right}>{"$" + this.state.val.price}</Text>
            </View>


            <View key={index++} style={styles.seg2}>
                
                <Text style={styles.grey}>{"Start at " + this.state.val.arrive}</Text>
            </View>
            <View key={index++} style={styles.seg2}>
                
                <Text style={styles.grey}>{this.state.val.start}</Text>
            </View>

            <View key={index++} style={styles.seg2}>
                
                <Text style={styles.grey}>{this.state.val.des}</Text>
            </View>
        </View>
    
      </View>
    );
  }
}
var judge=false;
var val='time';
var pick;
function displayP(){
  if(pick.state.judge==false) pick.setState({judge:true});
}
class MyPicker extends React.Component{
  constructor(prop){
    super(prop);
    pick=this;
    this.state={key:'time',judge:false}
  }
  render(){
    return (
      <View>
      <TouchableOpacity onPress={displayP}>
      <Text >Sort by :{val}</Text>
      </TouchableOpacity>
      
      {pick.state.judge &&
      <Picker style={{width:300,borderWidth:1}} onValueChange={(key) => setSortKey(key)}>
        <Picker.Item label="Time" value="time" />
        <Picker.Item label="Money" value="cost" />
      </Picker>
      }   
      
      </View>
    );
      }
  }
var index=2;
export default function PlannerScreen() {
  var judge=false;
  return (
    <View style={styles.container}>
      
      <TextInput placeholder="Start location" onChangeText={(text) => setStart(text)}></TextInput>
      <TextInput placeholder="end location" onChangeText={(text) => setDes(text)}></TextInput>
      <MyPicker />
      
      <ScrollList></ScrollList>
    </View>
  );
}
function setSortKey(key:string){
  sortKey=key;
  val=key;
  pick.setState({key:{val},judge:false});
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
      <TouchableOpacity key={index++} style={styles.seg1}  onPress = {()=>obj.setTag(element)}>
          <View  key={index++} style={styles.seg}>
              <View key={index++} style={styles.seg3}>
                  <Text style={styles.left} > {"Randwick Line"}</Text>
                  <Text style={styles.right}>{"$" + element.price}</Text>
              </View>
              <View key={index++} style={styles.seg2}>
                  
                  <Text style={styles.grey}>{"Start at " + element.arrive}</Text>
              </View>
              <View key={index++} style={styles.seg2}>
                  
                  <Text style={styles.grey}>{element.start}</Text>
              </View>

              <View key={index++} style={styles.seg2}>
                  
                  <Text style={styles.grey}>{element.des}</Text>
              </View>
          </View>
      </TouchableOpacity>
      );
      if(Li.length==0) Li.push(<View style={{
        width:200,
        margin:20,
        backgroundColor:'#fff',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        height:100
      }}>
        <Text>Please enter some thing</Text>
    
      </View>);
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
    marginBottom:40
  },
  seg:{
    width:300,
    height:150,
    margin:20,
    backgroundColor:'#fff',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  back:{
    width:50,
    height:50,
  },
  route:{
    width:80,
    height:80,
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
  },seg1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 12,
},
seg3: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 5,
},
seg2: {
    marginLeft: 25,
    flexDirection: 'row',
    justifyContent: 'flex-start'
},
left: {
    textAlign: 'left',
    fontSize: 14,
    color: '#006666',
    fontWeight: '900',
    marginLeft: 20,
    marginRight: 25,
},
grey: {

    textAlign: 'left',
    fontSize: 14,
    color: '#999999',
    fontWeight: '500',
    marginTop: 5,
},
right: {

    textAlign: 'right',
    fontSize: 14,
    color: '#000000',
    fontWeight: '700',
    marginLeft: 25,
    marginRight: 25,
},
});
