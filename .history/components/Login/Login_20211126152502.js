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
            Good Morning,{' '}
            <Image
              style={styles.imgHandle}
              source={require('../../assets/images/image 33.png')}
            />
          </Text>
          <Text style={styles.txtWelcome}>Welcome back!</Text>
          <Text style={styles.txtDesc}>Starbucks Promotion</Text>
        </View>
        <View>
          <Image
            style={styles.loginImg}
            source={require('../../assets/images/pngwing 4.png')}
          />
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({});

export default Login;
