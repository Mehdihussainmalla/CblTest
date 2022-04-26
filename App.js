import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Login from './src/Screens/Login/Login';

const MyComponent = () => {
  return (
    
    <View style={styles.container}>
      <Login/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2c3e50',
  },
});

export default MyComponent;
