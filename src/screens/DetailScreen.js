import React, {Component} from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import * as CONSTANT from '../Constants';
import {Colors} from '../styles/colors';
import {Fonts} from '../styles/fonts';

class DetailScreen extends Component {
  render() {
    let data = this.props.data;
    let mainImage = data.sprites.other['official-artwork'].front_default;
    const renderImage = () => {
      if (mainImage != null) {
        // load image from url
        return <Image source={{uri: mainImage}} style={styles.image} />;
      } else {
        return (
          // show placeholder image
          <Image source={CONSTANT.PLACEHOLDER_IMAGE} style={styles.image} />
        );
      }
    };
    const commaSepAbility = data.abilities
      .map(abilityObj => abilityObj.ability.name)
      .join(', ');
    const commaSepTypes = data.types
      .map(typeObj => typeObj.type.name)
      .join(', ');

    return (
      <View style={styles.containerView}>
        <View style={styles.infoView}>
          <Text style={styles.name}>{data.name}</Text>
          <View style={styles.statsInfoView}>
            <Text style={styles.statsInfoText}>{`Height: ${
              data.height / 10
            } m`}</Text>
            <Text style={styles.statsInfoText}>{`Weight: ${
              data.weight / 10
            } Kg`}</Text>
            <Text
              style={
                styles.statsInfoText
              }>{`Ability: ${commaSepAbility}`}</Text>
            <Text
              style={styles.statsInfoText}>{`Types: ${commaSepTypes}`}</Text>
          </View>
        </View>
        {renderImage()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  containerView: {
    backgroundColor: Colors.easternBlue,
    flex: 1,
    flexDirection: 'column-reverse',
    justifyContent: 'flex-end',
  },
  image: {
    width: 350,
    height: 350,
    alignSelf: 'center',
  },
  infoView: {
    backgroundColor: Colors.white,
    borderRadius: 5,
    marginTop: -40,
    width: '95%',
    alignSelf: 'center',
  },
  name: {
    color: Colors.easternBlue,
    fontSize: 40,
    fontFamily: Fonts.title,
    textTransform: 'capitalize',
    alignSelf: 'center',
    padding: 40,
  },
  statsInfoView: {
    width: '80%',
    alignSelf: 'center',
    borderRadius: 5,
    marginBottom: 20,
  },
  statsInfoText: {
    color: Colors.easternBlue,
    fontSize: 20,
    fontFamily: Fonts.text,
    textTransform: 'capitalize',
    padding: 10,
  },
});

export default DetailScreen;
