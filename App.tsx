import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, View, StatusBar } from 'react-native';
import { Background } from './src/Components/background';
import PlayerScreen from './src/Pages/PlayerScreen/PlayerScreen';
import Routes from './src/Routes/Routes';

export default function App() {
  return (
    <NavigationContainer>
        <View style={styles.container}>
          <StatusBar 
          barStyle="ligth-content"
          backgroundColor="transparent" 
          translucent 
        />
          <Routes />
        </View>
    </NavigationContainer>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#8257E5',
  },
});
