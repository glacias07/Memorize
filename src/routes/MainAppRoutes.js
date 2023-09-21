import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import FoldersScreen from '../screens/FoldersScreen';
import FolderSetScreen from '../screens/FolderSetScreen';
import HomeStackRoutes from './HomeStackRoutes';
import LearnFlashcardsScreen from '../screens/LearnFlashcardsScreen';

const Stack = createNativeStackNavigator();

export default function MainAppRoutes() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name={'HomeStack'}
          component={HomeStackRoutes}
          options={{
            title: 'Memorize',
            headerTitleStyle: {
              fontFamily: 'trakya-sans-900',
              fontSize: 24,
              color: 'white',
            },
            headerStyle: {
              backgroundColor: '#0a092d',
            },
          }}
        />
        <Stack.Screen
          name={'Folder Sets'}
          component={FolderSetScreen}
          options={{
            title: 'Folder',
            headerTitleStyle: {
              fontFamily: 'trakya-sans-700',
              fontSize: 20,
              color: 'white',
            },
            headerStyle: {
              backgroundColor: '#303854',
            },
            headerTintColor: 'white',
          }}
        />
        <Stack.Screen
          name={'Learn Flashcards'}
          component={LearnFlashcardsScreen}
          options={{
            title: 'Folder',
            headerTitleStyle: {
              fontFamily: 'trakya-sans-700',
              fontSize: 20,
              color: 'white',
            },
            headerStyle: {
              backgroundColor: '#303854',
            },
            headerTintColor: 'white',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
