import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import HomeScreen from '../screens/HomeScreen';
import PaymentScreen from '../screens/PaymentScreen';
import AccountScreen from '../screens/AccountScreen';
import PlannerScreen from '../screens/PlannerScreen';
import AddCardScreen from '../screens/AddCardScreen';
import PaymentCompleteScreen from '../screens/PaymentCompleteScreen';
import AddNotifScreen from '../screens/AddNotifScreen';
import HistoryScreen from '../screens/HistoryScreen';
import AddSaleScreen  from '../screens/AddSaleScreen ';
import * as COL from '../constants/MainColors'
import {
    BottomTabParamList,
    HomeParamList,
    PaymentParamList,
    PlannerParamList,
    AccountParamList
} from '../types';

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      tabBarOptions={{ activeTintColor: Colors[colorScheme].tint }}>
      <BottomTab.Screen
        name="Home"
        component={HomeNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="md-home" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Payment"
        component={PaymentNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="md-card" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Planner"
        component={PlannerNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="ios-navigate" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Account"
        component={AccountNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="md-person" color={color} />,
        }}
      />
    </BottomTab.Navigator>
  );
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props: { name: string; color: string }) {
  return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const HomeStack = createStackNavigator<HomeParamList>();

function HomeNavigator() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{ headerTitle: 'Home',
        headerStyle: {
          backgroundColor:COL.COLS.MAIN_COL,
        },
        headerTitleStyle: {
          color: 'white',
        }, }}
      />
    </HomeStack.Navigator>
  );
}

const PaymentStack = createStackNavigator<PaymentParamList>();

function PaymentNavigator() {
  return (
    <PaymentStack.Navigator>
      <PaymentStack.Screen
        name="PaymentScreen"
        component={PaymentScreen}
        options={{ headerTitle: 'Payment', 
        headerStyle: {
          backgroundColor:COL.COLS.MAIN_COL,
        },
        headerTitleStyle: {
          color: 'white',
        },
      }}

      />
      <PaymentStack.Screen
        name="AddCardScreen"
        component={AddCardScreen}
        options={{ headerTitle: 'Add Payment', headerStyle: {
          backgroundColor:COL.COLS.MAIN_COL,
        },
        headerTitleStyle: {
          color: 'white',
        },}}
      />
      <PaymentStack.Screen
        name="PaymentCompleteScreen"
        component={PaymentCompleteScreen}
        options={{ headerTitle: 'Payment Complete',
        headerStyle: {
          backgroundColor:COL.COLS.MAIN_COL,
        },
        headerTitleStyle: {
          color: 'white',
        }, }}
      />
    </PaymentStack.Navigator>
  );
}

const AccountStack = createStackNavigator<AccountParamList>();

function AccountNavigator() {
    return (
        <AccountStack.Navigator>
            <AccountStack.Screen
                name="AccountScreen"
                component={AccountScreen}
                options={{ headerTitle: 'Account',
                headerStyle: {
                  backgroundColor:COL.COLS.MAIN_COL,
                },
                headerTitleStyle: {
                  color: 'white',
                }, }}
            />
            <AccountStack.Screen
                name="HistoryScreen"
                component={HistoryScreen}
                options={{
                    headerTitle: 'History',
                    headerStyle: {
                        backgroundColor: COL.COLS.MAIN_COL,
                    },
                    headerTitleStyle: {
                        color: 'white',
                    },
                }}
            />
            <AccountStack.Screen
                name="AddNotifScreen"
                component={AddNotifScreen}
                options={{
                    headerTitle: 'AddNotifScreen',
                    headerStyle: {
                        backgroundColor: COL.COLS.MAIN_COL,
                    },
                    headerTitleStyle: {
                        color: 'white',
                    },
                }}
            />
            <AccountStack.Screen
                name="AddSaleScreen"
                component={AddSaleScreen}
                options={{
                    headerTitle: 'AddSaleScreen',
                    headerStyle: {
                        backgroundColor: COL.COLS.MAIN_COL,
                    },
                    headerTitleStyle: {
                        color: 'white',
                    },
                }}
            />
        </AccountStack.Navigator>
    );
}

const PlannerStack = createStackNavigator<PlannerParamList>();

function PlannerNavigator() {
    return (
        <PlannerStack.Navigator>
            <PlannerStack.Screen
                name="PlannerScreen"
                component={PlannerScreen}
                options={{ headerTitle: 'Planner',
                headerStyle: {
                  backgroundColor:COL.COLS.MAIN_COL,
                },
                headerTitleStyle: {
                  color: 'white',
                }, }}
            />
        </PlannerStack.Navigator>
    );
}