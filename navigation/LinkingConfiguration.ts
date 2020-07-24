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
              PaymentScreen: 'two',
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
            },
          },
        },
      },
      NotFound: '*',
    },
  },
};
