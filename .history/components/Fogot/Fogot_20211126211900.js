import React from 'react';
import {Text, Image, StyleSheet, View} from 'react-native';
const Fogot = () => {
  return (
    <>
      <View style={styles.fogot}>
        <Image source={require('../../assets/images/logo.png')} />
        <Text style={styles.fogotTitle}>Forgot Password?</Text>
        <Text style={styles.fogotDesc}>
          Don't worry! Enter your registered email below to receive password
          instructions
        </Text>
        <Image source={require('../../assets/images/bnFogot.png')} />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  fogot: {
    flexDirection: 'row',
    // justifyContent: 'center',
  },
});

export default Fogot;
