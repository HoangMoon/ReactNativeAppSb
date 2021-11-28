import Swiper from 'react-native-swiper';
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
const Introduce = ({navigation}) => {
  return (
    <Swiper style={styles.wrapper}>
      <View style={styles.slide3}>
        <Image
          style={styles.introApp1}
          source={require('../../assets/images/intro3.png')}
        />
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <View style={styles.introApp2}>
            <Text style={{fontSize: 20, fontWeight: 'bold', color: 'black'}}>
              Get Started
            </Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.slide3}>
        <Image
          style={styles.introLogo}
          source={require('../../assets/images/logo.png')}
        />
        <Image
          style={styles.introApp1}
          source={require('../../assets/images/intro3.png')}
        />
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <View style={styles.introApp2}>
            <Text style={{fontSize: 20, fontWeight: 'bold', color: 'black'}}>
              Get Started
            </Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.slide3}>
        <Image
          style={styles.introApp1}
          source={require('../../assets/images/intro3.png')}
        />
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <View style={styles.introApp2}>
            <Text style={{fontSize: 20, fontWeight: 'bold', color: 'black'}}>
              Get Started
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </Swiper>
  );
};

const styles = StyleSheet.create({
  wrapper: {},
  // slide1: {
  //   flex: 1,
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   backgroundColor: 'White',
  // },
  // slide2: {
  //   flex: 1,
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   backgroundColor: 'White',
  // },
  slide3: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'White',
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },
  // introApp: {
  //   height: '100%',
  //   width: '100%',
  // },
  introApp2: {
    height: 50,
    width: 300,
    backgroundColor: '#22A45D',
    marginBottom: 80,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
  },
});
export default Introduce;
