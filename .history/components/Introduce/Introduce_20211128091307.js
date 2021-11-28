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

const introData = [
  {
    id: 1,
    introHeading: 'Good Coffee , Good Moods',
    introDesc: `“To inspire and nurture the human spirit–one person, one cup and one
    neighborhood at a time.”`,
    introImg: require("'../../assets/images/intro1.png'"),
  },
  {
    id: 2,
    introHeading: ' Starbucks Frappuccino Work can wait',
    introDesc: `“Bring a friend and enjoy a Frappuccino. 
    Find stores in your area.”`,
    introImg: require("'../../assets/images/intro2.png'"),
  },
  {
    id: 1,
    introHeading: 'Morning begins with Tropical Splash Startbucks',
    introDesc: `“Bring the Fantasy Tail Frappuccino, or treat yourself to the boldly refreshing Peach Cloud with Jelly. “`,
    introImg: require("'../../assets/images/intro3.png'"),
  },
];

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
          source={require('../../assets/images/intro1.png')}
        />
        <View style={styles.introContent}>
          <Text style={styles.introHeading}>Good Coffee , Good Moods</Text>
          <Text style={styles.introDesc}>
            “To inspire and nurture the human spirit–one person, one cup and one
            neighborhood at a time.”
          </Text>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <View style={styles.introApp2}>
            <Text style={{fontSize: 20, fontWeight: 'bold', color: '#fff'}}>
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
            <Text style={{color: '#fff'}}>Get Started</Text>
          </View>
        </TouchableOpacity>
      </View>
    </Swiper>
  );
};

const styles = StyleSheet.create({
  wrapper: {},
  slide3: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'White',
    justifyContent: 'space-between',
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },
  introLogo: {
    marginTop: 30,
  },
  introHeading: {
    fontSize: 25,
    color: '#00623B',
  },
  introDesc: {
    marginTop: 10,
    maxWidth: 300,
    textAlign: 'center',
    fontSize: 16,
    lineHeight: 25,
  },
  introApp2: {
    height: 50,
    width: 300,
    backgroundColor: '#22A45D',
    color: '#fff',
    marginBottom: 80,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
  },
});
export default Introduce;
