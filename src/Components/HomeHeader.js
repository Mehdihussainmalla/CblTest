import {View, Text, Image, StyleSheet} from 'react-native';
import React from 'react';
import imagePath from '../constants/imagePath';
import {moderateScaleVertical} from '../styles/responsiveSize';

const HomeHeader = () => {
  return (
    <View style={Styles.container}>
      <Image style={Styles.icon} source={imagePath.icAPP} />
      <Image source={imagePath.icLOC} />
    </View>
  );
};

const Styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        height:moderateScaleVertical(50),
    },
  icon: {
    height: moderateScaleVertical(24),
    // width:moderateScaleVertical(24),
  },
});

export default HomeHeader;