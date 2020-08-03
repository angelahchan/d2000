import * as React from 'react';
import { StyleSheet } from 'react-native';
import lines from '../test.json';
import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { AppRegistry, ScrollView, Image, TextInput, Picker } from 'react-native'
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
export default function HistoryScreen() {
    const [global, setGlobal] = React.useContext(GlobalContext);
    return (
        <View style={styles.container}>
            <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
            <ScrollView style={styles.con} contentContainerStyle={{ alignItems: 'center' }} 
            >
                    {
                        global.tripHistory.map((element, index) => {
                            // cards.map(card    for card in cards:
                            return (
                                <View style={styles.seg1}>
                                    <View key={index} style={styles.seg}>
                                        
                                        <Text>{"Starttime " + element.startTime}</Text>
                                        <Text>{"Card: " + element.selectedCard.type + " card: " + element.selectedCard.cardNumber}</Text>
                                        <Text>{"Cost: " + element.cost}</Text>
                                    
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
        marginVertical: 30,
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
        alignItems: 'center',
        justifyContent: 'center',
    },

    seg1: {
        width: '400px',
        height: '200px',
        margin: 20,
        backgroundColor: '#eee',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
});

