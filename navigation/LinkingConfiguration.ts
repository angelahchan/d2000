import * as Linking from 'expo-linking';

export default {
  prefixes: [Linking.makeUrl('/')],
  config: {
    screens: {
      Root: {
        screens: {
          Home: {
            screens: {
              HomeScreen: 'one',
            },
          },
          Payment: {
            screens: {
              PaymentScreen: 'payment',
              AddCardScreen:'addpayment',
              PaymentCompleteScreen:'paymentcomplete'
            },
          },
          Planner: {
            screens: {
              PlannerScreen: 'three',
            },
          },
          Account: {
            screens: {
              AccountScreen: 'four',
              AddNotifScreen: 'addnotif',
              HistoryScreen: 'history'
            },
          },
        },
      },
      NotFound: '*',
      Login: 'Login',
      Sign:'Sign',
    },
  },
};
