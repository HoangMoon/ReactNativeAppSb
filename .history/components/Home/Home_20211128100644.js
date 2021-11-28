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
        <View style={styles.homeAvatar}>
          <View style={styles.avtarTxt}>
            <Text style={{color: '#fff', fontSize: 25}}>Good morning,</Text>
            <Text style={styles.avatarName}>Huy Hoàng</Text>
          </View>
          <Image source={require('../../assets/images/avatar.png')} />
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  homePage: {
    flex: 1,
    backgroundColor: '#00623B',
    padding: 10,
  },
  homeHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
  },
  homeAvatar: {
    marginTop: 25,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  avatarName: {
    color: '#fff',
    marginTop: 10,
    fontSize: 30,
  },
});

export default Home;
