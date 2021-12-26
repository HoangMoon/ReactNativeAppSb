import React from 'react';
import {View, Text, ScrollView, StyleSheet, Image} from 'react-native';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import Icon from 'react-native-vector-icons/FontAwesome5';
const Cartuser = () => {
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
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
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
});

export default Cartuser;
