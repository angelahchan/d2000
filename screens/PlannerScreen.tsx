import * as React from 'react';
import { StyleSheet } from 'react-native';
import lines from '../test.json';
import images from '../routes';
import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import {MapWrapper} from '../components/MapWrapper';
import{Animated,ProgressBarAndroid,TouchableOpacity,Button, AppRegistry, ScrollView, Image,TextInput,Picker,TouchableHighlight} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

var start : string;
var des : string;
var obj :ScrollList;
var sortKey='time';
var displayList: JSX.Element[] =[];
var imageSrc:any;
start= "Enter start location";
des ="Enter end location";
//display list place
displayList.push(
  <View style={{
    width:'100%',
    margin:20,
    backgroundColor:'#fff',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height:100
  }}>
    <Text>Please Enter Location</Text>

  </View>
);
class Header extends React.Component{
  constructor(prop: Readonly<{}>){
    super(prop);
    this.state={start:"Enter start location",des:"Enter destination"};
  }
  execute(){
    start="UNSW";
    des="Sydney Tower";
    this.setState({start:"UNSW",des:"Sydney Tower"});
    display();
  }
  render(){
    if(start=="Enter start location")
    return (<TouchableOpacity style={styles.header} onPress={()=>this.execute()}>
        <View  style={styles.headerSeg}>
        <Image source={require('../assets/images/start-1.png')} />
        <Text style={styles.headerText}>{start}</Text>
        </View>
        <View
  style={{
    borderBottomColor: 'grey',
    borderBottomWidth: 1,
    width:'90%',
    alignSelf:'center',
    marginVertical:'3%'
  }}
/>
        
    <View  style={styles.headerSeg}>
    <Image source={require('../assets/images/end.png')} />
    <Text  style={styles.headerText}>{des}</Text>
    </View>

  </TouchableOpacity>);
  else return (<TouchableOpacity onPress={()=>this.execute()}>
  <View  style={styles.headerSeg}>
  <Image source={require('../assets/images/start-1.png')} />
  <Text style={{opacity:1}}>{start}</Text>
  </View>
  
<View  style={styles.headerSeg}>
<Image source={require('../assets/images/end.png')} />
<Text style={{opacity:1}}>{des}</Text>
</View>

</TouchableOpacity>);
  }
}
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
    return (<View style={{alignItems:'center',width:'90%',height:'100%'}}>
      
      <MyPicker />
      <ScrollView endFillColor='white' style={styles.con} contentContainerStyle = {{alignItems: 'center'}}>
          {this.state.innerList.map(function(ele: React.ReactNode){return ele})}
      </ScrollView>
      </View>
    );
    else 
    return (
      <View style={{alignItems: 'center',padding:'10%',backgroundColor:'#eee',paddingTop:0}}>
        <TouchableOpacity onPress={()=>this.setTag(null)}>
          <Image style={styles.back} source={require('../assets/images/back.png')}/>
        </TouchableOpacity>
        <View style={{height:'50%',width:'50%'}}>
          <MapWrapper start={this.state.val.start} des={this.state.val.des} id={this.state.val.line} startPos={this.state.val.startPos} desPos={this.state.val.desPos}></MapWrapper>
        </View>
        
        <View  key={index++} style={[styles.seg,{opacity:1,backgroundColor:'white',zIndex:3000,padding:0}]}>
              <View key={index++} style={styles.seg3}>
                  <Text style={styles.left} > {"Line "+this.state.val.line}</Text>
                  <Text style={styles.right}>{"$" + this.state.val.price}</Text>
              </View>
              <View key={index++} style={[{top:30},styles.seg2]}>
                  <Text style={styles.grey}>{"Start at " + this.state.val.arrive}</Text>
              </View>
              <View key={index++} style={[{top:50},styles.seg2]}>
                  <Text style={styles.grey}>{this.state.val.start}</Text>
              </View>

              <View key={index++} style={[{top:70},styles.seg2]}>
                  <Text style={styles.grey}>{this.state.val.des}</Text>
              </View>
              <Image style={{width:30,height:35,position:'absolute',right:80,top:40}} source={require('../assets/images/seat.png')}/>
              <Text style={[styles.right,{position:'absolute',top:80,right:50}]}>{this.state.val.seats}%</Text>  
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
function execute(){
  start="UNSW";
  des="Sydney Tower";
  display();
}
class MyPicker extends React.Component{
  constructor(prop: Readonly<{}>){
    super(prop);
    pick=this;
    this.state={key:'time',judge:false}
  }
  render(){
    //area to position the sort by dropdown 
    return (
      <View style={{position:'relative',width:100,height:30,zIndex:3000}}>
      <TouchableOpacity onPress={displayP}>
      <Text >Sort by :{val}</Text>
      </TouchableOpacity>
      
      {pick.state.judge &&
      <Picker  style={{width:300,borderWidth:1,opacity:1,backgroundColor:"white"}} onValueChange={(key) => setSortKey(key)}>
        <Picker.Item label="Time" value="time" />
        <Picker.Item label="Money" value="cost" />
      </Picker>
      
      }   
      <Icon
        name='sort-down'
        size={20}
        color='black'
        style={[{right: 0, top: -5, position: 'absolute'}]}
        />
      </View>
    );
      }
  }
var index=2;
export default function PlannerScreen() {
  var judge=false;
  return (
    
    <View style={styles.container}>
      <Header></Header>
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
      <TouchableOpacity key={index++} style={styles.seg}  onPress = {()=>obj.setTag(element)}>
          <View  key={index++} style={styles.seg}>
              <View key={index++} style={styles.seg3}>
                  <Text style={styles.left} > {"Line "+element.line}</Text>
                  <Text style={styles.right}>{"$" + element.price}</Text>
              </View>
              <View key={index++} style={[{top:30},styles.seg2]}>
                  <Text style={styles.grey}>{"Start at " + element.arrive}</Text>
              </View>
              <View key={index++} style={[{top:50},styles.seg2]}>
                  <Text style={styles.grey}>{element.start}</Text>
              </View>

              <View key={index++} style={[{top:70},styles.seg2]}>
                  <Text style={styles.grey}>{element.des}</Text>
              </View>
              <Image style={{width:30,height:35,position:'absolute',right:80,top:40}} source={require('../assets/images/seat.png')}/>
              <Text style={[styles.right,{position:'absolute',top:80,right:50}]}>{element.seats}%</Text>  
          </View>
      </TouchableOpacity>
      );
      if(Li.length==0) Li.push(<View style={{
        width:'30%',
        margin:20,
        backgroundColor:'#fff',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        height:'20%'
      }}>
        <Text>Please select the start and end stops</Text>
    
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
    height: 10,
    width: '80%',
    color:'black',
    backgroundColor:'black'
  },
  con:{
    backgroundColor:'#eee',
    width:'100%',
    marginBottom:40
  },
  seg:{
    width:250,
    height:150,
    margin:20,
    backgroundColor:'#fff',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative'
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
    position:"absolute",
    top:0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 5,
},
seg2: {
  position:"absolute",
   left:30,
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
pickerIcon: {
  color: "#eee",
  position: "absolute",
  bottom: 15,
  right: 10,
  fontSize: 20
},
headerSeg:{
  marginLeft: 25,
  flexDirection: 'row',
  justifyContent: 'flex-start',
  alignItems:'flex-start',
  marginTop:'3%',

},
header:{
  width:'100%',
  height:'25%'

},
headerText:{
  fontSize:16,
  color:'grey',
}



});
