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

const FeatureItem = () => {
  return (
    <>
      <View style={styles.productItem}>
        <Image style={styles.productImg} source={props.image} />
        <Text style={styles.productName}>{props.title}</Text>
        <Text style={styles.productPrice}>{props.price}$</Text>
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
  },
  productItem: {
    Width: 300,
    // borderWidth: 1,
    // borderColor: '#ccc',
    marginBottom: 20,
    padding: 10,
    shadowColor: '#999',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 11,
    backgroundColor: '#fff',
    borderRadius: 10,
  },
  productImg: {
    // width: '100%',
    width: 150,
    height: 240,
    marginBottom: 10,
  },
  productName: {
    fontSize: 20,
    marginBottom: 10,
    color: '#00623B',
  },
  productPrice: {
    fontSize: 18,
  },
});

export {ProductItem, FeatureItem};
