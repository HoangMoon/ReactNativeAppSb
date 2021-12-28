import React, {useState} from 'react';
import {
  Image,
  StyleSheet,
  Text,
  View,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Pressable,
} from 'react-native';
// import Svg, {Use, Image} from 'react-native-svg';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Icon2 from 'react-native-vector-icons/FontAwesome';
import Icon1 from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon3 from 'react-native-vector-icons/Entypo';

import Modal from 'react-native-modal';
import Swiper from 'react-native-swiper';
import {DataList, dataSale} from '../../Data/Data';
import {ProductItem, FeatureItem} from './ProductItem';

import Hoang from '../Modal/Modal';
import HomeModal from '../Modal/Modal';
import Countdown from '../Countdown/Countdown';
import {Item} from 'react-native-paper/lib/typescript/components/List/List';

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
              <View style={styles.bellMess}>
                <Image
                  style={styles.homeBell}
                  source={require('../../assets/images/bell.png')}
                />
                <Text style={styles.bellMessNumber}>3</Text>
              </View>
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
                style={styles.modalViewBar}
                animationIn="slideInRight"
                animationOut={'slideOutLeft'}
                transparent={true}
                transparent={true}
                isVisible={modalVisible}
                hasBackdrop={true}
                backdropTransitionInTiming={400}
                backdropOpacity={0.9}
                backdropColor="black"
                onRequestClose={() => {
                  Alert.alert('Modal has been closed.');
                  setModalVisible(!modalVisible);
                }}>
                <View style={styles.centeredView}>
                  <View style={styles.modalView}>
                    <View style={styles.modalBar}>
                      <Icon style={styles.iconBar} name="home" />
                      <Text style={styles.txtBar}>Home</Text>
                    </View>
                    <View style={styles.modalBar}>
                      <Icon1 style={styles.iconBar} name="contacts" />
                      <Text style={styles.txtBar}>Liên hệ</Text>
                    </View>
                    <View style={styles.modalBar}>
                      <Icon2 style={styles.iconBar} name="support" />
                      <Text style={styles.txtBar}>Trợ giúp</Text>
                    </View>
                    <View style={styles.modalBar}>
                      <Icon style={styles.iconBar} name="info-circle" />
                      <Text style={styles.txtBar}>Thông tin</Text>
                    </View>
                    <TouchableOpacity
                      style={styles.modalBar}
                      onPress={() => navigation.naviagte('Login')}>
                      <Icon3 style={styles.iconBar} name="log-out" />
                      <Text style={styles.txtBar}>Đăng xuất</Text>
                    </TouchableOpacity>
                    <Pressable
                      style={[styles.btnModal, styles.buttonClose]}
                      onPress={() => setModalVisible(!modalVisible)}>
                      <Text style={styles.closeModal}>
                        <Icon2 name="times" style={styles.iconTimes} />
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
                  <React.Fragment key={index}>
                    <Image style={styles.bannerImg} source={item.imgB} />
                  </React.Fragment>
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
                <Text style={styles.bannerTitle}>Dành cho bạn</Text>
                <View style={styles.iconTitleHome}>
                  <Icon name="angle-right" style={styles.iconbannerTitle} />
                </View>
              </View>
              <View style={styles.bannerImgContent}>
                <View style={styles.bInfo}>
                  <Image
                    style={styles.forImg}
                    source={require('../../assets/images/bn1.png')}
                  />
                  <Text style={styles.txtInfo}>
                    Sản phẩm đang được yêu thích ở cửa hàng
                  </Text>
                </View>
                <View style={styles.bInfo}>
                  <Image
                    style={styles.forImg}
                    source={require('../../assets/images/bn2.png')}
                  />
                  <Text style={styles.txtInfo}>
                    12th Dec 2021: Sale nhân dịp đón giáng sinh và chào năm mới
                    2022
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
                <Text style={styles.bannerTitle}>Sản phẩm mới</Text>
                <View style={styles.iconTitleHome}>
                  <Icon name="angle-right" style={styles.iconbannerTitle} />
                </View>
              </View>
              <ScrollView
                horizontal={true}
                style={{flexWrap: 'nowrap', marginBottom: 30}}>
                <View style={styles.productList}>
                  {DataList &&
                    DataList.length > 0 &&
                    DataList.map((item, index) => (
                      <React.Fragment key={index}>
                        <ProductItem
                          style={{width: 100, height: 100}}
                          image={item.image}
                          title={item.title}
                          price={item.price}
                          name={item.name}
                          desc={item.desc}></ProductItem>
                      </React.Fragment>
                    ))}
                </View>
              </ScrollView>
            </View>
            <View style={styles.homeProduct}>
              <View style={styles.homeHeading}>
                <Text style={styles.bannerTitle}>Sản phẩm nổi bật</Text>
                <View style={styles.iconTitleHome}>
                  <Icon name="angle-right" style={styles.iconbannerTitle} />
                </View>
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
                    <React.Fragment key={index}>
                      <FeatureItem
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
                    </React.Fragment>
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
    position: 'relative',
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
  iconTitleHome: {
    marginLeft: 15,
    width: 25,
    height: 25,
    borderRadius: 100,
    backgroundColor: '#00623B',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconbannerTitle: {
    fontSize: 20,
    color: '#fff',
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
    color: '#FF8008',
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
  // Modal
  modalViewBar: {
    position: 'relative',
  },
  modalBar: {
    marginBottom: 25,
    flexDirection: 'row',
    alignItems: 'center',
  },
  txtBar: {
    fontSize: 25,
    color: '#fff',
    fontWeight: '500',
    marginLeft: 10,
  },
  buttonClose: {
    position: 'absolute',
    top: -180,
    right: 10,
  },
  closeModal: {
    width: 40,
    height: 40,
    backgroundColor: 'red',
    lineHeight: 38,
    textAlign: 'center',
    borderRadius: 100,
  },
  iconTimes: {
    fontSize: 25,
    color: '#fff',
  },
  iconBar: {
    color: '#00623B',
    fontSize: 30,
  },
  bellMess: {
    position: 'relative',
    flexDirection: 'row',
  },
  bellMessNumber: {
    width: 23,
    height: 23,
    backgroundColor: 'red',
    borderRadius: 100,
    color: '#fff',
    lineHeight: 20,
    textAlign: 'center',
    position: 'absolute',
    right: -10,
    top: -8,
  },
});

export default Home;
