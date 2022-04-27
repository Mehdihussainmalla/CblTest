import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Routes from './src/navigation/Routes';
import colors from './src/styles/colors';

const MyComponent = () => {
  return (
    
    
      <Routes/>
    
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

export default MyComponent;
