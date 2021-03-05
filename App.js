import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import HomeStack from './navigationStacks/HomeStack';
import SettingsStack from './navigationStacks/SettingsStack';
import UserScreen from './tabs/UserScreen';
import TeamScreen from './tabs/TeamScreen';
import CreateScreen from './tabs/CreateScreen';

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
            }else if(route.name === 'User'){
              iconName = 'person-sharp'
            }else if(route.name === 'Team'){
              iconName = 'people-sharp'
            }else if(route.name === 'Create'){
              iconName = 'ios-add-circle-sharp'
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
        <Tab.Screen name='Create' component={CreateScreen} />
        <Tab.Screen name='Team' component={TeamScreen} />
        <Tab.Screen name='User' component={UserScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
