import React from 'react';
import {SafeAreaView, StatusBar, View} from 'react-native';
import colors from '../styles/colors';


const WrapperContainer = ({
  children,
  bgColor = colors.darkGrey,
  statusBarColor = colors.matterhorn,
  barStyle ='light-content',
  style={},
}) => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: statusBarColor,
      }}>
      <StatusBar backgroundColor={statusBarColor} barStyle={barStyle} />
      <View style={[{backgroundColor: bgColor,flex:1 },style]}>{children}</View>
    </SafeAreaView>
  );
};

export default React.memo(WrapperContainer);
