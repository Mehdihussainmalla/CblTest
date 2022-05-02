import {View, Text, Image, StyleSheet} from 'react-native';
import React from 'react';
import imagePath from '../constants/imagePath';
import {moderateScaleVertical} from '../styles/responsiveSize';

const HomeHeader = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.icon} source={imagePath.icAPP} />
      <Image style={styles.icon2} source={imagePath.icLOC} />
    </View>
  );
};

const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        height:moderateScaleVertical(50),
    },
  icon: {
    marginLeft:moderateScaleVertical(20),
    height: moderateScaleVertical(24),
  },
  icon2:{marginRight:  moderateScaleVertical(23)
  }
});

export default HomeHeader;