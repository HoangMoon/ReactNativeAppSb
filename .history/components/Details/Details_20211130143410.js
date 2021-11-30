import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

const Details = ({route, params}) => {
  const product = route.params;
  return (
    <>
      <View style={styles.productDetails}>
        <View style={styles.detailHeader}>
          <Text style={styles.productDetails}>Product Details</Text>
          <Image source={require('../../assets/images/logo.png')} />
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({});

export default Details;
