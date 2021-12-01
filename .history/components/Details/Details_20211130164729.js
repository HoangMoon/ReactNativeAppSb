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
                <Text style={styles.ctPrice}>{products.price}$</Text>
                <Text style={styles.ctSale}>{products.salePrice}</Text>
              </View>
            </View>
            <View style={styles.voucherDetails}>
              <View style={styles.randomCode}>
                <Text style={styles.voucherCode}>Voucher code:</Text>
                <Text style={styles.txtRandomCode}>
                  {Math.random()
                    .toString(36)
                    .replace(/[^a-z]+/g, '')
                    .substr(0, 5)}
                </Text>
              </View>
              <TextInput
                style={styles.inputCode}
                // style={{height: 40}}
                placeholderTextColor={'#fff'}
                placeholder="Please enter the code"
              />
            </View>
            <View style={styles.infoDetails}>
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
    letterSpacing: 1.5,
  },
  productContent: {
    backgroundColor: '#00623B',
    // height: '100%',
    // width: '100%',
    position: 'relative',
    marginTop: 100,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    position: 'relative',
  },
  imgDetails: {
    position: 'relative',
    flexDirection: 'row',
    justifyContent: 'space-between',
    // alignItems: 'center',
  },
  dImg: {
    position: 'relative',
  },
  pdImg: {
    width: 200,
    height: 300,
    resizeMode: 'contain',
    position: 'absolute',
    top: -170,
    // transform: [{translateY: -150}],
  },
  ctDetails: {
    marginTop: 20,
    marginRight: 30,
  },
  ctPrice: {
    color: '#fff',
    fontSize: 40,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  ctSale: {
    color: '#fff',
    backgroundColor: '#DD5E89',
    width: 120,
    height: 45,
    lineHeight: 45,
    fontSize: 16,
    textAlign: 'center',
    borderRadius: 5,
    marginBottom: 20,
  },
  voucherDetails: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  voucherCode: {
    color: '#fff',
    fontSize: 18,
    marginRight: 5,
  },
  randomCode: {
    backgroundColor: '#da70d6',
    flexDirection: 'row',
    alignItems: 'center',
    height: 50,
    padding: 10,
  },
  txtRandomCode: {
    color: '#fff',
    fontSize: 16,
  },
  inputCode: {
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  infoDetails: {
    marginTop: 22,
    padding: 10,
  },
  infoName: {
    color: '#fff',
    fontSize: 22,
  },
});

export default Details;
