import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { AsyncStorage } from 'react-native';
import * as PSTATE from './constants/PaymentState';
import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';
import GlobalContext from './context/GlobalContext';
import { HISTORY_STATUS } from './constants/HistoryState ';


export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();
  const [global, setGlobal] = React.useState({
    users:[],
    cards: [],
    selectedCard:{},
    tripState:PSTATE.PAYMENT_STATUS.NOT_READY,
    tripHistory: [],
    nearHistory: {},
    CurrentUser: {},
    History: HISTORY_STATUS.NO
    notifs:[],
  });
  // users [] 

  React.useEffect(() => { // Only do this once
    AsyncStorage.getItem('global').then(global => {
      if (global !== null) {
        setGlobal(JSON.parse(global));
      }
    });
  }, []);

  function setGlobalAndStore(data: any) {
    setGlobal(data);
    AsyncStorage.setItem('global', JSON.stringify(data));
  }

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <GlobalContext.Provider value={[global, setGlobalAndStore]}>
          <Navigation colorScheme={colorScheme} />
          <StatusBar />
        </GlobalContext.Provider>
      </SafeAreaProvider>
    );
  }
}
