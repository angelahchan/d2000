import * as React from 'react';
import { StyleSheet } from 'react-native';
import lines from '../test.json';
import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { AppRegistry, ScrollView, Image, TextInput, Picker } from 'react-native'
import {  AsyncStorage, Button,  TouchableOpacity } from 'react-native';
import GlobalContext from '../context/GlobalContext';

var obj: object;
var displayList: JSX.Element[] = [];

class ScrollList extends React.Component {
    constructor(state: []) {
        super(state);
        obj = this;
        this.state = { innerList: displayList }
    }
    search(li: []) {
        this.setState({ innerList: li });
    }

    render() {
        return (
            <ScrollView style={styles.con} contentContainerStyle={{ alignItems: 'center' }}>
                {this.state.innerList.map(function (ele: React.ReactNode) { index++; return <Text key={index}>{ele}</Text> })}
            </ScrollView>
        );
    }
}

var index = 2;
export default function HistoryScreen(props: any) {
    const [global, setGlobal] = React.useContext(GlobalContext);
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => props.navigation.replace('HomeScreen')} style={styles.link}>
                <Text style={styles.linkText}>back home</Text>
            </TouchableOpacity>
            <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
            <ScrollView style={styles.con} contentContainerStyle={{ alignItems: 'center' }} 
            >
                    {
                        global.tripHistory.map((element, index) => {
                            // cards.map(card    for card in cards:
                            return (
                                <View style={styles.seg1}>
                                    <View key={index} style={styles.seg}>
                                        <View key={index} style={styles.seg3}>
                                            <Text style={styles.left} > {"Randwick Line"}</Text>
                                            <Text style={styles.right}>{"$" + element.cost}</Text>
                                        </View>


                                        <View key={index} style={styles.seg2}>
                                            <img src={require('../assets/images/time.png')} />
                                            <Text style={styles.grey}>{"Start at " + element.startTime}</Text>
                                        </View>
                                        <View key={index} style={styles.seg2}>
                                            <img src={require('../assets/images/start.png')} />
                                            <Text style={styles.grey}>{"UNSW High Street"}</Text>
                                        </View>

                                        <View key={index} style={styles.seg2}>
                                            <img src={require('../assets/images/end.png')} />
                                            <Text style={styles.grey}>{"Central Chalmers Street"}</Text>
                                        </View>

                                        <View key={index} style={styles.seg2}>
                                            <img src={require('../assets/images/time.png')} />
                                            <Text style={styles.grey}>{"Pay by " + element.selectedCard.type + " card-" + element.selectedCard.cardNumber}</Text>
                                        </View>
                                        
                                        
                                        
                                    
                                    </View>
                                </View>
                            );
                        })
                    }

            </ScrollView>
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
        marginVertical: 15,
        height: 1,
        width: '80%',
    },
    con: {
        backgroundColor: '#eee',
        width: '80%',
    },
    seg: {
        width: '300px',
        margin: 20,
        backgroundColor: '#fff',
        flex: 1,
        alignItems: 'stretch',
        justifyContent: 'center',
        marginTop: 12,
    },

    seg1: {
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
    icon: {
        marginLeft: 20,
    },
    linkText: {
        fontSize: 16,
        color: '#006666'
    }
});

