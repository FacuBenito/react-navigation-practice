import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import HomeStack from './navigationStacks/HomeStack';
import SettingsStack from './navigationStacks/SettingsStack';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({

          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if(route.name === 'Home'){
              iconName = focused 
              ? 'ios-information-circle' 
              : 'ios-information-circle-outline';
            }else if(route.name === 'Settings'){
              iconName = 'ios-list';
            }

            return <Ionicons name={iconName} size={size} color={color} />
          },
          
        })}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray'
        }}
      >
        <Tab.Screen name='Home' component={HomeStack} options={{tabBarBadge: 3}}/>
        <Tab.Screen name='Settings' component={SettingsStack} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
