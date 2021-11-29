import React from 'react';

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

export {ProductItem};
