import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { LogBox, StatusBar, StyleSheet, View } from 'react-native';
import Routes from './src/Routes/Routes';
import { Theme } from './Themes/colors';

LogBox.ignoreLogs([
  "[react-native-gesture-handler] Seems like you\'re using an old API with gesture components, check out new Gestures system!",
]);

export default function App() {
  return (
    <NavigationContainer>
      <View style={styles.container}>
        <StatusBar barStyle="ligth-content" backgroundColor="transparent" translucent />
        <Routes />
      </View>
    </NavigationContainer>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Theme.color.black,
  },
});
