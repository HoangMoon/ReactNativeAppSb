import {styles} from 'dom7';
import React from 'react';
import {Image, Text, View} from 'react-native';

const Home = () => {
  return (
    <>
      <View style={styles.homePage}>
        <View style={styles.homeHeader}>
          <Image
            style={styles.homeIcon}
            source={require('../../assets/images/bell.png')}
          />
        </View>
      </View>
    </>
  );
};

export default Home;
