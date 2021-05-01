import React, {Component} from 'react';
import {Navigation} from 'react-native-navigation';
import {connect} from 'react-redux';
import {Text, StyleSheet, TouchableHighlight} from 'react-native';
import {FlatGrid} from 'react-native-super-grid';
import {fetchPokemonList} from '../actions/PokemonActions';
import * as CONSTANT from '../Constants';

class HomeScreen extends Component {
  componentDidMount() {
    // fetch the initial list of pokemons
    const url = CONSTANT.BASE_URL + CONSTANT.ENDPOINT;
    this.props.fetchPokemonList(url);
  }

  render() {
    return (
      <FlatGrid
        itemDimension={100}
        data={this.props.pokemonList}
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

const mapStateToProps = ({pokemonData}) => {
  const {pokemonList, error, isFetching} = pokemonData;
  return {
    pokemonList,
    error,
    isFetching,
  };
};

export default connect(mapStateToProps, {fetchPokemonList})(HomeScreen);
