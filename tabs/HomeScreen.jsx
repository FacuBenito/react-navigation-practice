import React from 'react';
import { View, Text, Button } from 'react-native';

const HomeScreen = ({ navigation }) => {
	return(
		<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
			<Text>This is a home screen, bitches!</Text>
			<Button 
				title='See details'
				onPress={() => navigation.navigate('Details')}
			/>
		</View>
	)
}

export default HomeScreen;