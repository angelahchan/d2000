
import { View } from './Themed';
import MapView,{Marker,Polyline} from 'react-native-maps';
import React, { Component } from 'react';
import {Image} from 'react-native';
const line3 = [
    { latitude: -33.924834, longitude: 151.229151 },
    { latitude: -33.920777, longitude: 151.226769 },
    { latitude: -33.916608, longitude: 151.225906 },
    { latitude: -33.909236, longitude: 151.223378 },
    { latitude: -33.905742, longitude: 151.223943 },
    { latitude: -33.893556, longitude: 151.221775 },
    { latitude: -33.887907, longitude: 151.211884 },
    { latitude: -33.883842, longitude: 151.207682 },
    { latitude: -33.881165, longitude: 151.205331 },
    { latitude: -33.878572, longitude: 151.205604 },
    { latitude: -33.873669, longitude: 151.206940 },
    { latitude: -33.871442, longitude: 151.206919 },
    { latitude: -33.866432, longitude: 151.207046 },
    { latitude: -33.863981, longitude: 151.207484 },
    { latitude: -33.861300, longitude: 151.210038 }
  ];
const line3S=[
    'Juniors Kingsford Light Rail',
    'Kingsford Light Rail',
    'UNSW Anzac Parade Light Rail',
    'Kensington Light Rail',
    'ES Marks Light Rail',
    'Moore Park Light Rail',
    'Surry Hills Light Rail',
    'Central Chalmers Street Light Rail',
    'Haymarket Light Rail',
    'Chinatown Light Rail',
    'Town Hall Light Rail',
    'QVB Light Rail',
    'Wynyard Light Rail',
    'Bridge Street Light Rail',
    'Circular Quay Light Rail'

];
const line2S=[
    'Randwick Light Rail',
    'UNSW High Street Light Rail',
    'Wansey Road Light Rail',
    'Royal Randwick Light Rail',
    'Moore Park Light Rail',
    'Surry Hills Light Rail',
    'Central Chalmers Street Light Rail',
    'Haymarket Light Rail',
    'Chinatown Light Rail',
    'Town Hall Light Rail',
    'QVB Light Rail',
    'Wynyard Light Rail',
    'Bridge Street Light Rail',
    'Circular Quay Light Rail',
    
    
    
    

];
const line2=[
    {latitude:-33.917115,longitude:151.240545},
    {latitude:-33.916338,longitude:151.235547},
    {latitude:-33.910523,longitude:151.235232},
    {latitude:-33.90517,longitude:151.228855},
    { latitude: -33.893556, longitude: 151.221775 },
    { latitude: -33.887907, longitude: 151.211884 },
    { latitude: -33.883842, longitude: 151.207682 },
    { latitude: -33.881165, longitude: 151.205331 },
    { latitude: -33.878572, longitude: 151.205604 },
    { latitude: -33.873669, longitude: 151.206940 },
    { latitude: -33.871442, longitude: 151.206919 },
    { latitude: -33.866432, longitude: 151.207046 },
    { latitude: -33.863981, longitude: 151.207484 },
    { latitude: -33.861300, longitude: 151.210038 }
    
    
    
    

];
const line1S=['Dulwich Hill Light Rail',
    'Dulwich Grove Light Rail',
    'Arlington Light Rail',
    'Waratah Mills Light Rail',
    'Lewisham West Light Rail',
    'Taverners Hill Light Rail',
    'Marion Light Rail',
    'Hawthorne Light Rail',
    'Leichhardt North Light Rail',
    'Lilyfield Light Rail',
    'Rozelle Bay Light Rail',
    'Jubilee Park Light Rail',
    'Glebe Light Rail',
    'Wentworth Park Light Rail',
    'Fish Market Light Rail',
    'John Street Square Light Rail',
    'The Star Light Rail',
    'Pyrmont Bay Light Rail',
    'Convention Light Rail',
    'Exhibition Centre Light Rail',
    'Paddy\'s Markets Light Rail',
    'Capitol Square Light Rail',
    'Central Grand Concourse Light Rail'

];
const line1=[
    {latitude:-33.9103338135538,longitude:151.140076400731},
    {latitude:-33.905014486663,longitude:151.139105605464},
    {latitude:-33.9018332390885,longitude:151.138054746656},
    {latitude:-33.8987723113423,longitude:151.140121664717},
    {latitude:-33.8936548694679,longitude:151.143590659492},
    {latitude:-33.8893022646229,longitude:151.14521647277},
    {latitude:-33.8838567649271,longitude:151.145049865534},
    {latitude:-33.8793373228722,longitude:151.147347947732},
    {latitude:-33.874987253025,longitude:151.154504117541},
    {latitude:-33.8742313107313,longitude:151.164869618336},
    {latitude:-33.8718049782897,longitude:151.172658264273},
    {latitude:-33.8753898552469,longitude:151.17879569225},
    {latitude:-33.8772683136698,longitude:151.187410288823},
    {latitude:-33.8744279746377,longitude:151.194087210718},
    {latitude:-33.8709125059412,longitude:151.192283967672},
    {latitude:-33.8674336826443,longitude:151.192048802448},
    {latitude:-33.8673443483382,longitude:151.195198264862},
    {latitude:-33.8694044101621,longitude:151.197405424297},
    {latitude:-33.8726237862708,longitude:151.198114164108},
    {latitude:-33.8771917495554,longitude:151.199699287665},
    {latitude:-33.8793259590716,longitude:151.202634226605},
    {latitude:-33.8797455568346,longitude:151.205647079243},
    {latitude:-33.8824129971333,longitude:151.206685610356}




];
var start;
var des;
var id;
var obj;
var linePos: any[];
var polyLine: {} | null | undefined;
var lineNum: (string | undefined)[];
var startPos: import("react-native-maps").LatLng | import("react-native-maps").AnimatedRegion;
var desPos: import("react-native-maps").LatLng | import("react-native-maps").AnimatedRegion;
export class MapWrapper extends Component {

    constructor(prop: any){
        super(prop);
        start=prop.start;
        des=prop.end;
        id=prop.id;
        obj=this;
        startPos={latitude:prop.startPos[0],longitude:prop.startPos[1]};
        desPos={latitude:prop.desPos[0],longitude:prop.desPos[1]};
        switch(id){
            case '1':
                linePos=line1;
                lineNum=line1S;
                polyLine=<Polyline
                coordinates={line1}
                strokeColor="#0000FF"
                strokeWidth={2} />;
                
                break;
            case '2':
                lineNum=line2S;
                linePos=line2;
                polyLine=<Polyline
                coordinates={line2}
                strokeColor="#0000FF"
                strokeWidth={2} />;
                break;
            case '3': 
                lineNum=line3S;
                linePos=line3;
                polyLine=<Polyline
                coordinates={line3}
                strokeColor="#0000FF"
                strokeWidth={2} />;
                
                break;
        }
        
    }
    state = {
        showingInfoWindow: false,  //Hides or the shows the infoWindow
        activeMarker: {}, 
        judge:false,         //Shows the active marker upon click
        selectedPlace: {}          //Shows the infoWindow to the selected place upon a marker
        };
        onMarkerClick = (props : any, marker : any, e:any) =>
        this.setState({
          selectedPlace: props,
          activeMarker: marker,
          showingInfoWindow: true,
        });
        onLoad=()=>{
            if(this.state.judge==false) this.setState({judge:true})
        }
      onClose = (props: any) => {
        if (this.state.showingInfoWindow) {
          this.setState({
            showingInfoWindow: false,   
            activeMarker: null
          });
        }
      };
      render(){
          var markers=[];
          var dis: number[]=[];
          var i=0;
          var startIndex=0;
          var desIndex=0;
          var min=999;
          var reg=[];
          linePos.forEach(element => {
              dis.push(distance(startPos,element));
          });
          dis.forEach(element =>{
                if(element<min){
                    min=element;
                    startIndex=i;
                }
                i++;
          });
          i=0;
          dis=[];
          min=999;
          linePos.forEach(element => {
            dis.push(distance(desPos,element));
        });
            dis.forEach(element =>{
                if(element<min){
                    min=element;
                    desIndex=i;
                }
                i++;
            });
        if(startIndex>desIndex){
            var temp=startIndex;
            startIndex=desIndex;
            desIndex=temp;
        }
        for(i=startIndex;i<=desIndex;i++){
            markers.push(<Marker coordinate={linePos[i]} description={lineNum[i]} title={"Stop "+i}><Image source={require('../assets/images/marker.png')} style={{ width:20,height:30 }}/></Marker>);
            reg.push(linePos[i]);
        }
        polyLine=<Polyline
                coordinates={reg}
                strokeColor="#0000FF"
                strokeWidth={2} />;
          markers.push(<Marker coordinate={startPos}><Image source={require('../assets/images/start.png')} style={{ width:30,height:32 }}/></Marker>);
          markers.push(<Marker coordinate={desPos}><Image source={require('../assets/images/des.jpg')} style={{ width:25,height:30 }}/></Marker>);
          return (
              <MapView style={{height:500,width:500}}  initialRegion={{
                latitude: -33.926028,
                longitude: 151.231118,latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,}}>
                    {markers}
                    {polyLine}
              </MapView>
          );
      }

}
function distance(pos1: { latitude: number; longitude: number; },pos2: { latitude: number; longitude: number; }){
    return Math.sqrt(Math.pow(pos1.latitude-pos2.latitude,2)+Math.pow(pos1.longitude-pos2.longitude,2));
}