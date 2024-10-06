import { DarkTheme, DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { Provider as PaperProvider, DarkTheme as PaperDarkTheme } from 'react-native-paper';

import { useColorScheme } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { TabNavigate } from './src/Navigation';
import { StackNavigate } from './src/Navigation/index';

function App() {
  const currentTheme = useColorScheme();
  return (
    <PaperProvider theme={PaperDarkTheme}>
    <NavigationContainer
      theme={currentTheme === "dark" ? DarkTheme : DefaultTheme}
    >
      <StatusBar style ="auto"/>
      <TabNavigate/>
    </NavigationContainer>
    </PaperProvider>
  );
}

export default App;