import React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  View,
  ScrollView,
  TextInput,
} from 'react-native';
import Swiper from 'react-native-swiper';
import {DataList, dataSale} from '../../Data/Data';
import {ProductItem, FeatureItem} from './ProductItem';

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
const Home = () => {
  return (
    <>
      <ScrollView>
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
              <Image
                style={styles.homeBar}
                source={require('../../assets/images/bar.png')}
              />
            </View>
            <View style={styles.homeAvatar}>
              <View style={styles.avtarTxt}>
                <Text style={{color: '#fff', fontSize: 25}}>Good morning,</Text>
                <Text style={styles.avatarName}>Huy Hoàng</Text>
              </View>
              <Image source={require('../../assets/images/avatar.png')} />
            </View>
            <Swiper
              style={styles.homeBanner}
              style={{height: 270, borderRadius: 20, overflow: 'hidden'}}
              loop
              autoplay
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
            <TextInput
              style={styles.inputHome}
              placeholderTextColor={'#fff'}
              placeholder="Search.."
            />
          </View>
          <View style={styles.homeContent}>
            <View style={styles.bannerContent}>
              <Text style={styles.bannerTitle}>For you</Text>
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
              <Text style={styles.bannerTitle}>News</Text>
              <View style={styles.newsList}>
                <View style={styles.newColumn}>
                  <Image source={require('../../assets/images/view1.png')} />
                  <Text style={styles.txtNews}>Elevate Your Tea</Text>
                </View>
                <View style={styles.newColumn}>
                  <Image source={require('../../assets/images/view2.png')} />
                  <Text style={styles.txtNews}>Elevate Your Tea</Text>
                </View>
                <View style={styles.newColumn}>
                  <Image source={require('../../assets/images/view3.png')} />
                  <Text style={styles.txtNews}>Elevate Your Tea</Text>
                </View>
              </View>
            </View>
            <View style={styles.homeProduct}>
              <Text style={styles.bannerTitle}>Product news</Text>
              <View style={styles.productList}>
                {DataList &&
                  DataList.length > 0 &&
                  DataList.map((item, index) => (
                    <>
                      <ProductItem
                        image={item.image}
                        title={item.title}
                        price={item.price}
                      />
                    </>
                  ))}
              </View>
            </View>
            <View style={styles.homeProduct}>
              <Text style={styles.bannerTitle}>Feature Product</Text>
              <View style={styles.productList}>
                {dataSale &&
                  dataSale.length > 0 &&
                  dataSale.map((item, index) => (
                    <>
                      <FeatureItem
                        key={item.id}
                        image={item.image}
                        title={item.title}
                        price={item.price}
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
  bannerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
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
    marginTop: 5,
    fontSize: 14,
    textAlign: 'center',
  },
  productList: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
  inputHome: {
    marginTop: 10,
    borderWidth: 1,
    borderColor: '#eee',
    borderRadius: 100,
    color: '#fff',
  },
});

export default Home;
