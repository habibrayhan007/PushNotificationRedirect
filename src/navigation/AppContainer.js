import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import Home from '../screens/Home';
import DetailsScreen from '../screens/DetailsScreen';
import NavigationService from './NavigationService';

const Stack = createNativeStackNavigator();

export function AppContainer() {
    return (
        <NavigationContainer ref={(ref) => NavigationService.setTopLevelNavigator(ref)}>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="DetailsScreen" component={DetailsScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}