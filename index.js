/**
 * @format
 */

import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import App from './src/screens/App';
import 'react-native-get-random-values';

import Apple from './src/screens/Apple';

AppRegistry.registerComponent(appName, () => App);
