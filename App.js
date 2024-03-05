import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';

import QuranScreen from './src/QuranScreen';
import VerseDetails from './src/VerseDetails';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#007bff',
    accent: '#ff5722',
    background: '#b9b8ba',
    text: '#121111',
    surface: '#f5f5f5',
    onSurface: '#757575',
    onPrimary: '#ffffff',
    secondary: '#4caf50',
  },
};

const Stack = createStackNavigator();

export default function App() {
  return (
    <PaperProvider theme={theme}>
      <NavigationContainer>
        <View style={styles.container}>
          <Stack.Navigator
            screenOptions={{
              cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
              headerStyle: { backgroundColor: theme.colors.primary },
              headerTintColor: theme.colors.onPrimary,
              headerTitleStyle: { fontWeight: 'bold' },
              headerTitleAlign: 'center',
            }}>
            <Stack.Screen name="QuranScreen" component={QuranScreen} options={{ title: 'Al-Quran' }} />
            <Stack.Screen name="VerseDetails" component={VerseDetails} options={{ title: 'Verse Details' }} />
          </Stack.Navigator>
          <StatusBar style="auto" />
        </View>
      </NavigationContainer>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff', // Use a hardcoded value or define it outside the component if needed elsewhere
  },
});
