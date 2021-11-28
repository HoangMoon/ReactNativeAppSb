import React from 'react';
import {Text, Image, StyleSheet, View} from 'react-native';
const Fogot = () => {
  return (
    <>
      <View style={styles.fogot}>
        <Image source={require('../../assets/images/logo.png')} />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  fogot: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
});

export default Fogot;
