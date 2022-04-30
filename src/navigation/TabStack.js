import { View, Text, Image } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import React from 'react'
import navigationStrings from './navigationStrings';
import { AddScreen, Home, Notifications, Profile, SearchScreen } from '../Screens';
import colors from '../styles/colors';
import imagePath from '../constants/imagePath';
import { moderateScale, moderateVerticalScale } from 'react-native-size-matters';
const Tab = createBottomTabNavigator();

const TabStack = () => {
    return (
        <Tab.Navigator screenOptions={{
            headerShown: false, tabBarActiveTintColor: colors.redB,
            tabBarInactiveTintColor: colors.matterhorn,
            tabBarShowLabel: false,
            tabBarStyle:{
                height:moderateVerticalScale(60),
                paddingBottom:moderateVerticalScale(5),
                borderTopEndRadius:moderateScale(15),
                borderTopStartRadius:moderateScale(15),
               backgroundColor:colors.lightgrey
            }
        }}
        >
            <Tab.Screen options={{

                tabBarIcon: ({ focused }) => {
                    return (
                        <Image style={{ tintColor: focused ? colors.redB : colors.white }} source={imagePath.home_icon} />
                    )
                }
            }} name={navigationStrings.HOME} component={Home} />

            <Tab.Screen options={{
                tabBarIcon: ({ focused }) => {
                    return (
                        <Image style={{ tintColor: focused ? colors.redB : colors.white }} source={imagePath.search_icon} />
                    )
                }
            }}
                name={navigationStrings.SEARCH_SCREEN}
                component={SearchScreen} />


            <Tab.Screen options={{
                tabBarIcon: ({ focused }) => {
                    return (
                        <Image style={{ tintColor: focused ? colors.redB : colors.white }} source={imagePath.add_icon} />
                    )
                }
            }}
                name={navigationStrings.ADD_SCREEN}
                component={AddScreen} />


            <Tab.Screen options={{
                tabBarIcon: ({ focused }) => {
                    return (
                        <Image style={{ tintColor: focused ? colors.redB : colors.white }} source={imagePath.notification_icon} />
                    )
                }
            }}
                name={navigationStrings.NOTIFICATIONS}
                component={Notifications} />

            <Tab.Screen options={{
                tabBarIcon: ({ focused }) => {
                    return (
                        <Image style={{ tintColor: focused ? colors.redB : colors.white }} source={imagePath.profile_icon} />
                    )
                }
            }}
                name={navigationStrings.PROFILE}
                component={Profile} />



        </Tab.Navigator>
    )
}

export default TabStack