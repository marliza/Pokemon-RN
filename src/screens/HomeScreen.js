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
import {Colors} from '../styles/colors';
import {Fonts} from '../styles/fonts';
import {Spinner} from '../components/Spinner';

class HomeScreen extends Component {
  componentDidMount() {
    // fetch the initial list of pokemons
    const url = CONSTANT.BASE_URL + CONSTANT.ENDPOINT;
    this.props.fetchPokemonList(url);
  }

  render() {
    if (this.props.isFetching) {
      return <Spinner size="large" />;
    } else {
      return (
        <FlatGrid
          itemDimension={100}
          data={this.props.pokemonList}
          style={styles.gridView}
          spacing={10}
          renderItem={({item}) => (
            <TouchableWithoutFeedback
              onPress={() =>
                Navigation.showModal({
                  animationType: 'slide-up',
                  component: {
                    name: 'Detail', // Push the screen registered with the 'Detail' key
                    passProps: {
                      data: item,
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
}

const styles = StyleSheet.create({
  gridView: {
    marginTop: 10,
    flex: 1,
  },
  content: {
    backgroundColor: Colors.easternBlue,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: Colors.easternBlue,
  },
  image: {
    height: 90,
    width: 115,
    backgroundColor: Colors.white,
    borderRadius: 5,
    alignSelf: 'center',
  },
  itemName: {
    fontSize: 18,
    textTransform: 'capitalize',
    color: Colors.white,
    fontWeight: '600',
    alignSelf: 'center',
    paddingTop: 5,
    paddingBottom: 5,
    fontFamily: Fonts.text,
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
