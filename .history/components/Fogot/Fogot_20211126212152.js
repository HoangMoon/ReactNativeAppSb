import React from 'react';
import {Text, Image, StyleSheet, View, ScrollView} from 'react-native';
const Fogot = () => {
  return (
    <>
      <ScrollView>
        <View style={styles.fogot}>
          <Image source={require('../../assets/images/logo.png')} />
          <Text style={styles.fogotTitle}>Forgot Password?</Text>
          <Text style={styles.fogotDesc}>
            Don't worry! Enter your registered email below to receive password
            instructions
          </Text>
          <Image source={require('../../assets/images/bnFogot.png')} />
        </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  fogot: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Fogot;
