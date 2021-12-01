import React from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

const Details = ({route, params}) => {
  const products = route.params;
  return (
    <>
      <ScrollView>
        <View style={styles.productDetails}>
          <Icon
            style={styles.iconArrow}
            name="arrow-left"
            size={30}
            color="#ccc"
          />
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
                <Icon
                  style={styles.iconHeart}
                  name="heart"
                  size={25}
                  color="#ccc"
                />
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
              <View style={styles.infoSize}>
                <Text style={styles.titleSize}>Select size</Text>
                <View style={styles.sizeList}>
                  <View style={styles.infoSizeColumn}>
                    <Image style={styles.imgSize1} source={products.image} />
                    <Text style={styles.txtSize}>Size S</Text>
                  </View>
                  <View style={styles.infoSizeColumn}>
                    <Image style={styles.imgSize2} source={products.image} />
                    <Text style={styles.txtSize}>Size M</Text>
                  </View>
                  <View style={styles.infoSizeColumn}>
                    <Image style={styles.imgSize3} source={products.image} />
                    <Text style={styles.txtSize}>Size L</Text>
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.addCart}>
              <View style={styles.addCount}>
                <TouchableOpacity style={styles.actionAdd}>
                  <Icon style={styles.iconAdd} name="minus" />
                </TouchableOpacity>
                <Text style={styles.txtCount}>0</Text>
                <TouchableOpacity style={styles.actionAdd}>
                  <Icon style={styles.iconAdd} name="plus" />
                </TouchableOpacity>
              </View>
              <View style={styles.cartDetails}>
                <Icon style={styles.iconCart} name="cart-plus" />
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
  iconArrow: {
    margin: 15,
  },
  imgLogo: {
    width: 200,
    height: 120,
    resizeMode: 'contain',
  },
  detailHeader: {
    marginTop: 20,
    flexDirection: 'row',
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
    height: '100%',
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
    height: 350,
    resizeMode: 'contain',
    position: 'absolute',
    top: -170,
    // transform: [{translateY: -150}],
  },
  ctDetails: {
    marginTop: 20,
    marginRight: 30,
    position: 'relative',
  },
  iconHeart: {
    backgroundColor: '#fff',
    color: '#ff7979',
    width: 50,
    height: 50,
    lineHeight: 50,
    textAlign: 'center',
    position: 'absolute',
    right: 0,
    top: 5,
    borderRadius: 100,
  },
  ctPrice: {
    color: '#fff',
    fontSize: 40,
    fontWeight: 'bold',
    marginBottom: 10,
    marginTop: 60,
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
    backgroundColor: '#3CA55C',
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
    fontSize: 23,
    marginBottom: 15,
  },
  infoDesc: {
    color: '#eee',
    lineHeight: 22,
    fontSize: 16,
  },
  infoSize: {
    marginTop: 25,
  },
  sizeList: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'baseline',
  },
  titleSize: {
    color: '#fff',
    fontSize: 20,
  },
  infoSizeColumn: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
    backgroundColor: '#fafafa',
    borderRadius: 10,
  },
  imgSize1: {
    width: 80,
    height: 80,
    resizeMode: 'contain',
    flexShrink: 0,
  },
  imgSize2: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
    flexShrink: 0,
  },
  imgSize3: {
    width: 120,
    height: 120,
    resizeMode: 'contain',
    flexShrink: 0,
  },
  txtSize: {
    fontSize: 16,
    paddingTop: 6,
    color: '#ff6e7f',
  },
  addCart: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 30,
    marginTop: 25,
  },
  addCount: {
    marginLeft: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    maxWidth: 180,
    height: 50,
    overflow: 'hidden',
    borderRadius: 10,
  },
  actionAdd: {
    backgroundColor: '#acb6e5',
    height: 50,
    width: 50,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    // borderTopLeftRadius: 10,
    // borderTopRightRadius: 10,
  },
  iconAdd: {
    color: '#fff',
    fontSize: 20,
  },
  txtCount: {
    fontSize: 25,
    paddingLeft: 15,
    paddingRight: 15,
    color: '#9796f0',
  },
  cartDetails: {
    backgroundColor: '#fff',
    width: 100,
    height: 50,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconCart: {
    fontSize: 30,
  },
});

export default Details;
