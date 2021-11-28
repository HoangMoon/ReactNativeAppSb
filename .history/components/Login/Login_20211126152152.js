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
          <Text>Hoành</Text>
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
