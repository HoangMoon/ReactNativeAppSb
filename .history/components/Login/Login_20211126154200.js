import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image,
} from 'react-native';
const Login = () => {
  return (
    <>
      <View style={styles.content}>
        <View style={styles.info}>
          <Text style={styles.title}>
            Good Morning,
            <Image
              style={styles.imgHandle}
              source={require('../../assets/images/handleImg.png')}
            />
          </Text>
          <Text style={styles.txtWelcome}>Welcome back!</Text>
          <Text style={styles.txtDesc}>
            <Text style={styles.txtSta}>Starbucks</Text> Promotion
          </Text>
        </View>
        <View style={styles.img}>
          <Image
            style={styles.loginImg}
            source={require('../../assets/images/logo.png')}
          />
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  content: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 15,
  },
  imgHandle: {
    width: 50,
    height: 50,
  },
  loginImg: {
    width: 100,
    height: 100,
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'black',
  },
  txtWelcome: {
    marginBottom: 10,
    fontSize: 20,
  },
  txtSta: {
    color: '#00623B',
  },
  txtDesc: {},
});

export default Login;
