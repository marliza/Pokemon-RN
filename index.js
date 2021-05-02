import {Navigation} from 'react-native-navigation';
import {registerScreens} from './src/config/navigation';
import {Colors} from './src/styles/colors';
import {Fonts} from './src/styles/fonts';

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
      color: Colors.white,
      fontFamily: Fonts.title,
      fontSize: 28,
    },
    backButton: {
      color: Colors.white,
    },
    background: {
      color: Colors.easternBlue,
    },
  },
});
