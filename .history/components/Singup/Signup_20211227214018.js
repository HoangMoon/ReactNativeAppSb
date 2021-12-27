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
  uri: 'https://images.unsplash.com/photo-1613228097818-386b8d5f2a08?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjV8fHN0YXJidWNrc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
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
            <View style={styles.inputSingup}>
              <Text style={styles.txtInput}>Email</Text>
              <TextInput
                style={styles.input}
                placeholder="Email..."
                placeholderTextColor={'#fff'}
              />
            </View>
            <View style={styles.inputSingup}>
              <Text style={styles.txtInput}>Email</Text>
              <TextInput
                style={styles.input}
                placeholder="Phone"
                placeholderTextColor={'#fff'}
              />
            </View>
            <View style={styles.inputSingup}>
              <Text style={styles.txtInput}>Email</Text>
              <TextInput
                style={styles.input}
                placeholder="Password"
                placeholderTextColor={'#fff'}
              />
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
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imgLogoSingup: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
  },
  headingSingup: {
    color: '#fff',
    fontSize: 30,
    fontWeight: '500',
  },
  inputSingup: {
    width: '100%',
    marginBottom: 15,
  },
  input: {
    borderBottomWidth: 2,
    borderBottomColor: '#fff',
    width: 350,
  },
  txtInput: {
    color: '#fff',
    fontSize: 18,
  },
});

export default Signup;
