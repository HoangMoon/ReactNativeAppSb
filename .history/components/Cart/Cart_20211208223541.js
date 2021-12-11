import React, {useState} from 'react';
import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  Dimensions,
  TextInput,
  ScrollView,
} from 'react-native';

const {width} = Dimensions.get('window');
import Icon from 'react-native-vector-icons/FontAwesome5';
const Cart = () => {
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
    <ScrollView>
      <View style={{backgroundColor: '#fff', flex: 1}}>
        <SafeAreaView>
          <View style={styles.wrapper}>
            <TouchableOpacity style={styles.backButton}>
              <Icon name="angle-left" size={30} style={{color: '#036637'}} />
            </TouchableOpacity>
            <View>
              <Text style={styles.headerText}>Cart Items</Text>
            </View>
            <View style={{width: 20}} />
          </View>
        </SafeAreaView>

        <View style={styles.Item}>
          <View>
            <Image
              style={styles.ItemImage}
              source={require('../../assets/images/p6.png')}
            />
          </View>

          <View style={{width: width / 2, justifyContent: 'flex-start'}}>
            <Text style={styles.ItemTitle}>Caramel Frapuchino</Text>

            <Text style={styles.ItemTitle}> 19.99$ </Text>

            <View style={styles.add}>
              <TouchableOpacity
                style={styles.actionAdd}
                onPress={e => handleCountMinus(e)}>
                <Icon style={styles.iconAdd} name="minus" />
              </TouchableOpacity>
              <Text style={styles.txtCount}>{count}</Text>
              <TouchableOpacity
                style={styles.actionAdd}
                onPress={e => handleCountPlus(e)}>
                <Icon style={styles.iconAdd} name="plus" />
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View style={styles.bottomAC}>
          <View>
            <Text style={styles.TotalText}>Total Price</Text>
            <Text style={styles.PriceTex}>19.99$</Text>
          </View>
          <TouchableOpacity style={styles.Odb}>
            <Text style={styles.Odbt}>Order Now</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    paddingHorizontal: 20,
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  backButton: {
    width: 40,
    height: 40,
    borderRadius: 40,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F8F8F7',
    shadowColor: '#000',
    shadowOffset: {
      width: 2,
      height: 0,
    },
    shadowRadius: 2,
    shadowOpacity: 1,
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: 24,
    color: '#616161',
    textAlign: 'center',
  },
  backgroundItem: {
    backgroundColor: '#f7f6f2',
    borderRadius: 10,
    borderWidth: 0.5,
  },
  ItemWarpper: {
    marginTop: 20,
    backgroundColor: '#',
    borderRadius: 20,
    marginHorizontal: 20,
  },
  Item: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: '#ccc',
    marginHorizontal: 20,
    borderRadius: 10,
    // width: width / 2,
  },
  ItemImage: {
    width: 90,
    height: 150,
    resizeMode: 'contain',
  },
  ItemTitle: {
    fontWeight: 'bold',
    color: '#555',
    fontSize: 23,
    marginBottom: 5,
  },
  add: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 100,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#d2d2d1',
    backgroundColor: '#fff',
  },
  addCount: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    maxWidth: 180,
    height: 40,
    overflow: 'hidden',
    borderRadius: 10,
    borderWidth: 1,
  },
  actionAdd: {
    backgroundColor: '#fff',
    height: 40,
    width: 40,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    borderWidth: 0.8,
    borderColor: '#d2d2d1',
    alignItems: 'center',
  },
  iconAdd: {
    color: '#ccc',
    fontSize: 20,
  },
  txtCount: {
    fontSize: 30,
    paddingLeft: 15,
    paddingRight: 15,
    color: '#9796f0',
  },
  bottomAC: {
    flex: 1,
    alignItems: 'flex-end',
    paddingHorizontal: 20,
    paddingBottom: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderTopColor: '#d2d2d1',
    paddingTop: 20,
    borderTopWidth: 1,
    borderStyle: 'dashed',
  },
  TotalText: {
    color: '#227551',
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 5,
  },
  PriceTex: {
    color: '#2e2e2e',
    fontWeight: 'bold',
    fontSize: 24,
  },
  Odb: {
    backgroundColor: '#1d724d',
    paddingHorizontal: 20,
    borderColor: '#d2d2d1',
    borderWidth: 1,
    borderRadius: 10,
    height: 40,
  },
  Odbt: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 24,
  },
  rightAC: {
    backgroundColor: '#509473',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    flex: 1,
    width: 60,
  },
});
export default Cart;
