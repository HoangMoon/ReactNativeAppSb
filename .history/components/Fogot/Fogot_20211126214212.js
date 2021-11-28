import React from 'react';
import {
  Text,
  Image,
  StyleSheet,
  View,
  ScrollView,
  TextInput,
  text,
} from 'react-native';
const Fogot = () => {
  return (
    <>
      <ScrollView>
        <View style={styles.fogot}>
          <Image
            style={styles.fogotLogo}
            source={require('../../assets/images/logo.png')}
          />
          <Text style={styles.fogotTitle}>Forgot Password?</Text>
          <Text style={styles.fogotDesc}>
            Don't worry! Enter your registered email below to receive password
            instructions
          </Text>
          <Image
            style={styles.fogotBn}
            source={require('../../assets/images/bnFogot.png')}
          />
        </View>
        <TextInput style={styles.input} value={text} placeholder="Email" />
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  fogot: {
    marginTop: 20,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  fogotTitle: {
    fontSize: 25,
    marginTop: 10,
    marginBottom: 15,
    color: '#00623B',
  },
  fogotDesc: {
    maxWidth: 300,
    width: '100%',
    textAlign: 'center',
    fontSize: 25,
    lineHeight: 40,
  },
  fogotBn: {
    marginTop: -50,
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
});

export default Fogot;
