import React from 'react';
import {View, Text, ScrollView, StyleSheet} from 'react-native';
import MapView, {PROVIDER_GOOGLE, Marker, Callout} from 'react-native-maps';
const Cartuser = () => {
  return (
    <>
      <ScrollView>
        <View>
          <MapView
            style={styles.container}
            provider={PROVIDER_GOOGLE}
            initialRegion={initialRegion}>
            <Marker
              coordinate={{
                latitude: 21.04639947170033,
                longitude: 105.78491492015995,
              }}></Marker>
          </MapView>
        </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({});

export default Cartuser;
