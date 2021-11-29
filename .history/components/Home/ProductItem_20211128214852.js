import React from 'react';
import {Text} from 'react-native';

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

export default ProductItem;
