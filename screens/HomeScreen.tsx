import * as React from 'react';
import { StyleSheet, Platform, Button, TouchableOpacity, Image } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { Text, View, } from '../components/Themed';
import GlobalContext from '../context/GlobalContext';
import { HISTORY_STATUS } from '../constants/HistoryState ';
import { BottomTabParamList, AccountParamList } from '../types';

export default function HomeScreen(props: any) {



    const [global, setGlobal] = React.useContext(GlobalContext);

    switch (global.History) {
        case HISTORY_STATUS.YES:
            return (
                <View style={styles.container}>
                    <Text style={styles.title}>   Welcome! {global.CurrentUser.name}</Text>
                    <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
                    <Text style={styles.title1}>   Nearest Trip</Text>
                    <View style={styles.body}>
                    <View style={styles.seg1}>
                        <View style={styles.seg}>
                            <View style={styles.seg3}>
                                <Text style={styles.left} > {"Randwick Line"}</Text>
                                <Text style={styles.right}>{"$" + global.nearHistory.cost}</Text>
                            </View>

                            <View style={styles.seg2}>
                                <Image source={require('../assets/images/time.png')} />
                                <Text style={styles.grey}>{"Start at " + global.nearHistory.startTime}</Text>
                            </View>
                            <View style={styles.seg2}>
                                <Image source={require('../assets/images/start-1.png')} />
                                <Text style={styles.grey}>{"UNSW High Street"}</Text>
                            </View>

                            <View style={styles.seg2}>
                                <Image source={require('../assets/images/end.png')} />
                                <Text style={styles.grey}>{"Central Chalmers Street"}</Text>
                            </View>

                            <View style={styles.seg2}>
                                <Image source={require('../assets/images/time.png')} />
                                <Text style={styles.grey}>{"Pay by " + global.nearHistory.selectedCard.type + " card-" + global.nearHistory.selectedCard.cardNumber}</Text>
                            </View>


                        </View>
                    </View>
                    </View>
                    <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
                    <TouchableOpacity
                        onPress={() => props.navigation.navigate('HistoryScreen')}
                        style={styles.body}
                    >
                        <View style={styles.center1} >
                            <Image source={require('../assets/images/his-b.png')} />
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => props.navigation.navigate('AddNotifScreen')}
                        style={styles.body}
                    >
                        <View style={styles.center1} >
                            <Image source={require('../assets/images/a-b.png')} />
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => props.navigation.navigate('NotifListScreen')}
                        style={styles.body}
                    >
                        <View style={styles.center1} >
                            <Image source={require('../assets/images/c-b.png')} />
                        </View>
                    </TouchableOpacity>

                </View>
            );
        default: return (
            <View style={styles.container}>
            <Text style={styles.title}>   Welcome! {global.CurrentUser.name}</Text>

            <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />

                <Text style={styles.title1}>   Nearest Trip</Text>
                <View style={styles.body}>
            <View style={styles.seg1}>
                <View style={styles.seg}>
                        <View style={styles.seg3}>
                            <Text style={styles.center} > {"No nearest trip now!"}</Text>
                    </View>
                </View>
            </View>
                </View>
            
            <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
                <TouchableOpacity
                    onPress={() => props.navigation.replace('HistoryScreen')}
                    style={styles.body}
                >
                    <View style={styles.center1} >
                        <Image source={require('../assets/images/his-b.png')} />
                    </View>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => props.navigation.replace('AddNotifScreen')}
                    style={styles.body}
                >
                    <View style={styles.center1} >
                        <Image source={require('../assets/images/a-b.png')} />
                    </View>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => props.navigation.replace('NotifListScreen')}
                    style={styles.body}
                >
                    <View style={styles.center1} >
                        <Image source={require('../assets/images/c-b.png')} />
                    </View>
                </TouchableOpacity>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        flex: 1,
        alignItems: 'stretch',
        justifyContent: 'flex-start',    
    },
  body: {
      alignItems: 'center',
      justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
      marginTop: "2%",
      marginLeft:"10%",
      color: '#006666',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
   },
    left1: {
        alignItems: 'baseline',
    },
    seg1: {
        width: 300,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 12,
        borderColor: '#006666',
        borderWidth: 3,
        borderRadius: 8,
    },
    seg3: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 1,
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
        width:'50%'
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
        width:'50%'
    },
    icon: {
        marginLeft: 20,
    },
    seg: {
        width: 300,
        margin: 20,
        backgroundColor: '#fff',
        flex: 1,
        alignItems: 'stretch',
        justifyContent: 'center',
        marginTop: 12,
    },
    center: {
        textAlign: 'center',
        fontSize: 14,
        color: '#000000',
        fontWeight: '900',
        marginLeft: 20,
        marginRight: 25,
    },
    title1: {
        textAlign: 'left',
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: 25,
        color: '#006666',
    },
    a1: {
        width: '85%',
        height:'40%',
        margin: 20,
        backgroundColor: '#ff9900',
        flex: 1,
        alignItems: 'stretch',
        justifyContent: 'center',
        marginTop: 12,
    },
    center1: {
        textAlign: 'center',
        marginTop: 12,
        marginBottom: 12,
        fontSize: 20,
        color: 'white',
        fontWeight: '900',
        marginLeft: 20,
        marginRight: 25,
    },
    a2: {
        width: '85%',
        height: '40%',
        margin: 20,
        backgroundColor: '#009966',
        flex: 1,
        alignItems: 'stretch',
        justifyContent: 'center',
        marginTop: 12,
    },
    a3: {
        width: '85%',
        height: '40%',
        margin: 20,
        backgroundColor: '#0099ff',
        flex: 1,
        alignItems: 'stretch',
        justifyContent: 'center',
        marginTop: 12,
    },
  },

);
