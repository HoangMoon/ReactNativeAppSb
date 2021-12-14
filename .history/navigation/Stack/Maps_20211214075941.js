import React from 'react';
import {
  SafeAreaView,
  View,
  Image,
  Text,
  StyleSheet,
  TextInput,
  ScrollView,
} from 'react-native';
import MapView, {PROVIDER_GOOGLE, Marker, Callout} from 'react-native-maps';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Icon1 from 'react-native-vector-icons/FontAwesome';
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons';

const Maps = () => {
  const initialRegion = {
    latitude: 21.04639947170033,
    longitude: 105.78491492015995,
    latitudeDelta: 0.09,
    longitudeDelta: 0.04,
  };

  return (
    <View style={{flex: 1, backgroundColor: 'red'}}>
      <MapView
        style={Styles.container}
        provider={PROVIDER_GOOGLE}
        initialRegion={initialRegion}>
        <Marker
          coordinate={{
            latitude: 21.04639947170033,
            longitude: 105.78491492015995,
          }}>
          <Callout>
            <Image style={Styles.MarkerImage} />
            <Text style={Styles.MarkerText}>StarBuck Coffee Shop HH </Text>
          </Callout>
        </Marker>
      </MapView>

      <Image
        source={require('../../assets/images/ShopPic.jpg')}
        style={Styles.ImageMap}
      />
      <View style={Styles.DetailsImgMap}>
        <View style={Styles.VoteDetail}>
          <View style={Styles.VoteAddress}>
            <Icon style={Styles.AddIcon} name="map-marker-alt"></Icon>
            <Text style={Styles.MarkerText}>34/TT Quán Lào, YD, TH</Text>
          </View>
          <View style={Styles.VotePoint}>
            <Icon1 style={Styles.pointer} name="star" />
            <Icon1 style={Styles.pointer} name="star" />
            <Icon1 style={Styles.pointer} name="star" />
            <Icon1 style={Styles.pointer} name="star" />
            <Icon1 style={Styles.pointer} name="star" />
          </View>
          <View style={Styles.status}>
            <Text style={Styles.StatusText}> Mở cửa 7.00 pm </Text>
            <Text style={Styles.MarkerText} style={{marginHorizontal: 10}}>
              <Icon2 name="ray-start-end" size={20} />
            </Text>
            <Text style={Styles.StatusText2}>Đóng cửa 22.00 pm</Text>
          </View>
          <View style={Styles.contactMaps}>
            <Text style={Styles.contactText}>Liên hệ với chúng tôi: </Text>
          </View>
        </View>
      </View>

      <View style={Styles.search}>
        <View style={Styles.search1}>
          <Image source={require('../../assets/images/1.png')} />
          <TextInput style={Styles.input} placeholder="Search" />
        </View>
      </View>
    </View>
  );
};
// 21.04639947170033, 105.78491492015995
const Styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
  },
  ImageMap: {
    width: 400,
    height: 200,
    position: 'absolute',
    resizeMode: 'cover',
    bottom: 220,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    borderColor: '#CCCCCC',
    borderWidth: 1,
  },
  MarkerText: {
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center',
    paddingTop: 10,
    paddingBottom: 5,
  },
  StatusText: {
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'center',
    paddingTop: 10,
    paddingBottom: 5,
    color: '#2BC411',
  },
  StatusText2: {
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'center',
    paddingTop: 10,
    paddingBottom: 5,
    color: '#CCD5F3',
  },

  MarkerImage: {
    width: 150,
    height: 300,
    resizeMode: 'contain',
  },
  DetailsImgMap: {
    width: '100%',
    height: 220,
    backgroundColor: '#fff',
    borderColor: '#CCCCCC',
    borderWidth: 0.4,
    borderRadius: 5,
  },
  AddIcon: {
    fontSize: 20,
    marginRight: 10,
    color: 'red',
  },
  VoteAddress: {
    width: '100%',
    alignItems: 'center',
    textAlign: 'center',
    fontSize: 16,
    fontStyle: 'italic',
    fontWeight: 'bold',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  VotePoint: {
    flexDirection: 'row',
    paddingVertical: 10,
    letterSpacing: 20,
    justifyContent: 'center',
  },
  pointer: {
    fontSize: 20,
    // backgroundColor: '#FAF746',
    color: '#FAF746',
    letterSpacing: 7,
    alignItems: 'center',
  },
  status: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 15,
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  search: {
    height: 48,
    width: '85%',
    backgroundColor: 'white',
    borderRadius: 18,
    position: 'absolute',
    top: 30,
    left: 30,
  },
  search1: {
    alignItems: 'center',
    height: '100%',
    width: '100%',
    flexDirection: 'row',
    marginLeft: 15,
  },
  input: {
    height: 40,
    width: '100%',
    padding: 10,
    fontSize: 18,
    lineHeight: 27,
    color: 'black',
  },
  contactMaps: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  contactText: {
    fontSize: 18,
    color: '#FF512F',
  },
});

export default Maps;
