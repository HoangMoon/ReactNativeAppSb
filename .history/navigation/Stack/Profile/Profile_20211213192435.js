import React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  View,
  ScrollView,
  TextInput,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Icon1 from 'react-native-vector-icons/Feather';
// import {NavigationContainer} from '@react-navigation/native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import ProfileCart from './ProfileCart';
import ProfileInfo from './ProfileInfo';
const Tab = createMaterialTopTabNavigator();

const imageBg = require('../../../assets/images/profileb.jpg');

const Profile = () => {
  return (
    <>
      <ScrollView>
        <View style={styles.profileApp}>
          <ImageBackground source={imageBg} style={styles.profileHeader}>
            <View style={styles.profileTk}>
              <Image
                style={styles.avatarProfile}
                source={require('../../../assets/images/avatarb.jpg')}
              />
              <View style={styles.profileInfo}>
                <Text style={styles.profileInfoName}>Hoang0508</Text>
                <View style={styles.profileTV}>
                  <Text style={styles.txtTv}>Thành viên</Text>
                  <Icon style={styles.iconChev} name="chevron-right" />
                </View>
                <View style={styles.profileFollow}>
                  <Text style={styles.txtFollow}>Lượt Follow: 50</Text>
                </View>
              </View>
            </View>
          </ImageBackground>
          <View style={styles.profileTitle}>
            {/* <View style={styles.txtTitleLeft}>
              <Text style={styles.txtTitle}>Mua hàng</Text>
            </View>
            <View style={styles.txtTitleRight}>
              <Text style={styles.txtTitle}>Thông tin</Text>
            </View> */}
            <Tab.Navigator
              screenOptions={{
                tabBarActiveTintColor: 'black',
                tabBarStyle: {backgroundColor: '#EAFFF2'},
              }}>
              <Tab.Screen name="Mua Hàng" component={ProfileCart} />
              <Tab.Screen name="Thông Tin" component={ProfileInfo} />
            </Tab.Navigator>
          </View>
        </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  profileHeader: {
    minHeight: 180,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    // opacity: 0.6,
    zIndex: -1,
    position: 'relative',
  },
  avatarProfile: {
    width: 90,
    height: 90,
    resizeMode: 'contain',
    borderRadius: 170,
  },
  profileTk: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginLeft: 20,
    zIndex: 1,
    position: 'absolute',
    bottom: 30,
  },
  profileInfo: {
    marginLeft: 15,
  },
  profileInfoName: {
    color: '#fff',
    fontSize: 22,
    fontWeight: '600',
  },
  profileTV: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    marginTop: 10,
    paddingHorizontal: 5,
    paddingVertical: 5,
    borderRadius: 10,
    marginBottom: 10,
    maxWidth: 125,
  },
  txtTv: {
    color: '#333',
    fontWeight: '500',
    fontSize: 16,
    marginRight: 5,
  },
  iconChev: {
    fontSize: 16,
  },
  profileFollow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  txtFollow: {
    color: '#fff',
    fontSize: 16,
  },
  //
  profileTitle: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  txtTitleLeft: {
    paddingVertical: 15,
    width: '50%',
    borderBottomWidth: 3,
    borderBottomColor: '#00623B',
  },
  txtTitleRight: {
    paddingVertical: 15,
    paddingVertical: 15,

    width: '50%',
  },
  txtTitle: {
    textAlign: 'center',
    fontSize: 18,
    color: '#333',
    fontWeight: '400',
  },
});

export default Profile;
