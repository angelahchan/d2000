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
                  HistoryScreen: 'history',
                  AddSaleScreen: 'sale',
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
              AddNotifScreen:'addnotif',
              NotifListScreen:'notifs'
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
