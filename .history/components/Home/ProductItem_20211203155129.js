import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Image,
  Text,
  TouchableOpacity,
  Alert,
  Modal,
  Pressable,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon1 from 'react-native-vector-icons/FontAwesome5';

const ProductItem = props => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <>
      <View style={styles.productItem}>
        <Image style={styles.productImg} source={props.image} />
        <Text style={styles.productName}>{props.title}</Text>
        <Text style={styles.productPrice}>{props.price}$</Text>
        <Text style={styles.productPriceNews}>News</Text>
        <Icon style={styles.iconHeart} name="heart" size={25} color="#ccc" />
        <View style={styles.modalProduct}>
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
              Alert.alert('Modal has been closed.');
              setModalVisible(!modalVisible);
            }}>
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <Text style={styles.modalText}>Hello World!</Text>
                <Pressable
                  style={[styles.btnModal, styles.buttonClose]}
                  onPress={() => setModalVisible(!modalVisible)}>
                  <Text style={styles.textStyle}>Hide Modal</Text>
                </Pressable>
              </View>
            </View>
          </Modal>
        </View>
        <Pressable
          style={[styles.btnModal, styles.buttonOpen]}
          // style={{position: 'absolute', top: 0}}
          onPress={() => setModalVisible(true)}>
          <Text>
            <Icon1 name="eye" style={styles.iconEye} />
          </Text>
        </Pressable>
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
  },
  productItem: {
    position: 'relative',
    Width: 250,
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
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  buttonOpen: {
    position: 'absolute',
    top: 10,
    left: 10,
  },
  iconEye: {
    fontSize: 20,
    color: '#F45C43',
  },
});

export {ProductItem, FeatureItem};
