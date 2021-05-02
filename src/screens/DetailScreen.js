import React, {Component} from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

class DetailScreen extends Component {
  render() {
    let data = this.props.data;
    let mainImage = data.sprites.other['official-artwork'].front_default;
    const renderImage = () => {
      if (mainImage != null) {
        return <Image source={{uri: mainImage}} style={styles.image} />;
      } else {
        return (
          <Image
            source={require('../assets/pokeball.png')}
            style={styles.image}
          />
        );
      }
    };
    return <View>{renderImage()}</View>;
  }
}

const styles = StyleSheet.create({
  image: {
    width: 350,
    height: 350,
    alignSelf: 'center',
  },
});

export default DetailScreen;
