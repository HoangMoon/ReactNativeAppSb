import React from 'react';

const ProductItem = () => {
  return (
    <>
      <Text style={styles.bannerTitle}>Product news</Text>
      <View style={styles.productList}>
        <View style={styles.productItem} key={item.id}>
          <Image style={styles.productImg} source={item.image} />
          <Text style={styles.productName}>{item.title}</Text>
          <Text style={styles.productPrice}>{item.price}$</Text>
        </View>
      </View>
    </>
  );
};

export default ProductItem;
