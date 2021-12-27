import React from 'react';
import {
  Text,
  View,
  ImageBackground,
  StyleSheet,
  TextInput,
  onChangeText,
  Image,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Icon1 from 'react-native-vector-icons/MaterialCommunityIcons';

const image = {
  uri: 'https://images.unsplash.com/photo-1589476993333-f55b84301219?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c3RhcmJ1Y2tzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
};
const Signup = ({navigation}) => {
  return (
    <>
      <ImageBackground
        source={image}
        resizeMode="cover"
        style={styles.imgBgSignup}>
        <TouchableOpacity
          style={styles.iconGoback}
          onPress={() => navigation.goBack()}>
          <Icon name="angle-left" style={{color: '#fff'}} />
        </TouchableOpacity>
        <View style={styles.contentSingup}>
          <Image
            source={require('../../assets/images/logo.png')}
            style={styles.imgLogoSingup}
          />
          <Text style={styles.headingSingup}>Đăng ký tài khoản</Text>
          <View>
            <View style={styles.inputSingup}>
              <View style={styles.labelSingup}>
                <Text style={styles.txtInput}>Email</Text>
                <Icon1 name="email" style={styles.iconSingup} />
              </View>
              <TextInput
                style={styles.input}
                placeholder="hoang@gmail.com"
                placeholderTextColor={'#fff'}
              />
            </View>
            <View style={styles.inputSingup}>
              <View style={styles.labelSingup}>
                <Text style={styles.txtInput}>Phone</Text>
                <Icon name="phone" style={styles.iconSingup} />
              </View>
              <TextInput
                style={styles.input}
                placeholder="0999 888 777"
                placeholderTextColor={'#fff'}
              />
            </View>
            <View style={styles.inputSingup}>
              <View style={styles.labelSingup}>
                <Text style={styles.txtInput}>Password</Text>
                <Icon name="eye" style={styles.iconSingup} />
              </View>
              <TextInput
                style={styles.input}
                placeholder="***"
                placeholderTextColor={'#fff'}
              />
            </View>
          </View>
          <TouchableOpacity style={styles.btnSingup}>
            <Text style={styles.txtBtn}>Đăng ký</Text>
          </TouchableOpacity>
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
    // justifyContent: 'center',
    alignItems: 'center',
  },
  imgLogoSingup: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
  },
  headingSingup: {
    color: '#FF4B2B',
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
  labelSingup: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  txtInput: {
    color: '#3CD3AD',
    fontSize: 20,
    fontWeight: '400',
    marginRight: 10,
  },
  iconSingup: {
    color: '#fff',
    fontSize: 25,
  },
  btnSingup: {
    marginTop: 20,
    backgroundColor: '#f12711',
    width: '90%',
    flexDirection: 'row',
    justifyContent: 'center',
    paddingVertical: 15,
    borderRadius: 100,
  },
  txtBtn: {
    color: '#fff',
    fontSize: 18,
  },
  iconGoback: {
    margin: 15,
  },
});

export default Signup;
