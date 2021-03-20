import 'react-native-gesture-handler';
import React from 'react';
import RootNavigation from './src/navigation/RootNavigation';
import { Provider } from 'react-redux';
import { store } from './src/slice/index';
export default function App() {
  return (
    <Provider store={store}>
      <RootNavigation />
    </Provider>
  );
}
