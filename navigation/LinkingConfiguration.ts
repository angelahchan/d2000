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

                  AddNotifScreen: 'addnotif',
                  NotifListScreen: 'notifs',
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
              AddSaleScreen: 'sale',
              PassScreen:'pass'
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
