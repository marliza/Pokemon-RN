import React, {Component} from 'react';
import {Navigation} from 'react-native-navigation';
import {connect} from 'react-redux';
import {
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
  Image,
  View,
} from 'react-native';
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
          <TouchableWithoutFeedback
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
            <View style={styles.content}>
              <Image
                source={{
                  uri: item.sprites.front_default,
                }}
                style={styles.image}
              />
              <Text style={styles.itemName}>{item.name}</Text>
            </View>
          </TouchableWithoutFeedback>
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
  content: {
    backgroundColor: '#50A9B1',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#50A9B1',
  },
  image: {
    height: 90,
    width: 115,
    backgroundColor: '#fff',
    borderRadius: 5,
    alignSelf: 'center',
  },
  itemName: {
    fontSize: 18,
    color: '#fff',
    fontWeight: '600',
    alignSelf: 'center',
    paddingTop: 5,
    paddingBottom: 5,
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
