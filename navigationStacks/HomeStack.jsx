import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../tabs/HomeScreen';
import DetailsScreen from '../pages/DetailsScreen';

const HomeNav = createStackNavigator();

const HomeStack = () => {
	return(
		<HomeNav.Navigator>
			<HomeNav.Screen name='Home' component={HomeScreen} />
			<HomeNav.Screen name='Details' component={DetailsScreen} />
		</HomeNav.Navigator>
	)
}

export default HomeStack;