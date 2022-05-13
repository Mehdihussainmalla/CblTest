
import React, { Component } from 'react';
import { View,Text, StyleSheet ,Modal} from 'react-native';
import {BarIndicator} from 'react-native-indicators'
import colors from '../styles/colors';
import { height, width } from '../styles/responsiveSize';

const LoaderComponent = () => {
    return (
        <View style={styles.container}>
          <BarIndicator size={25}
          color ={colors.redB} />
        </View>
    );
};

const Loader = ({isLoading = false, withModal}) => {
    if (withModal) {
      return (
        <Modal transparent visible={isLoading}>
          <LoaderComponent />
        </Modal>
      );
    }
    if (isLoading) {
        return <LoaderComponent />;
      }
      return null;
    };
    
 

const styles = StyleSheet.create({
    container: {
      backgroundColor:colors.matterhorn,
      elevation:5,
      height:height,
      width:width,
    },
});

export default Loader;
