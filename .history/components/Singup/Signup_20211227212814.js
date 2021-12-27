import React from 'react';
import {
  Text,
  View,
  ImageBackground,
  StyleSheet,
  TextInput,
  onChangeText,
  Image,
} from 'react-native';
const image = {
  uri: 'https://images.unsplash.com/photo-1577636706176-abbd9a011951?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHN0YXJidWNrc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
};
const Signup = () => {
  return (
    <>
      <ImageBackground
        source={image}
        resizeMode="cover"
        style={styles.imgBgSignup}>
        <View style={styles.contentSingup}>
          <Image
            source={require('../../assets/images/logo.png')}
            style={styles.imgLogoSingup}
          />
          <Text style={styles.headingSingup}>Đăng ký tài khoản</Text>
          <View>
            <View>
              <Text>Email</Text>
              <TextInput style={styles.input} placeholder="Email..." />
            </View>
            <View>
              <TextInput style={styles.input} placeholder="Phone" />
            </View>
            <View>
              <TextInput style={styles.input} placeholder="Password" />
            </View>
          </View>
        </View>
      </ImageBackground>
    </>
  );
};

const styles = StyleSheet.create({
  imgBgSignup: {
    height: '100%',
  },
  contentSingup: {
    height: '100%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imgLogoSingup: {
    width: 200,
    height: 300,
  },
  headingSingup: {
    color: '#fff',
    fontSize: 30,
    fontWeight: '500',
  },
});

export default Signup;
