import {styles} from 'dom7';
import React from 'react';
import {Image, Text, View} from 'react-native';

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
            source={require('../../assets/images/logo.png')}
          />
          <Image
            style={styles.homeBar}
            source={require('../../assets/bar.png')}
          />
        </View>
      </View>
    </>
  );
};

export default Home;
