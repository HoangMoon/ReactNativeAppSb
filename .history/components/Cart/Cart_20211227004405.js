import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from 'react-native';
const {width} = Dimensions.get('window');
import Icon from 'react-native-vector-icons/FontAwesome5';
import FontIcon from 'react-native-vector-icons/FontAwesome';
const Cart = ({navigation}) => {
  const [count, setCount] = useState(0);
  const handleCountMinus = e => {
    if (count > 0) {
      setCount(count => count - 1);
    }
  };
  const handleCountPlus = e => {
    setCount(count => count + 1);
  };

  return (
    <View>
      <ScrollView>
        <View style={Styles.Headers}>
          <TouchableOpacity
            style={Styles.backBtn}
            onPress={() => navigation.goBack()}>
            <Icon name="angle-left" style={Styles.Icon}></Icon>
          </TouchableOpacity>
          <View style={Styles.userBtn}>
            <View>
              <FontIcon name="bookmark-o" style={Styles.IconBM}></FontIcon>
            </View>
            <View>
              <Text style={Styles.HeadersTex}>Xem Bookmark</Text>
            </View>
          </View>
        </View>
        <View
          style={{
            margin: 20,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <Text style={Styles.Title}>Giỏ hàng</Text>
          <Text>" 3 sp "</Text>
        </View>

        <View style={Styles.item}>
          <View style={Styles.Item}>
            <View>
              <Image
                style={Styles.ItemImage}
                source={require('../../assets/images/p16.png')}
              />
            </View>
            <View>
              <Text style={Styles.ItemTitle}>Caramel Frapuchino</Text>
              <View style={Styles.Price}>
                <View>
                  <Text style={Styles.ItemTitle}> 50.000 đ </Text>
                </View>
                <TouchableOpacity style={Styles.del}>
                  <FontIcon name="trash-o" style={Styles.IcMark}></FontIcon>
                </TouchableOpacity>
              </View>
              <View style={{flexDirection: 'row'}}>
                <View style={Styles.add}>
                  <TouchableOpacity
                    style={Styles.actionAdd}
                    onPress={e => handleCountMinus(e)}>
                    <Icon style={Styles.iconAdd} name="minus" />
                  </TouchableOpacity>
                  <Text style={Styles.txtCount}>{count}</Text>
                  <TouchableOpacity
                    style={Styles.actionAdd}
                    onPress={e => handleCountPlus(e)}>
                    <Icon style={Styles.iconAdd} name="plus" />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </View>

        <View style={Styles.bottomAC}>
          <View style={{flexDirection: 'row'}}>
            <View>
              <Text style={Styles.TotalText}>Tổng tiền:</Text>
            </View>
            <View>
              <Text style={Styles.PriceTex}>50.000đ</Text>
            </View>
          </View>
          <TouchableOpacity
            style={Styles.Odb}
            onPress={() => navigation.navigate('Cartu')}>
            <Text style={Styles.Odbt}>Đặt hàng</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};
const Styles = StyleSheet.create({
  Headers: {
    width: '100%',

    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  backBtn: {
    width: 30,
    height: 30,
    justifyContent: 'center',
    marginLeft: 20,
    flexDirection: 'row',
    backgroundColor: '#1d724d',
    borderRadius: 100,
  },
  userBtn: {
    justifyContent: 'center',
    marginRight: 20,
    flexDirection: 'row',
  },
  Icon: {
    fontSize: 30,
    alignItems: 'center',
    color: '#ccc',
    marginRight: 20,
  },
  IcMark: {
    fontSize: 25,
    color: '#1d724d',
  },
  IconBM: {
    fontSize: 18,
    alignItems: 'center',
    color: '#ccc',
    marginRight: 10,
    color: '#F53959',
  },

  Price: {flexDirection: 'row', justifyContent: 'space-between'},

  HeadersTex: {
    fontSize: 15,
    fontWeight: '800',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#CCC',
  },
  Title: {
    fontSize: 30,
    color: 'black',
    fontWeight: '900',
  },
  item: {
    marginBottom: 20,
  },
  Item: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: '#EDEDED',
    marginHorizontal: 10,
    borderRadius: 40,
  },
  ItemImage: {
    width: 150,
    height: 120,
    // resizeMode: 'cover',
    borderRadius: 20,
  },
  ItemTitle: {
    fontWeight: '800',
    color: '#555',
    fontSize: 18,
    marginBottom: 5,
  },
  add: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 100,
    backgroundColor: '#fff',
    margin: 10,
  },
  addCount: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    maxWidth: 180,
    height: 40,
    overflow: 'hidden',
  },
  actionAdd: {
    backgroundColor: '#FF793F',
    height: 30,
    width: 30,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
  },
  iconAdd: {
    color: '#ccc',
    fontSize: 15,
  },
  txtCount: {
    fontSize: 18,
    paddingLeft: 15,
    paddingRight: 15,
  },
  bottomAC: {marginTop: 45},
  TotalText: {
    color: '#227551',
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 5,
    marginLeft: 10,
  },
  PriceTex: {
    color: '#2e2e2e',
    fontWeight: 'bold',
    fontSize: 24,
    marginLeft: 200,
  },
  Odb: {
    backgroundColor: '#1d724d',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#d2d2d1',
    borderWidth: 1,
    borderRadius: 50,
    height: 60,
    paddingHorizontal: 15,
    margin: 20,
    lineHeight: 60,
    textAlign: 'center',
  },
  Odbt: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 24,
  },
  del: {
    backgroundColor: '#FFCDAF',
    width: 40,
    height: 40,
    borderRadius: 100,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default Cart;
