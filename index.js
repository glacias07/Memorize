/**
 * @format
 */

import {AppRegistry} from 'react-native';
import HomeScreen from './src/screens/HomeScreen';
import App from './App';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => HomeScreen);
