import React from 'react';
import {Text, View, ImageBackground, StyleSheet} from 'react-native';
const image = {
  uri: 'https://images.unsplash.com/photo-1525981081253-9859eb266137?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
};
const Signup = () => {
  return (
    <>
      <ImageBackground
        source={image}
        resizeMode="cover"
        style={styles.imgBgSignup}></ImageBackground>
    </>
  );
};

const styles = StyleSheet.create({
  imgBgSignup: {
    height: '100%',
  },
});

export default Signup;
