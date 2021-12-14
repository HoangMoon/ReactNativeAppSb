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

const ProfileCart = () => {
  return (
    <>
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
    </>
  );
};

export default ProfileCart;
