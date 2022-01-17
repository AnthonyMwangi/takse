import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import StyleSheet from 'react-native-extended-stylesheet';
import { HomeScreen, SplashScreen } from './src/screens';
import { globalStyles } from './src/styles/global';

StyleSheet.build(globalStyles);

const { Navigator: StackNavigator, Screen: StackScreen } =
  createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <StackNavigator
        initialRouteName="Splash"
        screenOptions={{ headerShown: false }}>
        <StackScreen name="Home" component={HomeScreen} />
        <StackScreen name="Splash" component={SplashScreen} />
      </StackNavigator>
    </NavigationContainer>
  );
};

export default App;
