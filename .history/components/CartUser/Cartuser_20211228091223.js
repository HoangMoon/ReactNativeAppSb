import React from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Icon1 from 'react-native-vector-icons/Ionicons';
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons';

const Cartuser = ({navigation}) => {
  const initialRegion = {
    latitude: 19.97819849719515,
    longitude: 105.65475851031482,
    latitudeDelta: 0.09,
    longitudeDelta: 0.04,
  };
  return (
    <>
      <ScrollView>
        <View>
          <MapView
            style={styles.cartMaps}
            provider={PROVIDER_GOOGLE}
            initialRegion={initialRegion}>
            <Marker
              coordinate={{
                latitude: 19.97819849719515,
                longitude: 105.65475851031482,
              }}></Marker>
          </MapView>
          <View style={styles.cartUser}>
            <View>
              <View style={styles.cartUserContent}>
                <Image
                  style={styles.cartUserImg}
                  source={require('../../assets/images/avatarb.jpg')}
                />
                <View>
                  <Text style={styles.cartUserName}>Huy Hoàng</Text>
                  <Text style={styles.cartUserVote}>
                    Tài xế được 100 lượt yêu thích
                  </Text>
                  <View style={styles.iconVote}>
                    <Icon name="star" size={20} style={{color: 'orange'}} />
                    <Icon name="star" size={20} style={{color: 'orange'}} />
                    <Icon name="star" size={20} style={{color: 'orange'}} />
                    <Icon name="star" size={20} style={{color: 'orange'}} />
                    <Icon name="star" size={20} style={{color: 'orange'}} />
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.cartUserGo}>
              <View>
                <Text style={styles.cartGotxt}>
                  Tài xế đang đến - khoảng 5ph
                </Text>
              </View>
              <View style={styles.iconCartContact}>
                <View style={styles.iconCall}>
                  <Icon1 style={{color: '#fff', fontSize: 18}} name="call" />
                </View>
                <View style={[styles.iconCall, styles.iconCallColor]}>
                  <Icon2
                    style={{color: '#fff', fontSize: 18}}
                    name="facebook-messenger"
                  />
                </View>
              </View>
            </View>
            <View>
              <Text style={styles.cartNumber}>Biển số xe: 36P4-4714</Text>
            </View>
            <View style={styles.shipCart}>
              <View>
                <Text style={styles.txtShipbig}>Đơn hàng giao: </Text>
                <Text style={styles.txtShipsm}>3 sản phẩm</Text>
              </View>
              <TouchableOpacity
                style={styles.btnShipping}
                onPress={() => navigation.navigate('dely')}>
                <Text style={{fontSize: 16, color: '#fff'}}>Xem chi tiết</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  cartMaps: {
    // height: '100%',
    flex: 1,
    width: 400,
    height: 450,
  },
  cartUser: {
    backgroundColor: '#fff',
    padding: 15,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  cartUserContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  cartUserImg: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
    borderRadius: 130,
    marginRight: 10,
  },
  cartUserName: {
    fontSize: 18,
    color: '#000',
    fontWeight: '600',
    marginBottom: 5,
  },
  cartUserVote: {
    fontSize: 16,
    marginBottom: 5,
  },
  iconVote: {
    flexDirection: 'row',
  },
  cartUserGo: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  cartGotxt: {
    fontSize: 17,
    color: 'green',
  },
  iconCall: {
    width: 40,
    height: 40,
    backgroundColor: '#1D976C',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 10,
  },
  iconCallColor: {
    backgroundColor: '#EB3349',
  },
  iconCartContact: {
    flexDirection: 'row',
  },
  cartNumber: {
    fontSize: 17,
  },
  shipCart: {
    marginTop: 15,
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  txtShipbig: {
    fontSize: 18,
    color: '#FF4B2B',
  },
  txtShipsm: {
    marginTop: 3,
    fontSize: 16,
    color: '#F37335',
  },
  btnShipping: {
    backgroundColor: '#DA4453',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
});

export default Cartuser;
