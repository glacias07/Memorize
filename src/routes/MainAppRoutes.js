import {View, Text} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import FoldersScreen from '../screens/FoldersScreen';
import FolderSetScreen from '../screens/FolderSetScreen';

const Stack = createNativeStackNavigator();

export default function MainAppRoutes() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name={'Home'}
          component={HomeScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={'Folders'}
          component={FoldersScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={'Folder Sets'}
          component={FolderSetScreen}
          options={{
            title: 'Folder',
            headerTintColor: 'white',
            // headerSearchBarOptions: true,
            headerStyle:{
                backgroundColor: '#303854',
            },
            headerTitleStyle:{
                fontFamily: 'trakya-sans-700'
            }
            
        }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
