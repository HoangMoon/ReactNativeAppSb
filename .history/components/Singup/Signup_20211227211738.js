import React from 'react';
import {
  Text,
  View,
  ImageBackground,
  StyleSheet,
  TextInput,
  onChangeText,
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
          <Text>Đăng ký tài khoản</Text>
          <View>
            <TextInput style={styles.input} />
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
});

export default Signup;
