import React from 'react';
import {View, Text, Button} from 'react-native';
import {Navigation} from 'react-native-navigation';

const HomeScreen = props => {
  return (
    <View>
      <Text>Hello Home</Text>
      <Button
        title="Show Detail Screen"
        onPress={() =>
          Navigation.push(props.componentId, {
            component: {
              name: 'Detail', // Push the screen registered with the 'Detail' key
              options: {
                // Optional options object to configure the screen
                topBar: {
                  title: {
                    text: 'DetailScreen', // Set the TopBar title of the new Screen
                  },
                },
              },
            },
          })
        }
      />
    </View>
  );
};

// navigation bar
HomeScreen.options = {
  topBar: {
    title: {
      text: 'Pokemon',
      color: 'white',
    },
  },
};

export default HomeScreen;
