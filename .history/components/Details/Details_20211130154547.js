import React from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
  TextInput,
} from 'react-native';

const Details = ({route, params}) => {
  const products = route.params;
  return (
    <>
      <ScrollView>
        <View style={styles.productDetails}>
          <View style={styles.detailHeader}>
            <Text style={styles.txtDetails}>Product Details</Text>
            <Image
              style={styles.imgLogo}
              source={require('../../assets/images/logo.png')}
            />
          </View>
          <View style={styles.productContent}>
            <View style={styles.imgDetails}>
              <View style={styles.dImg}>
                <Image style={styles.pdImg} source={products.image} />
              </View>
              <View style={styles.ctDetails}>
                <Text style={styles.ctPrice}>{products.price}</Text>
                <Text style={styles.ctSale}>{products.salePrice}</Text>
                <View style={styles.voucherDetails}>
                  <Text>
                    <Text style={styles.voucherCode}>Voucher code:</Text>
                    {Math.random()
                      .toString(36)
                      .replace(/[^a-z]+/g, '')
                      .substr(0, 5)}
                  </Text>
                  <TextInput
                    style={{height: 40}}
                    placeholder="Please enter the code"
                  />
                </View>
              </View>
            </View>
            <View style={products.infoDetails}>
              <Text style={styles.infoName}>{products.name}</Text>
              <Text style={styles.infoDesc}>{products.desc}</Text>
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
  txtDetails: {
    fontSize: 35,
    color: '#00623B',
    fontWeight: 'bold',
  },
  productContent: {
    backgroundColor: '#00623B',
    height: '100%',
    width: '100%',
    position: 'relative',
    marginTop: 100,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  dImg: {
    position: 'absolute',
    top: -50,
    transform: [{translateY: 50}],
  },
  imgDetails: {
    resizeMode: 'contain',
  },
});

export default Details;
