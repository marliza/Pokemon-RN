import {Navigation} from 'react-native-navigation';
import HomeScreen from './src/screens/HomeScreen';
import DetailScreen from './src/screens/DetailScreen';

// register screens for navigation
Navigation.registerComponent('Home', () => HomeScreen);
Navigation.registerComponent('Detail', () => DetailScreen);

// setup the navigation bar UI
Navigation.setDefaultOptions({
  topBar: {
    title: {
      color: 'white',
    },
    backButton: {
      color: 'white',
    },
    background: {
      color: '#50A9B1',
    },
  },
});
Navigation.events().registerAppLaunchedListener(async () => {
  Navigation.setRoot({
    root: {
      stack: {
        children: [
          {
            component: {
              name: 'Home',
            },
          },
        ],
      },
    },
  });
});
