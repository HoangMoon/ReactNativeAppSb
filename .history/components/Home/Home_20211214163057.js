import React, {useState} from 'react';
import {
  Image,
  StyleSheet,
  Text,
  View,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Modal,
  Pressable,
} from 'react-native';
// import Svg, {Use, Image} from 'react-native-svg';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Icon1 from 'react-native-vector-icons/MaterialCommunityIcons';
import Modal from 'react-native-modal';
import Swiper from 'react-native-swiper';
import {DataList, dataSale} from '../../Data/Data';
import {ProductItem, FeatureItem} from './ProductItem';

import Hoang from '../Modal/Modal';
import HomeModal from '../Modal/Modal';
import Countdown from '../Countdown/Countdown';
import Bar from '../Barmenu/Bar';

const dataBanner = [
  {
    idB: 1,
    imgB: require('../../assets/images/c1.jpg'),
  },
  {
    idB: 2,
    imgB: require('../../assets/images/c2.jpg'),
  },
  {
    idB: 3,
    imgB: require('../../assets/images/c3.jpg'),
  },
  {
    idB: 4,
    imgB: require('../../assets/images/c4.jpg'),
  },
  {
    idB: 5,
    imgB: require('../../assets/images/c5.jpg'),
  },
];
const Home = ({navigation}) => {
  const [FoodActive, setFoodActive] = useState(dataSale[0]);
  const handeActive = item => {
    setFoodActive(item);
  };
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <>
      <ScrollView>
        <HomeModal />
        <View style={styles.homePage}>
          <View style={styles.homeTop}>
            <View style={styles.homeHeader}>
              <Image
                style={styles.homeBell}
                source={require('../../assets/images/bell.png')}
              />
              <Image
                style={styles.homeLogo}
                source={require('../../assets/images/logo1.png')}
              />
              <TouchableOpacity onPress={() => setModalVisible(true)}>
                <Image
                  style={styles.homeBar}
                  source={require('../../assets/images/bar.png')}
                />
              </TouchableOpacity>
              <Modal
                animationIn="slideInRight"
                transparent={true}
                visible={modalVisible}
                hasBackdrop={true}
                backdropTransitionInTiming={300}
                backdropOpacity={0.9}
                backdropColor="black"
                onRequestClose={() => {
                  Alert.alert('Modal has been closed.');
                  setModalVisible(!modalVisible);
                }}>
                <View style={styles.centeredView}>
                  <View style={styles.modalView}>
                    <Text>hello word</Text>
                    <Pressable
                      style={[styles.btnModal, styles.buttonClose]}
                      onPress={() => setModalVisible(!modalVisible)}>
                      <Text style={styles.closeModal}>
                        <Icon1 name="times" style={styles.iconTimes} />
                      </Text>
                    </Pressable>
                  </View>
                </View>
              </Modal>
            </View>
            <View style={styles.homeAvatar}>
              <View style={styles.avtarTxt}>
                <Text
                  style={{
                    color: '#fff',
                    fontSize: 30,
                    fontWeight: '600',
                    letterSpacing: 1,
                  }}>
                  Starbucks,
                </Text>
                <Text style={styles.avatarName}>Huy Hoàng</Text>
              </View>
              <Image source={require('../../assets/images/avatar.png')} />
            </View>
            <Swiper
              style={styles.homeBanner}
              style={{height: 270, borderRadius: 20, overflow: 'hidden'}}
              loop
              autoplay={true}
              autoplayTimeout={2.5}
              // dot={<View style={{width: 8, height: 8}}></View>}>
            >
              {dataBanner &&
                dataBanner.length > 0 &&
                dataBanner.map((item, index) => (
                  <>
                    <Image
                      key={item.idB}
                      style={styles.bannerImg}
                      source={item.imgB}
                    />
                  </>
                ))}
            </Swiper>
            <View style={styles.homeSearch}>
              <TextInput
                style={styles.inputHome}
                placeholderTextColor={'#333'}
                placeholder="Search.."
              />
              <Icon
                style={styles.iconSearch}
                name="search"
                size={25}
                color="#333"
              />
            </View>
          </View>
          <View style={styles.homeContent}>
            <View style={styles.bannerContent}>
              <View style={styles.homeHeading}>
                <Text style={styles.bannerTitle}>For you</Text>
                <Icon
                  name="chevron-circle-right"
                  style={styles.iconbannerTitle}
                />
              </View>
              <View style={styles.bannerImgContent}>
                <View style={styles.bInfo}>
                  <Image
                    style={styles.forImg}
                    source={require('../../assets/images/bn1.png')}
                  />
                  <Text style={styles.txtInfo}>
                    Art in a Cup: Buy One Get One
                  </Text>
                </View>
                <View style={styles.bInfo}>
                  <Image
                    style={styles.forImg}
                    source={require('../../assets/images/bn2.png')}
                  />
                  <Text style={styles.txtInfo}>
                    12th Dec 2021: Pistachio Christmas Tree Frappuccino
                  </Text>
                </View>
              </View>
            </View>
            <View style={styles.homeNews}>
              <Text style={styles.bannerTitle}>
                <View style={styles.coundownSale}>
                  <View>
                    <Text
                      style={{
                        color: '#F45C43',
                        textTransform: 'uppercase',
                        fontSize: 21,
                        fontWeight: '600',
                      }}>
                      F<Icon1 name="lightning-bolt-outline" size={20} />
                      ash Sale
                    </Text>
                  </View>
                  <View>
                    <Countdown />
                  </View>
                </View>
              </Text>
              <View style={styles.newsList}>
                <View style={styles.newColumn}>
                  <Image
                    style={{resizeMode: 'contain'}}
                    source={require('../../assets/images/view1.png')}
                  />
                  <Text style={styles.txtNews}>Ưu đãi lớn 50%</Text>
                </View>
                <View style={styles.newColumn}>
                  <Image
                    style={{resizeMode: 'contain'}}
                    source={require('../../assets/images/view2.png')}
                  />
                  <Text style={styles.txtNews}>Giá rẻ bất ngờ!!!</Text>
                </View>
                <View style={styles.newColumn}>
                  <Image
                    style={{resizeMode: 'contain'}}
                    source={require('../../assets/images/view3.png')}
                  />
                  <Text style={styles.txtNews}>Christmas Days!!</Text>
                </View>
              </View>
            </View>
            <View style={styles.homeProduct}>
              <View style={styles.homeHeading}>
                <Text style={styles.bannerTitle}>Product news</Text>
                <Icon
                  name="chevron-circle-right"
                  style={styles.iconbannerTitle}
                />
              </View>
              <ScrollView
                horizontal={true}
                style={{flexWrap: 'nowrap', marginBottom: 30}}>
                <View style={styles.productList}>
                  {DataList &&
                    DataList.length > 0 &&
                    DataList.map((item, index) => (
                      <>
                        <ProductItem
                          key={item.id}
                          style={{width: 100, height: 100}}
                          image={item.image}
                          title={item.title}
                          price={item.price}
                          name={item.name}
                          desc={item.desc}
                        />
                      </>
                    ))}
                </View>
              </ScrollView>
            </View>
            <View style={styles.homeProduct}>
              <View style={styles.homeHeading}>
                <Text style={styles.bannerTitle}>Feature Product</Text>
                <Icon
                  name="chevron-circle-right"
                  style={styles.iconbannerTitle}
                />
              </View>
              <ScrollView horizontal={true}>
                <View style={styles.productTab}>
                  {dataSale.map(val => (
                    <TouchableOpacity
                      onPress={() => handeActive(val)}
                      style={[
                        styles.btnTab,
                        {
                          backgroundColor:
                            val.id === FoodActive.id ? '#00623B' : '#FFFFFF',
                        },
                      ]}
                      key={val.id}>
                      <Text
                        style={styles.txtBtnTab}
                        style={{
                          fontSize: 18,
                          color: val.id === FoodActive.id ? '#FFF' : '#000',
                        }}>
                        {val.name_type}
                      </Text>
                    </TouchableOpacity>
                  ))}
                </View>
              </ScrollView>

              <View style={styles.productList}>
                {FoodActive.data &&
                  FoodActive.data.length > 0 &&
                  FoodActive.data.map((item, index) => (
                    <>
                      <FeatureItem
                        key={item.id}
                        navigation={navigation}
                        image={item.image}
                        title={item.title}
                        price={item.price}
                        name={item.name}
                        desc={item.desc}
                        salePrice={
                          item.salePrice
                            ? `Sale ${item.salePrice}`
                            : `Discount ${Math.floor(Math.random(20) * 30)}`
                          // : `Discount ${Math.floor(Math.random(20) * 30)}`
                        }
                        rating={item.rating}
                      />
                    </>
                  ))}
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  homePage: {
    flex: 1,
    height: '100%',
    backgroundColor: '#00623B',
    position: 'relative',
  },
  homeTop: {
    padding: 10,
  },
  homeHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
  },
  homeAvatar: {
    marginTop: 25,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  avatarName: {
    color: '#fff',
    marginTop: 3,
    fontSize: 25,
  },
  bannerImg: {
    marginTop: 20,
    width: '100%',
    height: 240,
    borderRadius: 20,
    overflow: 'hidden',
  },
  homeContent: {
    backgroundColor: '#fff',
    width: '100%',
    marginTop: 20,
    borderRadius: 20,
    // padding: 20,
    height: '100%',
    // position: 'absolute',
    padding: 10,
  },
  homeHeading: {
    flexDirection: 'row',
    alignItems: 'baseline',
  },
  bannerTitle: {
    fontSize: 22,
    fontWeight: '500',
    marginBottom: 18,
    color: '#FF512F',
  },
  iconbannerTitle: {
    fontSize: 25,
    marginLeft: 15,
    color: '#00623B',
  },
  bannerImgContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  forImg: {
    height: 100,
    width: '100%',
  },
  bInfo: {
    width: 180,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    marginRight: 15,
    // marginLeft: 10,
  },
  txtInfo: {
    padding: 10,
    fontSize: 16,
    textAlign: 'center',
    lineHeight: 25,
  },
  homeNews: {
    marginTop: 20,
    marginBottom: 40,
  },
  newsList: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  newColumn: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  txtNews: {
    marginTop: 7,
    fontSize: 16,
    textAlign: 'center',
  },
  productList: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
  homeSearch: {
    position: 'relative',
    zIndex: -1,
    color: '#333',
    backgroundColor: '#fff',
    overflow: 'hidden',
    height: 55,
    borderWidth: 3,
    borderColor: '#eee',
    borderRadius: 100,
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.43,
    shadowRadius: 9.51,

    elevation: 15,
  },
  inputHome: {
    color: '#333',
    paddingLeft: 15,
    fontSize: 18,
  },
  iconSearch: {
    position: 'absolute',
    right: 15,
    top: '30%',
    zIndex: 5,
    // transform: [{translateY: '50%'}],
  },
  productTab: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 25,
  },
  btnTab: {
    paddingHorizontal: 12,
    paddingVertical: 14,
    borderRadius: 12,
    shadowColor: '#000',
    // margin: 20,
    marginRight: 20,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  coundownSale: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

export default Home;
