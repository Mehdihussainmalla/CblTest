import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Provider } from 'react-redux';
import Routes from './src/navigation/Routes';
import actions from './src/redux/actions';
import store from './src/redux/store';
import colors from './src/styles/colors';
import { getItem, getLogin } from './src/utils/utils';
import SplashScreen from 'react-native-splash-screen'

const App = () => {


  useEffect(() => {


    getLogin().then((res) => {
      console.log("get login", res) 
      actions.saveUserData(res)
    })


    getItem('intro').then((res) => {
      console.log(res, "getItem>>>res")
      if (res == null) {
        actions.Intro(true)

      } else {
        actions.Intro(res)
      }

    });

    setTimeout(() => {
      SplashScreen.hide();    

    }, 2000);


  }), []
  return (
    <Provider store={store}>

      <Routes />
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.darkGrey
  },
});

export default App;
