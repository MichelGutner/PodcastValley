import React from 'react';
import { View, Text } from 'react-native';
import { CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../Pages/HomeScreen/HomeScreen';
import PlayerScreen from '../Pages/PlayerScreen/PlayerScreen';

const Stack = createStackNavigator();

const Routes = () => {
  return (
      <Stack.Navigator screenOptions={{
        headerShown: false,
        cardStyleInterpolator: CardStyleInterpolators.forVerticalIOS
      }}>
        <Stack.Screen name="Home" component={HomeScreen}/>
        <Stack.Screen name='PlayerScreen' component={PlayerScreen}/>
      </Stack.Navigator>
  );
};

export default Routes;
