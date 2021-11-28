import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
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
  RadioButton,
  Button,
  TouchableHighlight,
} from 'react-native';
const Login = () => {
  // const [checked, setChecked] = useState('first');
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
        <View style={styles.fogotLogin}>
          {/* <RadioButton /> */}
          <View style={styles.txtRemember}>
            <Image
              style={styles.radioImg}
              source={require('../../assets/images/radioIcon.png')}
            />
            <Text>Keep me logged in</Text>
          </View>
          <Text style={styles.txtFogot}>Fogot password</Text>
        </View>
        <TouchableHighlight style={styles.btnLogin}>
          <Text style={styles.txtBtnLogin}>Login</Text>
        </TouchableHighlight>
        <View style={styles.lineText}>
          <Image source={require('../../assets/images/Line.png')} />
          <Text style={styles.txtLine}>Or</Text>
          <Image source={require('../../assets/images/Line.png')} />
        </View>
        <TouchableHighlight style={styles.btnLogin}>
          <Image source={require('../../assets/images/fb.png')} />
          <Text style={styles.txtBtnLogin}>Login</Text>
        </TouchableHighlight>
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
  formLogin: {
    margin: 15,
    marginBottom: 10,
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    marginBottom: 10,
    fontSize: 16,
  },
  fogotLogin: {
    margin: 20,
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  txtFogot: {
    color: '#00623B',
    fontSize: 16,
  },
  txtRemember: {
    flexDirection: 'row',
  },
  radioImg: {
    marginRight: 10,
  },
  btnLogin: {
    height: 50,
    width: 300,
    borderRadius: 100,
    backgroundColor: '#00623B',
    marginLeft: 50,
    marginRight: 50,
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  txtBtnLogin: {
    color: '#fff',
    fontSize: 18,
  },
  lineText: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  txtLine: {
    marginLeft: 10,
    marginRight: 10,
    fontSize: 20,
    color: '#00623B',
  },
});

export default Login;
