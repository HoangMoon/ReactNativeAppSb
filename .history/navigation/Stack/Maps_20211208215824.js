import React from 'react';
import {SafeAreaView, View, Image, Text, StyleSheet} from 'react-native';
import MapView, {PROVIDER_GOOGLE, Marker, Callout} from 'react-native-maps';
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
            <Image
              style={Styles.MarkerImage}
              source={require('../../assets/images/ShopPic.jpg')}
            />
            <Text style={Styles.MarkerText}>StarBuck </Text>
          </Callout>
        </Marker>
      </MapView>
      <Image
        source={require('../../assets/images/ShopPic.jpg')}
        style={Styles.ImageMap}
      />
      <View style={Styles.DetailsImgMap}></View>
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
    width: 420,
    height: 200,
    position: 'absolute',
    // resizeMode: 'contain',
    bottom: 100,
  },
  MarkerText: {
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center',
  },
  MarkerImage: {
    width: 150,
    height: 150,
  },
  DetailsImgMap: {
    width: '100%',
    height: 100,
    backgroundColor: '#fff',
  },
});

export default Maps;
