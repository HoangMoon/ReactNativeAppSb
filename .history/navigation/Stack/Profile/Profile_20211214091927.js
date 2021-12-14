import * as React from 'react';
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
import Icon2 from 'react-native-vector-icons/Ionicons';

// import {NavigationContainer} from '@react-navigation/native';
// import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
// const Tab = createMaterialTopTabNavigator();

const imageBg = require('../../../assets/images/profileb.jpg');

import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

function ProfileCart() {
  return (
    <>
      <ScrollView>
        <View style={styles.profileSale}>
          <Text style={styles.txtSale}>12.12 Siêu Sale Starbucks 50%</Text>
          <Text style={styles.txtsaleNew}>New</Text>
        </View>
        <View style={styles.profileVouncher}>
          <View style={styles.VouncherItem}>
            <View style={[styles.VouncherColor, styles.VouncherColor1]}>
              <Icon style={styles.iconVouncher} name="heart" />
            </View>
            <Text style={styles.txtVouncher}>Yêu thích</Text>
          </View>
          <View style={styles.VouncherItem}>
            <View style={[styles.VouncherColor, styles.VouncherColor2]}>
              <Icon style={styles.iconVouncher} name="qrcode" />
            </View>
            <Text style={styles.txtVouncher}>Vouncher</Text>
          </View>
          <View style={styles.VouncherItem}>
            <View style={[styles.VouncherColor, styles.VouncherColor3]}>
              <Icon style={styles.iconVouncher} name="truck" />
            </View>
            <Text style={styles.txtVouncher}>Free ship</Text>
          </View>
          <View style={styles.VouncherItem}>
            <View style={[styles.VouncherColor, styles.VouncherColor4]}>
              <Icon style={styles.iconVouncher} name="apple-pay" />
            </View>
            <Text style={styles.txtVouncher}>Mã giảm</Text>
          </View>
        </View>
        <View style={styles.profileCart}>
          <View style={styles.profileCartTitle}>
            <Icon name="folder-plus" style={styles.iconCartTitle} />
            <Text style={styles.txtCartD}>Đơn mua</Text>
          </View>
          <View style={styles.ProfileOrder}>
            <View style={styles.ProfileOrderItem}>
              <Icon style={styles.IconOrder} name="inbox" />
              <Text style={styles.txtOrder}>Chờ xác nhận</Text>
            </View>
            <View style={styles.ProfileOrderItem}>
              <Icon style={styles.IconOrder} name="gift" />
              <Text style={styles.OrderNumber}>1</Text>
              <Text style={styles.txtOrder}>Chờ lấy hàng</Text>
            </View>
            <View style={styles.ProfileOrderItem}>
              <Icon1 style={styles.IconOrder} name="truck" />
              <Text style={styles.OrderNumber}>3</Text>
              <Text style={styles.txtOrder}>Đang giao</Text>
            </View>
            <View style={styles.ProfileOrderItem}>
              <Icon style={styles.IconOrder} name="star" />
              <Text style={styles.txtOrder}>Đánh giá</Text>
            </View>
          </View>
        </View>
        <View style={styles.profileFunc}>
          <View style={styles.profileUti}>
            <Icon style={styles.iconUti} name="window-maximize" />
            <Text style={{marginLeft: 10, fontSize: 18, color: '#fff'}}>
              Tiện ích của tôi
            </Text>
          </View>
          <View style={styles.profileFuncList}>
            <View style={styles.FuncItem}>
              <Icon style={styles.FuncItemIcon} name="money-check" />
              <Text style={styles.txtFuncItem}>Starbucks Rewards</Text>
            </View>
            <Icon style={styles.iconFunc} name="chevron-right" />
          </View>
          <View style={styles.profileFuncList}>
            <View style={styles.FuncItem}>
              <Icon style={styles.FuncItemIcon} name="money-check" />
              <Text style={styles.txtFuncItem}>Starbucks Rewards</Text>
            </View>
            <Icon style={styles.iconFunc} name="chevron-right" />
          </View>
          <View style={styles.profileFuncList}>
            <View style={styles.FuncItem}>
              <Icon style={styles.FuncItemIcon} name="money-check" />
              <Text style={styles.txtFuncItem}>Starbucks Rewards</Text>
            </View>
            <Icon style={styles.iconFunc} name="chevron-right" />
          </View>
          <View style={styles.profileFuncList}>
            <View style={styles.FuncItem}>
              <Icon style={styles.FuncItemIcon} name="money-check" />
              <Text style={styles.txtFuncItem}>Starbucks Rewards</Text>
            </View>
            <Icon style={styles.iconFunc} name="chevron-right" />
          </View>
        </View>
      </ScrollView>
    </>
  );
}

function SettingsScreen() {
  return (
    <>
      <View style={styles.profileFuncList}>
        <View style={styles.FuncItem}>
          <Icon style={styles.FuncItemIcon} name="user-circle" />
          <Text style={styles.txtFuncItem}>Tên đăng nhập</Text>
        </View>
        <Text>hoang0500811</Text>
      </View>
      <View style={styles.profileFuncList}>
        <View style={styles.FuncItem}>
          <Icon2 style={styles.FuncItemIcon} name="ios-woman" />
          <Text style={styles.txtFuncItem}>Giới tính</Text>
        </View>
        <Text>Nam</Text>
      </View>
      <View style={styles.profileFuncList}>
        <View style={styles.FuncItem}>
          <Icon style={styles.FuncItemIcon} name="money-check" />
          <Text style={styles.txtFuncItem}>Ngày sinh</Text>
        </View>
        <Text>05-08-2001</Text>
      </View>
      <View style={styles.profileFuncList}>
        <View style={styles.FuncItem}>
          <Icon style={styles.FuncItemIcon} name="money-check" />
          <Text style={styles.txtFuncItem}>Số điện thoại</Text>
        </View>
        <Icon style={styles.iconFunc} name="chevron-right" />
      </View>
    </>
  );
}

const Tab = createMaterialTopTabNavigator();

export default function Profile() {
  return (
    <>
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
      </View>
      <Tab.Navigator>
        <Tab.Screen name="Mua hàng" component={ProfileCart} />
        <Tab.Screen name="Thông tin" component={SettingsScreen} />
      </Tab.Navigator>
    </>
  );
}

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
  //
  profileSale: {
    marginLeft: 5,
    marginTop: 15,
    paddingBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#999',
    flexDirection: 'row',
    alignItems: 'center',
  },
  txtSale: {
    color: '#EA384D',
    marginRight: 10,
    fontSize: 16,
  },
  txtsaleNew: {
    backgroundColor: '#00623B',
    color: '#fff',
    paddingHorizontal: 25,
    paddingVertical: 7,
    borderTopLeftRadius: 10,
    borderBottomRightRadius: 10,
    fontSize: 14,
  },
  //
  profileVouncher: {
    marginTop: 25,
    margin: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  VouncherItem: {
    width: 70,
    height: 70,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  VouncherColor: {
    width: 62,
    height: 62,
    lineHeight: 64,
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 100,
  },
  VouncherColor1: {
    borderRadius: 100,
    backgroundColor: '#ffa751',
  },
  VouncherColor2: {
    backgroundColor: '#ec008c',
  },
  VouncherColor3: {
    backgroundColor: '#5433FF',
  },
  VouncherColor4: {
    backgroundColor: '#2193b0',
  },
  iconVouncher: {
    fontSize: 35,
    color: '#ffff',
  },
  txtVouncher: {
    marginTop: 5,
    color: '#333',
    fontSize: 15,
  },
  //
  profileCart: {
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  profileCartTitle: {
    marginTop: 20,
    paddingBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
  },
  iconCartTitle: {
    fontSize: 30,
    marginRight: 10,
  },
  txtCartD: {
    fontSize: 18,
  },
  //
  ProfileOrder: {
    marginTop: 25,
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 25,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  ProfileOrderItem: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  IconOrder: {
    fontSize: 30,
    marginBottom: 5,
    color: '#333',
  },
  OrderNumber: {
    position: 'absolute',
    top: -7,
    right: 13,
    backgroundColor: 'red',
    color: '#fff',
    width: 23,
    height: 23,
    lineHeight: 23,
    textAlign: 'center',
    borderRadius: 100,
  },
  txtOrder: {
    color: '#333',
    fontSize: 14,
  },
  //
  profileUti: {
    flexDirection: 'row',
    alignItems: 'baseline',
    fontSize: 18,
    color: '#333',
    paddingVertical: 15,
    backgroundColor: '#3CA55C',
  },
  iconUti: {
    fontSize: 23,
    color: '#fff',
  },
  //
  profileFuncList: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
    padding: 15,
  },
  FuncItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  txtFuncItem: {
    color: '#333',
    marginLeft: 10,
    fontSize: 16,
  },
  FuncItemIcon: {
    fontSize: 16,
  },
  iconFunc: {
    fontSize: 16,
  },
});
