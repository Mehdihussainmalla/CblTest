import React from 'react';
import { SafeAreaView, StatusBar, View, Modal } from 'react-native';
import colors from '../styles/colors';
import Loader from './LoaderComponent';


const WrapperContainer = ({
  children,
  bgColor = colors.darkGrey,
  statusBarColor = colors.matterhorn,
  barStyle = 'light-content',
  style = {},
  isLoading='',
  withModal=''
}) => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: statusBarColor,
      }}>
      <StatusBar backgroundColor={statusBarColor} barStyle={barStyle} />
      <View style={[{ backgroundColor: bgColor, flex: 1 }, style]}>{children}</View>
      <Loader  isLoading={isLoading} withModal={withModal} />
    </SafeAreaView>
  );
};

export default React.memo(WrapperContainer);
