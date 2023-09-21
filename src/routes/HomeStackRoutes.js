import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import FoldersScreen from '../screens/FoldersScreen';
import SetsScreen from '../screens/SetsScreen';

const Tab = createMaterialTopTabNavigator();

const HomeStackRoutes = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor: '#0a092d',
        },
        tabBarLabelStyle: {
          fontFamily: 'trakya-sans-700',
          fontSize: 16,
          textTransform: 'none',
        },
        tabBarIndicatorStyle: {
          backgroundColor: '#afb0f3',
          width: '0.4%',
        },
        tabBarItemStyle: {
          width: 'auto',
        },
        tabBarActiveTintColor: 'white',
        tabBarInactiveTintColor: '#9a99b9',
      }}>
      <Tab.Screen name="Study Sets" component={SetsScreen} />
      <Tab.Screen name="Folders" component={FoldersScreen} />
    </Tab.Navigator>
  );
};

export default HomeStackRoutes;
