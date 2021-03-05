import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SettingsScreen from '../tabs/SettingsScreen';
import DetailsScreen from '../pages/DetailsScreen';

const SettingsNav = createStackNavigator();

const SettingsStack = () => {
	return(
		<SettingsNav.Navigator>
			<SettingsNav.Screen name='Settings' component={SettingsScreen} />
			<SettingsNav.Screen name='Details' component={DetailsScreen} />
		</SettingsNav.Navigator>
	)
}

export default SettingsStack;
