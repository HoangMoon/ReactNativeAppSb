import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
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
  TouchableOpacity,
  Alert,
} from 'react-native';
const Login = ({navigation}) => {
  // const [checked, setChecked] = useState('first');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isPasswordEyes, setPasswordEyes] = useState(true);
  const handleLogin = () => {
    if (email === 'hoang0508' && password === '123') {
      Alert.alert('Đăng nhập thành công!');
      navigation.navigate('HomeTab');
    } else {
      // Alert('Đăng nhập tài khoản thất bại!');
      Alert.alert('Đăng nhập thất bại');
    }
  };
  return (
    <View style={{backgroundColor: '#fff'}}>
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
            <Text style={styles.txtWelcome}>Chào mừng bạn trở lại !</Text>
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
          <TextInput
            style={styles.input}
            onChangeText={val => setEmail(val)}
            placeholder="Email"
          />
          <View style={styles.inputPassEye}>
            <TextInput
              style={styles.input}
              onChangeText={val => setPassword(val)}
              placeholder="Password"
              style={{width: '80%', fontSize: 20}}
              setPasswordEyes={isPasswordEyes}
            />
            <TouchableOpacity
              onPress={() => {
                setPasswordEyes(prev => !prev);
              }}>
              <Icon name={isPasswordEyes ? 'eye-slash' : 'eye'} size={20} />
            </TouchableOpacity>
          </View>
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
          <TouchableOpacity>
            <Text
              style={styles.txtFogot}
              onPress={() => navigation.navigate('Fogot')}>
              Quên mật khẩu
            </Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.btnLogin} onPress={handleLogin}>
          <Text style={styles.txtBtnLogin}>Đăng nhập</Text>
        </TouchableOpacity>
        <View style={styles.lineText}>
          <Image source={require('../../assets/images/Line.png')} />
          <Text style={styles.txtLine}>Or</Text>
          <Image source={require('../../assets/images/Line.png')} />
        </View>
        <View style={styles.btnLogin} backgroundColor="#26a0da">
          <View style={styles.imgSocial}>
            <Image
              style={styles.imgSc}
              source={require('../../assets/images/fb.png')}
            />
          </View>
          <Text style={styles.txtBtnLogin}>Facebook</Text>
        </View>
        <View style={styles.btnLogin} backgroundColor="#ff0000">
          <View style={styles.imgSocial}>
            <Image
              style={styles.imgSc}
              source={require('../../assets/images/gg.png')}
            />
          </View>
          <Text style={styles.txtBtnLogin}>Google</Text>
        </View>
        <View style={styles.txtAcount}>
          <Text style={styles.txtDon}>Bạn chưa có tài khoản?</Text>
          <Text
            style={styles.txtSignup}
            onPress={() => navigation.navigate('Signup')}>
            Đăng ký ngay
          </Text>
        </View>
      </ScrollView>
    </View>
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
    resizeMode: 'contain',
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
    fontSize: 20,
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
    position: 'relative',
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
  imgSocial: {
    position: 'absolute',
    left: 20,
  },
  txtAcount: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 15,
    marginBottom: 25,
  },
  txtDon: {
    fontSize: 18,
  },
  txtSignup: {
    fontSize: 16,
    marginLeft: 5,
    color: '#00623B',
  },
  inputPassEye: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
  },
});

export default Login;
