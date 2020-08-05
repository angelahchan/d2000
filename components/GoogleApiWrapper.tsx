import { Map, GoogleApiWrapper, InfoWindow, Marker, Polyline } from 'google-maps-react';
import React, { Component } from 'react';
import { View } from './Themed';
import { SlideFromRightIOS } from '@react-navigation/stack/lib/typescript/src/TransitionConfigs/TransitionPresets';
const mapStyles = {
    width: '500px',
    height: '500px'
};
const line3 = [
    { lat: -33.924834, lng: 151.229151 },
    { lat: -33.920777, lng: 151.226769 },
    { lat: -33.916608, lng: 151.225906 },
    { lat: -33.909236, lng: 151.223378 },
    { lat: -33.905742, lng: 151.223943 },
    { lat: -33.893556, lng: 151.221775 },
    { lat: -33.887907, lng: 151.211884 },
    { lat: -33.883842, lng: 151.207682 },
    { lat: -33.881165, lng: 151.205331 },
    { lat: -33.878572, lng: 151.205604 },
    { lat: -33.873669, lng: 151.206940 },
    { lat: -33.871442, lng: 151.206919 },
    { lat: -33.866432, lng: 151.207046 },
    { lat: -33.863981, lng: 151.207484 },
    { lat: -33.861300, lng: 151.210038 }
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
    {lat:-33.917115,lng:151.240545},
    {lat:-33.916338,lng:151.235547},
    {lat:-33.910523,lng:151.235232},
    {lat:-33.90517,lng:151.228855},
    { lat: -33.893556, lng: 151.221775 },
    { lat: -33.887907, lng: 151.211884 },
    { lat: -33.883842, lng: 151.207682 },
    { lat: -33.881165, lng: 151.205331 },
    { lat: -33.878572, lng: 151.205604 },
    { lat: -33.873669, lng: 151.206940 },
    { lat: -33.871442, lng: 151.206919 },
    { lat: -33.866432, lng: 151.207046 },
    { lat: -33.863981, lng: 151.207484 },
    { lat: -33.861300, lng: 151.210038 }
    
    
    
    

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
    {lat:-33.9103338135538,lng:151.140076400731},
    {lat:-33.905014486663,lng:151.139105605464},
    {lat:-33.9018332390885,lng:151.138054746656},
    {lat:-33.8987723113423,lng:151.140121664717},
    {lat:-33.8936548694679,lng:151.143590659492},
    {lat:-33.8893022646229,lng:151.14521647277},
    {lat:-33.8838567649271,lng:151.145049865534},
    {lat:-33.8793373228722,lng:151.147347947732},
    {lat:-33.874987253025,lng:151.154504117541},
    {lat:-33.8742313107313,lng:151.164869618336},
    {lat:-33.8718049782897,lng:151.172658264273},
    {lat:-33.8753898552469,lng:151.17879569225},
    {lat:-33.8772683136698,lng:151.187410288823},
    {lat:-33.8744279746377,lng:151.194087210718},
    {lat:-33.8709125059412,lng:151.192283967672},
    {lat:-33.8674336826443,lng:151.192048802448},
    {lat:-33.8673443483382,lng:151.195198264862},
    {lat:-33.8694044101621,lng:151.197405424297},
    {lat:-33.8726237862708,lng:151.198114164108},
    {lat:-33.8771917495554,lng:151.199699287665},
    {lat:-33.8793259590716,lng:151.202634226605},
    {lat:-33.8797455568346,lng:151.205647079243},
    {lat:-33.8824129971333,lng:151.206685610356}




];
var start:string;
var des:string;
var segment=[];
var geoStart;
var geoEnd;
var id:any;
var polyLine:any;
var obj=null;
var dis=[];
var dis2=[];
var index=0;
var index2=0;
var lineNum=[];
var line=[];
var linePos=[];
var startStation=0;
var endStation=15;
var startS=999;
        var endS=999;
export class MapContainer extends Component {
    constructor(prop){
        super(prop);
        start=prop.start;
        des=prop.end;
        id=prop.id;
        obj=this;
        switch(id){
            case '1':
                linePos=line1;
                lineNum=line1S;
                polyLine=<Polyline
                path={line1}
                strokeColor="#0000FF"
                strokeOpacity={0.8}
                strokeWeight={2} />;
                
                break;
            case '2':
                lineNum=line2S;
                linePos=line2;
                polyLine=<Polyline
                path={line2}
                strokeColor="#0000FF"
                strokeOpacity={0.8}
                strokeWeight={2} />;
                break;
            case '3': 
                lineNum=line3S;
                linePos=line3;
                polyLine=<Polyline
                path={line3}
                strokeColor="#0000FF"
                strokeOpacity={0.8}
                strokeWeight={2} />;
                break;
        }
        
    }
    state = {
    showingInfoWindow: false,  //Hides or the shows the infoWindow
    activeMarker: {}, 
    judge:false,         //Shows the active marker upon click
    selectedPlace: {}          //Shows the infoWindow to the selected place upon a marker
    };
    onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true,
    });
    onLoad=()=>{
        if(this.state.judge==false) this.setState({judge:true})
    }
  onClose = props => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,   
        activeMarker: null
      });
    }
  };
  
    render(){
        segment=[];
        var service = new google.maps.DistanceMatrixService();
        service.getDistanceMatrix(
            {
                origins: [start,des],
                destinations: lineNum,
                travelMode: 'DRIVING',
            }, callback);
            var min=999;
        for(var j=0;j<index;j++){
            if(parseFloat(dis[j].split('k')[0])<min) {
                min=parseFloat(dis[j].split('k')[0]);
                startS=j;
            }
        }
        min=999;
        for(var j=0;j<index2;j++){
            if(parseFloat(dis2[j].split('k')[0])<min) {
                min=parseFloat(dis2[j].split('k')[0]);
                endS=j;
                
            }

        }
        line=[];
        if(startS>endS){
            var reg=startS;
            startS=endS;
            endS=reg;
        }
        for(var i=startS;i<=endS;i++){
            line.push(linePos[i]);
            segment.push(<Marker key={i} onClick={this.onMarkerClick}
                name={lineNum[i]}
                position={linePos[i]}
            />);

        }
        var geocoder = new google.maps.Geocoder();
        
        geocoder.geocode( { 'address': start}, function(results, status) {
            if (status == 'OK') {
              geoStart=results[0].geometry.location
              
            } else {
              console.log('Geocode was not successful for the following reason: ' + status);
            }});
        segment.push(<Marker key={'start'} onClick={this.onMarkerClick}
            name={'start'}
            position={geoStart}
            icon={{scaledSize: new this.props.google.maps.Size(30, 30),
                url: require("../assets/images/start.png")}}
        />);
        geocoder.geocode( { 'address': des}, function(results, status) {
            if (status == 'OK') {
              geoEnd=results[0].geometry.location
              
            } else {
              alert('Geocode was not successful for the following reason: ' + status);
            }});
        segment.push(<Marker key={'end'} onClick={this.onMarkerClick}
            name={'destination'}
            position={geoEnd}
            icon={{scaledSize: new this.props.google.maps.Size(30,30 ),
                url: require("../assets/images/des.jpg")}}
        />);
        
        polyLine=<Polyline
                path={line}
                strokeColor="#0000FF"
                strokeOpacity={0.8}
                strokeWeight={2} />;
        return(<View>
    <Map
        google={this.props.google}
        zoom={14}
        style={mapStyles}
        initialCenter={{
        lat: -33.926028,
        lng: 151.231118
        }}
    >
        {polyLine}
        {segment}
        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}
          onClose={this.onClose}
        >
          <div>
            <h4>{this.state.selectedPlace.name}</h4>
          </div>
        </InfoWindow>
        
    </Map>
    </View>);
    }

}
function execute(){
    obj.onLoad();
}
function callback(response, status) {
    index=0;
    index2=0;
    dis=[];
    dis2=[];
    if (status == 'OK') {
        var origins = response.originAddresses;
        var destinations = response.destinationAddresses;
    
        for (var i = 0; i < origins.length; i++) {
            var results = response.rows[i].elements;
            for (var j = 0; j < results.length; j++) {
                
                var element = results[j];
                if(element.distance==undefined) continue;
                var distance = element.distance.text;
                var duration = element.duration.text;
                var from = origins[i];
                var to = destinations[j];
                if(i==0){
                    index++;
                    dis.push(distance);
                }
                else {
                    index2++;
                    dis2.push(distance);
                }
                
            }
        }
        
    }
    execute();
}
  
export default GoogleApiWrapper({
apiKey: 'AIzaSyDqpiTRrCTxzxAa-SHngMalqjT4CNcfo4o'
})(MapContainer);