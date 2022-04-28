import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Provider } from 'react-redux';
import Routes from './src/navigation/Routes';
import store from './src/Redux/store';
import colors from './src/styles/colors';
 

const App = () => {
  return (
    <Provider store={store}>
    
      <Routes/>
      </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
   backgroundColor:colors.darkGrey
  },
});

export default App;
