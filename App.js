import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { PhoneLogin, Slider } from './src/Screens';
import { Login , } from './src/Screens';

const MyComponent = () => {
  return (
    
    <View style={styles.container}>
      {/* <Login/> */}
      {/* <Slider/> */}
      <PhoneLogin/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
   // backgroundColor: '#2c3e50',
  },
});

export default MyComponent;
