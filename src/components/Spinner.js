import React from 'react';
import {StyleSheet, ActivityIndicator, View} from 'react-native';

const Spinner = ({size}) => {
  return (
    <View style={styles.spinnerStyle}>
      <ActivityIndicator size={size || 'large'} />
    </View>
  );
};

export {Spinner};

const styles = StyleSheet.create({
  spinnerStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
