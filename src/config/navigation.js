import React from 'react';
import {Navigation} from 'react-native-navigation';
import {Provider} from 'react-redux';
import {store} from './store';
import HomeScreen from '../screens/HomeScreen';
import DetailScreen from '../screens/DetailScreen';

function WrappedComponent(Component) {
  return function inject(props) {
    const EnhancedComponent = () => (
      <Provider store={store}>
        <Component {...props} />
      </Provider>
    );
    return <EnhancedComponent />;
  };
}

// register screens for navigation
export function registerScreens() {
  Navigation.registerComponent('Home', () => WrappedComponent(HomeScreen));
  Navigation.registerComponent('Detail', () => WrappedComponent(DetailScreen));
}
