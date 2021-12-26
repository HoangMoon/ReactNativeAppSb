import React from 'react';
import {View, Text, ScrollView, StyleSheet} from 'react-native';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
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
            {/* <Marker
              coordinate={{
                latitude: 21.04639947170033,
                longitude: 105.78491492015995,
              }}></Marker> */}
          </MapView>
          <Text>Hello</Text>
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
    height: 500,
  },
});

export default Cartuser;
