import React from 'react';
import {StyleSheet, View, Image} from 'react-native';

const ProductItem = props => {
  return (
    <>
      <View style={styles.productItem}>
        <Image style={styles.productImg} source={props.image} />
        <Text style={styles.productName}>{props.title} hhh</Text>
        <Text style={styles.productPrice}>{props.price}$</Text>
        <Text>llll</Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({});

export default ProductItem;
