import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

const Home = () => {
  return (
    <>
      <View style={styles.homePage}>
        <View style={styles.homeHeader}>
          <Image
            style={styles.homeBell}
            source={require('../../assets/images/bell.png')}
          />
          <Image
            style={styles.homeLogo}
            source={require('../../assets/images/logo1.png')}
          />
          <Image
            style={styles.homeBar}
            source={require('../../assets/images/bar.png')}
          />
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  homePage: {
    flex: 1,
    backgroundColor: '#00623B',
  },
});

export default Home;
