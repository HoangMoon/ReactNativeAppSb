import React from 'react';
import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';

const Details = ({route, params}) => {
  const products = route.params;
  return (
    <>
      <ScrollView>
        <View style={styles.productDetails}>
          <View style={styles.detailHeader}>
            <Text style={styles.productDetails}>Product Details</Text>
            <Image
              style={styles.imgLogo}
              source={require('../../assets/images/logo.png')}
            />
          </View>
          <View style={styles.productContent}>
            <View style={styles.imgDetails}>
              <Image style={styles.pdImg} source={products.image} />
              <View style={styles.ctDetails}>
                <Text style={styles.ctPrice}>{products.price}</Text>
                <Text style={styles.ctSale}>{products.salePrice}</Text>
                <View style={styles.voucherDetails}>
                  <Text>
                    {' '}
                    Voucher code:
                    {Math.random()
                      .toString(36)
                      .replace(/[^a-z]+/g, '')
                      .substr(0, 5)}
                  </Text>
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
  productDetails: {
    flex: 1,
    height: '100%',
    backgroundColor: '#fff',
  },
  detailHeader: {
    marginTop: 70,
    paddingLeft: 10,
    paddingRight: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  productDetails: {
    fontSize: 35,
  },
});

export default Details;
