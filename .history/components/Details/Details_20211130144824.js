import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

const Details = ({route, params}) => {
  const products = route.params;
  return (
    <>
      <View style={styles.productDetails}>
        <View style={styles.detailHeader}>
          <Text style={styles.productDetails}>Product Details</Text>
          <Image source={require('../../assets/images/logo.png')} />
        </View>
        <View style={styles.productContent}>
          <View style={styles.imgDetails}>
            <Image style={styles.pdImg} source={products.image} />
            <View style={styles.ctDetails}>
              <Text style={styles.ctPrice}>{products.price}</Text>
              <Text style={styles.ctSale}>{products.salePrice}</Text>
            </View>
          </View>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  productDetails: {
    marginTop: 25,
  },
  detailHeader: {
    paddingLeft: 10,
    paddingRight: 10,
  },
});

export default Details;
