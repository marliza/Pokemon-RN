import {Navigation} from 'react-native-navigation';
import {registerScreens} from './src/config/navigation';

Navigation.events().registerAppLaunchedListener(async () => {
  registerScreens();

  Navigation.setRoot({
    root: {
      stack: {
        children: [
          {
            component: {
              name: 'Home',
              // navigation bar
              options: {
                topBar: {
                  title: {
                    text: 'Pokemon',
                    color: 'white',
                  },
                },
              },
            },
          },
        ],
      },
    },
  });
});

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
