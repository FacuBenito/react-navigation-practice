import React from 'react';
import { Text, View, Button } from 'react-native'

const SettingsScreen = ({ navigation }) => {
	return(
		<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}} >
			<Text>This is the settings screen, bro!</Text>
			<Button 
				title='See details'
				onPress={() => navigation.navigate('Details')}
			/>
		</View>
	)
}

export default SettingsScreen;