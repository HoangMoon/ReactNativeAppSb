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

// dây là cục data của e
const introData = [
  {
    idT: 1,
    introHeading: 'Cà phê ngon, tâm trạng tốt',
    introDesc: `“Không chỉ là cà phê. Đó là Starbucks.”`,
    introImg: require('../../assets/images/intro1.png'),
  },
  {
    idT: 2,
    introHeading: 'Starbucks Frappuccino. Công việc có thể chờ đợi.',
    introDesc: `“Kết Thêm bạn bè và cùng ghưởng thức Frappuccino nhé!!!-
    Tìm cửa hàng trong khu vực của bạn.”`,
    introImg: require('../../assets/images/bn4.png'),
  },
  {
    idT: 3,
    introHeading: 'Hãy bắt đầu ngày mới với một Tropical Splash Startbucks',
    introDesc: `“Cà phê truyền cảm hứng. “`,
    introImg: require('../../assets/images/intro3.png'),
  },
];

const Introduce = ({navigation}) => {
  return (
    <Swiper style={styles.wrapper}>
      {introData.map((item, index) => (
        <React.Fragment key={index}>
          <View style={styles.slide3}>
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
        </React.Fragment>
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
