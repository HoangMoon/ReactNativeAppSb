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
          <Text style={styles.txtDesc}>Starbucks Promotion</Text>
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
  imgHandle: {},
  loginImg: {
    width: 120,
    height: 120,
  },
  title: {
    fontSize: 20,
  },
});

export default Login;
