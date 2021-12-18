import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TextInput,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Octicons from 'react-native-vector-icons/Octicons';
const dataChat = [
  {
    id: 1,
    img: require('./assets/images/ShopPic.jpg'),
    name: 'hoàng',
    Decrip: 'Hello StarBuck,I love u',
    time: '19:00',
  },
  {
    id: 2,
    img: require('./assets/images/ShopPic.jpg'),
    name: 'moon',
    Decrip: 'LoL',
    time: '19:30',
  },
  {
    id: 3,
    img: require('./assets/images/ShopPic.jpg'),
    name: ' hoàng',
    Decrip: 'k',
    time: '19:00',
  },
  {
    id: 4,
    img: require('./assets/images/ShopPic.jpg'),
    name: 'hoàng',
    Decrip: 'Hello StarBuck,I love u',
    time: '17:00',
  },
];
const App = () => {
  return (
    <View>
      <View style={Styles.Headers}>
        <View style={Styles.backBtn}>
          <Icon name="angle-left" style={Styles.Icon}></Icon>
        </View>
        <View style={Styles.Title}>
          <Text style={Styles.TitleText}>Chats</Text>
        </View>
        <View style={Styles.userBtn}>
          <Icon name="user-circle" style={Styles.IconUser}></Icon>
        </View>
      </View>
      <View>
        <TextInput style={Styles.input} placeholder="Search" />
      </View>
      <ScrollView horizontal={true}>
        <View style={Styles.Users}>
          {dataChat &&
            dataChat.length > 0 &&
            dataChat.map((item, index) => (
              <>
                <View style={Styles.peoples} key={item.id}>
                  <View style={Styles.poepleImg}>
                    <View style={{position: 'relative'}}>
                      <Octicons name="primitive-dot" style={Styles.active} />
                      <Image style={Styles.ItemImage} source={item.img} />
                    </View>
                  </View>
                  <View style={Styles.poepleName}>
                    <Text style={Styles.name}>{item.name} </Text>
                  </View>
                </View>
              </>
            ))}
        </View>
      </ScrollView>
      <ScrollView>
        <View style={Styles.Chatsroom}>
          {dataChat &&
            dataChat.length > 0 &&
            dataChat.map((item, index) => (
              <>
                <View style={Styles.people} key={item.id}>
                  <View style={Styles.poepleImg}>
                    <View style={{position: 'relative'}}>
                      <Octicons name="primitive-dot" style={Styles.active} />
                      <Image style={Styles.ItemImage} source={item.img} />
                    </View>
                  </View>
                  <View style={Styles.poepleName}>
                    <Text style={Styles.ChatName}>{item.name} </Text>
                    <View style={Styles.chatconten}>
                      <View>
                        <Text style={Styles.ChatDecrip}>{item.Decrip}</Text>
                      </View>
                      <View>
                        <Text style={Styles.ChatDecrip}>{item.time}</Text>
                      </View>
                    </View>
                  </View>
                </View>
              </>
            ))}
        </View>
      </ScrollView>
    </View>
  );
};
const Styles = StyleSheet.create({
  Headers: {
    width: '100%',
    borderBottomColor: '#EBEFFE',
    borderBottomWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  backBtn: {
    width: 30,
    height: 30,
    justifyContent: 'center',
    marginLeft: 20,
  },
  userBtn: {
    width: 30,
    height: 30,
    justifyContent: 'center',
    marginRight: 20,
  },
  IconUser: {
    fontSize: 30,
    alignItems: 'center',
    color: '#FF4D3D',
  },
  Icon: {
    fontSize: 30,
    alignItems: 'center',
    color: '#ccc',
  },
  TitleText: {
    fontSize: 25,
    fontWeight: '800',
  },
  input: {
    height: 40,
    width: '93%',
    margin: 20,
    fontSize: 18,
    lineHeight: 27,
    color: 'black',
    borderColor: '#CCC',
    borderWidth: 1,
    borderRadius: 20,
    marginLeft: 15,
    backgroundColor: '#EBEFFE',
  },
  Users: {flexDirection: 'row', marginBottom: 20},
  peoples: {marginLeft: 20},
  poepleImg: {marginLeft: 20, marginBottom: 10},
  ItemImage: {
    width: 60,
    height: 60,
    borderRadius: 50,
  },
  name: {
    color: 'black',
    fontSize: 16,
    marginLeft: 35,
  },
  people: {flexDirection: 'row', marginBottom: 20},
  ChatName: {
    color: 'black',
    fontSize: 20,
    marginLeft: 15,
    justifyContent: 'center',
  },
  ChatDecrip: {
    fontSize: 16,
    margin: 10,
    marginLeft: 15,
    justifyContent: 'center',
  },
  chatconten: {
    flexDirection: 'row',
  },
  active: {
    position: 'absolute',
    color: 'green',
    fontSize: 30,
    bottom: -10,
    right: 0,
    zIndex: 1,
  },
});
export default App;
