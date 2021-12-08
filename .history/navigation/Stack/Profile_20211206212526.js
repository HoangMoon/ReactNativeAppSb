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

const imageBg = require('../../assets/images/profileb.jpg');
const Profile = () => {
  return (
    <>
      <ScrollView>
        <View style={styles.profileApp}>
          <ImageBackground source={imageBg} style={styles.profileHeader}>
            <View style={styles.profileTk}>
              <Image
                style={styles.avatarProfile}
                source={require('../../assets/images/avatarb.jpg')}
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
            <View style={styles.txtTitleLeft}>
              <Text style={styles.txtTitle}>Mua hàng</Text>
            </View>
            <View style={styles.txtTitleRight}>
              <Text style={styles.txtTitle}>Thông tin</Text>
            </View>
          </View>
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
    alignItems: "center"
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
    margin: 20,
  },
  profileCartTitle: {
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
});

export default Profile;
