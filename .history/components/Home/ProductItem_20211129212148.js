import React from 'react';
import {StyleSheet, View, Image, Text} from 'react-native';

const ProductItem = props => {
  return (
    <>
      <View style={styles.productItem}>
        <Image style={styles.productImg} source={props.image} />
        <Text style={styles.productName}>{props.title}</Text>
        <Text style={styles.productPrice}>{props.price}$</Text>
      </View>
    </>
  );
};

const FeatureItem = props => {
  return (
    <>
      <View style={styles.productItem}>
        <Image style={styles.productImg} source={props.image} />
        <Text style={styles.productName}>{props.title}</Text>
        <View style={styles.featurePrice}>
          <Text style={styles.productPrice}>{props.price}$</Text>
        </View>
        <Text style={styles.productRating}>
          {props.rating}
          <Image
            style={styles.imgRating}
            source={require('../../assets/images/rating.png')}
          />
        </Text>
        <Text style={styles.productPriceSale}>{props.salePrice}</Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  productList: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    // marginLeft: -5,
  },
  productItem: {
    position: 'relative',
    Width: 250,
    height: 350,
    // borderWidth: 1,
    // borderColor: '#ccc',
    // marginLeft: 5,
    marginBottom: 25,
    padding: 10,
    shadowColor: '#999',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
  },
  productImg: {
    // width: '100%',
    width: 160,
    height: 200,
    marginBottom: 10,
    resizeMode: 'contain',
  },
  productName: {
    fontSize: 20,
    marginBottom: 10,
    color: '#00623B',
  },
  productPrice: {
    fontSize: 18,
  },
  featurePrice: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'relative',
  },
  productPriceSale: {
    backgroundColor: '#00623B',
    color: '#fff',
    width: 100,
    height: 40,
    lineHeight: 40,
    fontSize: 18,
    textAlign: 'center',
    borderRadius: 10,
    position: 'absolute',
    top: -3,
    left: -5,
  },
  productRating: {
    fontSize: 16,
    marginTop: 10,
  },
  imgRating: {
    marginLeft: 3,
  },
});

export {ProductItem, FeatureItem};
