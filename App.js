import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import HomeStackNavigator from "./components/navigators/Navigation"

export default function App() {
  return (
    <NavigationContainer>
      <HomeStackNavigator />
    </NavigationContainer>
  );
}