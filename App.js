import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Info from './components/Info';
import Home from './components/Home';
import Details from './components/Details';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name='home'
          component={ Home }
          options={{ title: null }}
        />
        <Stack.Screen
          name='info'
          component={ Info }
          options={{ title: null }}
        />
        <Stack.Screen
          name='details'
          component={ Details }
          options={{ title: null }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
