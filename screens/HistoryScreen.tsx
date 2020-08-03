import * as React from 'react';
import { StyleSheet } from 'react-native';
import lines from '../test.json';
import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { AppRegistry, ScrollView, Image, TextInput, Picker } from 'react-native'
import GlobalContext from '../context/GlobalContext';

var start: string;
var des: string;
var obj: object;
var sortKey = 'time';
var displayList: JSX.Element[] = [];

displayList.push(<Text key='0'>Test</Text>)
displayList.push(<Text key='1'>Test2</Text>)
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
            <Text style={styles.title}>Tab One</Text>
            <TextInput placeholder="Start location" onChangeText={(text) => setStart(text)}></TextInput>
            <TextInput placeholder="end location" onChangeText={(text) => setDes(text)}></TextInput>
            <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
            <Picker onValueChange={(key) => setSortKey(key)}>
                <Picker.Item label="Time" value="time" />
                <Picker.Item label="Money" value="cost" />
            </Picker>
            <ScrollList></ScrollList>

            <EditScreenInfo path="/screens/PlannerScreen.tsx" />
        </View>
    );
}
function setSortKey(key: string) {
    sortKey = key;
    display();
}
function setStart(startT: string) {
    start = startT;
    display();

}
function setDes(desT: string) {
    des = desT;
    display();

}

function display() {
    var Li: JSX.Element[] = [];
    var reg: any[] = [];
    switch (sortKey) {
        case "time":
            reg = lines.lines.sort((a, b) => parseInt(a.duration) - parseInt(b.duration));
            break;
        case "cost":
            reg = lines.lines.sort((a, b) => parseInt(a.price) - parseInt(b.price));
            break;


    }
    reg.forEach((element) => {
        if (start == element.start && des == element.des) {
            console.log(element.arrive);
            Li.push(
                <View key={index} style={styles.seg}>
                    <Text>{"start: " + element.start}</Text>
                    <Text>{"end: " + element.des}</Text>
                    <Text>{"arrive: " + element.arrive}</Text>
                    <Text>{"seats left: " + element.seats}</Text>
                    <Text>{"cost: " + element.price}</Text>
                </View>
            );

        }
        index++;
    });
    obj.search(Li);
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
    }
});

