import React from 'react';
import {SafeAreaView, StatusBar, View} from 'react-native';
import colors from '../styles/colors';

import {moderateScale, moderateScaleVertical} from '../styles/responsiveSize';

// import strings from '../constants/lang';

const WrapperContainer = ({
  children,
  bgColor = colors.white,
  statusBarColor = colors.white,
  barStyle = 'dark-content',
  style={},
}) => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: statusBarColor,
      }}>
      <StatusBar backgroundColor={statusBarColor} barStyle={barStyle} />
      <View style={[{backgroundColor: bgColor, flex: 1},style]}>{children}</View>
    </SafeAreaView>
  );
};

export default React.memo(WrapperContainer);
