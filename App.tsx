import 'react-native-gesture-handler';
import React from 'react';
import RootStackNavigation from './src/navigation/RootStackNavigation';
import { Provider } from 'react-redux';
import store from './src/slice/index';
export default function App() {
  return (
    <Provider store={store}>
      <RootStackNavigation />
    </Provider>
  );
}
