import React, {Component} from 'react';
import {Navigation} from 'react-native-navigation';

import {Text, StyleSheet, TouchableHighlight} from 'react-native';
import {FlatGrid} from 'react-native-super-grid';

class HomeScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      data: [],
      page: 1,
      error: null,
    };
  }

  componentDidMount() {
    // fetch the initial list of pokemons
    this.fetchPokemonList();
  }

  fetchPokemonList = () => {
    const url = 'https://pokeapi.co/api/v2/pokemon';
    this.setState({loading: true});

    // make api call to get the pokemon list
    fetch(url)
      .then(res => res.json())
      .then(res => {
        console.log(res.results);
        this.setState({
          data: res.results,
          error: res.error || null,
          loading: false,
        });
      })
      .catch(error => {
        this.setState({error, loading: false});
      });
  };

  render() {
    return (
      <FlatGrid
        itemDimension={100}
        data={this.state.data}
        style={styles.gridView}
        spacing={10}
        renderItem={({item}) => (
          <TouchableHighlight
            underlayColor="transparent"
            style={styles.itemContainer}
            onPress={() =>
              Navigation.push(this.props.componentId, {
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
            }>
            <Text style={styles.itemName}>{item.name}</Text>
          </TouchableHighlight>
        )}
      />
    );
  }
}

// navigation bar
HomeScreen.options = {
  topBar: {
    title: {
      text: 'Pokemon',
      color: 'white',
    },
  },
};

const styles = StyleSheet.create({
  gridView: {
    marginTop: 10,
    flex: 1,
  },
  itemContainer: {
    justifyContent: 'flex-end',
    borderRadius: 5,
    padding: 10,
    height: 150,
    backgroundColor: '#50A9B1',
  },
  itemName: {
    fontSize: 16,
    color: '#fff',
    fontWeight: '600',
    alignSelf: 'center',
  },
});

export default HomeScreen;
