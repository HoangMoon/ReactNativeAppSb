import React from 'react';
import {Image, StyleSheet, Text, View, ScrollView} from 'react-native';

const Home = () => {
  return (
    <>
      <ScrollView>
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
          <View style={styles.homeBanner}>
            <Image
              style={styles.bannerImg}
              source={require('../../assets/images/bannerHome.jpg')}
            />
          </View>
          <View style={styles.homeContent}></View>
        </View>
      </ScrollView>
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
    alignItems: 'center',
  },
  avatarName: {
    color: '#fff',
    marginTop: 3,
    fontSize: 25,
  },
  bannerImg: {
    marginTop: 20,
    width: '100%',
    height: 250,
    borderRadius: 20,
  },
  homeContent: {
    backgroundColor: '#fff',
    width: '100%',
    height: '100%',
  },
});

export default Home;
