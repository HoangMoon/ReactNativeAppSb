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
  TextInput,
  onChangeText,
  value,
  text,
  onChangeNumber,
  placeholder,
  number,
} from 'react-native';
const Login = () => {
  return (
    <>
      <ScrollView>
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
        <View style={styles.bannerLogin}>
          <Image source={require('../../assets/images/banner1.png')} />
          <Image source={require('../../assets/images/banner.png')} />
          <Image source={require('../../assets/images/banner2.png')} />
        </View>
        <View style={styles.formLogin}>
          <TextInput style={styles.input} value={text} placeholder="Email" />
          <TextInput style={styles.input} value={text} placeholder="Password" />
        </View>
      </ScrollView>
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
    fontSize: 22,
  },
  txtSta: {
    color: '#00623B',
    fontSize: 18,
    fontWeight: 'bold',
  },
  bannerLogin: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

export default Login;
