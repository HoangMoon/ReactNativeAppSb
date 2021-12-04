import React from 'react';
import {StyleSheet, View, Image, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
// import Icon from 'react-native-vector-icons/FontAwesome5';

const ProductItem = props => {
  return (
    <>
      <View style={styles.productItem}>
        <Image style={styles.productImg} source={props.image} />
        <Text style={styles.productName}>{props.title}</Text>
        <Text style={styles.productPrice}>{props.price}$</Text>
        <Text style={styles.productPriceNews}>News</Text>
      </View>
    </>
  );
};

const FeatureItem = ({
  image,
  title,
  price,
  rating,
  salePrice,
  navigation,
  desc,
  name,
}) => {
  return (
    <>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('Details', {
            image,
            title,
            price,
            rating,
            salePrice,
            desc,
            name,
            desc,
          })
        }>
        <>
          <View style={styles.productItem1}>
            <Image style={styles.productImg} source={image} />
            <Text style={styles.productName}>{title}</Text>
            <View style={styles.featurePrice}>
              <Text style={styles.productPrice}>{price}$</Text>
            </View>
            <View style={styles.productRating}>
              <Text style={styles.txtRating}>{rating}</Text>
              <Image
                style={styles.imgRating}
                source={require('../../assets/images/rating.png')}
              />
            </View>
            <View style={styles.productCart}>
              <View style={styles.iconCart}>
                <Icon
                  style={styles.imgCart}
                  name="cart-plus"
                  size={25}
                  color="#fff"
                />
              </View>
            </View>
            <Text style={styles.productPriceSale}>{salePrice}</Text>
            <Icon
              style={styles.iconHeart}
              name="heart"
              size={25}
              color="#ccc"
            />
          </View>
        </>
      </TouchableOpacity>
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
    Width: 300,
    minHeight: 350,
    // borderWidth: 1,
    // borderColor: '#ccc',
    marginLeft: 5,
    marginRight: 15,
    marginBottom: 30,
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
  productItem1: {
    position: 'relative',
    Width: 250,
    minHeight: 350,
    // borderWidth: 1,
    // borderColor: '#ccc',
    marginBottom: 30,
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
    backgroundColor: '#DD5E89',
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
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  txtRating: {
    fontSize: 16,
    paddingRight: 3,
  },
  productCart: {
    flexDirection: 'row',
  },
  iconCart: {
    backgroundColor: '#00623B',
    color: '#fff',
    width: 60,
    height: 50,
    position: 'absolute',
    right: -10,
    bottom: -40,
    borderBottomRightRadius: 10,
    borderTopLeftRadius: 12,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imgCart: {
    fontSize: 30,
  },
  productPriceNews: {
    backgroundColor: '#EB3349',
    color: '#fff',
    width: 100,
    height: 45,
    lineHeight: 40,
    fontSize: 18,
    textAlign: 'center',
    borderTopRightRadius: 15,
    borderBottomLeftRadius: 15,
    position: 'absolute',
    bottom: 0,
    left: 0,
  },
  iconHeart: {
    position: 'absolute',
    right: 10,
    top: 10,
    color: '#ccc',
  },
});

export {ProductItem, FeatureItem};
