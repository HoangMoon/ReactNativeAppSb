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
    introImg: require('../../assets/images/intro1.png'),
  },
  {
    id: 2,
    introHeading: ' Starbucks Frappuccino Work can wait',
    introDesc: `“Bring a friend and enjoy a Frappuccino. 
    Find stores in your area.”`,
    introImg: require('../../assets/images/bn4.png'),
  },
  {
    id: 3,
    introHeading: 'Morning begins with Tropical Splash Startbucks',
    introDesc: `“Bring the Fantasy Tail Frappuccino, or treat yourself to the boldly refreshing Peach Cloud with Jelly. “`,
    introImg: require('../../assets/images/intro3.png'),
  },
];

const Introduce = ({navigation}) => {
  return (
    <Swiper style={styles.wrapper}>
      {introData.map((item, index) => (
        <>
          <View style={styles.slide3} key={item.id}>
            <Image
              style={styles.introLogo}
              style={{resizeMode: 'contain'}}
              source={require('../../assets/images/logo.png')}
            />
            <Image style={styles.introApp1} source={item.introImg} />
            <View style={styles.introContent}>
              <Text style={styles.introHeading}>{item.introHeading}</Text>
              <Text style={styles.introDesc}>{item.introDesc}</Text>
            </View>
            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
              <View style={styles.introApp2}>
                <Text style={{fontSize: 20, fontWeight: 'bold', color: '#fff'}}>
                  Get Started
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </>
      ))}
    </Swiper>
  );
};

const styles = StyleSheet.create({
  wrapper: {},
  slide3: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: 'White',
    justifyContent: 'center',
    justifyContent: 'space-between',
    textAlign: 'center',
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
    maxWidth: 300,
    textAlign: 'center',
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
  introContent: {
    textAlign: 'center',
  },
});
export default Introduce;
