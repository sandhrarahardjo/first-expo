import React from "react";
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import Ionicons from 'react-native-vector-icons/Ionicons';

import HomeScreen from './screens/HomeScreen'
import ProfileScreen from './screens/ProfileScreen'
import SettingsScreen from './screens/SettingsScreen'

const homeName = 'Home';
const profileName = 'Profile';
const settingsName = 'Settings';

const Tab = createBottomTabNavigator();

export default function MainContainer(){
  return(
    <NavigationContainer>
      <Tab.Navigator
      initialRouteName={homeName}
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;
          let rn = route.name;
          
          if (rn === homeName) {
            iconName = focused ? 'home' : 'home-outline';
          } else if (rn === profileName){
            iconName = focused ? 'person' : 'person-outline';
          } else if (rn === settingsName){
            iconName = focused ? 'settings' : 'settings-outline';
          }
          
          return <Ionicons name={iconName} size={size} color={color}/>
        },
      })}
      
      tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'grey',
        labelStyle: {paddingBottom: 10, fontSize: 10},
        style: {padding: 10, height: 70}
      }}
      > 
        <Tab.Screen name={homeName} component={HomeScreen}/>
        <Tab.Screen name={profileName} component={ProfileScreen}/>
        <Tab.Screen name={settingsName} component={SettingsScreen}/>
      </Tab.Navigator>
    </NavigationContainer>
  )
}