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
import Icon from 'react-native-vector-icons/FontAwesome5';
const image = {
  uri: 'https://images.unsplash.com/photo-1589476993333-f55b84301219?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c3RhcmJ1Y2tzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
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
                placeholder="hoang@gmail.com"
                placeholderTextColor={'#fff'}
              />
            </View>
            <View style={styles.inputSingup}>
              <View>
                <Text style={styles.txtInput}>Phone</Text>
                <Icon name="phone" />
              </View>
              <TextInput
                style={styles.input}
                placeholder="0999 888 777"
                placeholderTextColor={'#fff'}
              />
            </View>
            <View style={styles.inputSingup}>
              <Text style={styles.txtInput}>Password</Text>
              <TextInput
                style={styles.input}
                placeholder="***"
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
    color: '#000',
    fontSize: 35,
    fontWeight: '500',
    marginBottom: 20,
  },
  inputSingup: {
    width: '100%',
    marginBottom: 20,
  },
  input: {
    borderBottomWidth: 2,
    borderBottomColor: '#fff',
    width: 350,
    fontSize: 16,
  },
  txtInput: {
    color: '#fff',
    fontSize: 20,
  },
});

export default Signup;
