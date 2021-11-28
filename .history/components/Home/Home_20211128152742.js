import React from 'react';
import {Image, StyleSheet, Text, View, ScrollView} from 'react-native';
import Swiper from 'react-native-swiper';

const Home = () => {
  return (
    <>
      <ScrollView>
        <View style={styles.homePage}>
          <View style={styles.homeTop}>
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
            <Swiper
              style={styles.homeBanner}
              style={{height: 270}}
              loop
              autoplay
              dot={
                <View
                  style={{width: 8, height: 8, backgroundColor: 'red'}}></View>
              }>
              <Image
                style={styles.bannerImg}
                source={require('../../assets/images/c1.jpg')}
              />
              <Image
                style={styles.bannerImg}
                source={require('../../assets/images/c2.jpg')}
              />
              <Image
                style={styles.bannerImg}
                source={require('../../assets/images/c3.jpg')}
              />
              <Image
                style={styles.bannerImg}
                source={require('../../assets/images/c4.jpg')}
              />
            </Swiper>
          </View>
          <View style={styles.homeContent}>
            <View style={styles.bannerContent}>
              <Text style={styles.bannerTitle}>For you</Text>
              <View style={styles.bannerImgContent}>
                <Image
                  style={styles.forImg}
                  source={require('../../assets/images/bn1.png')}
                />
                <Image
                  style={styles.forImg}
                  source={require('../../assets/images/bn2.png')}
                />
              </View>
            </View>
            <View style={styles.homeNews}>
              <View style={styles.newColumn}>
                <Image />
                <Text></Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  homePage: {
    flex: 1,
    height: '100%',
    backgroundColor: '#00623B',
    position: 'relative',
  },
  homeTop: {
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
    marginTop: 20,
    borderRadius: 20,
    // padding: 20,
    height: '100%',
    // position: 'absolute',
    padding: 10,
  },
  bannerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  bannerImgContent: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  forImg: {
    height: 100,
    width: 170,
  },
  // homeBanner: {
  //   width: '100%',
  //   // height: 400,
  // },
});

export default Home;
