import React, {useState} from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';
import {Component} from 'react';
import MapView from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import Icon from 'react-native-vector-icons/FontAwesome5';

import {Marker, PROVIDER_GOOGLE} from 'react-native-maps';

const DelyMap = () => {
  const [state, setstate] = useState({
    origin: {
      latitude: 21.046643720630456,
      longitude: 105.78502071401914,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
      // 21.046643720630456, 105.78502071401914
      // 21.023999904 105.851496594
      // 21.02343453528672, 105.85144301228333
    },
    directions: {
      latitude: 21.02343453528672,
      longitude: 105.85144301228333,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    },
  });
  const {origin, directions} = state;
  return (
    <View style={Styles.container}>
      <MapView
        style={Styles.container}
        provider={PROVIDER_GOOGLE}
        initialRegion={origin}>
        <Marker
          coordinate={{
            latitude: 21.04639947170033,
            longitude: 105.78491492015995,
          }}></Marker>
        <Marker coordinate={directions}></Marker>
      </MapView>
      <View style={Styles.DelyDetail}>
        <View style={Styles.DelyHeadDetail}>
          <View style={Styles.DelyTitle}>
            <View>
              <Icon name="bullseye" style={Styles.logoTitle}></Icon>
            </View>
            <View>
              <Text style={Styles.DelyTitleText}>Chi tiết giao hàng</Text>
            </View>
          </View>
          <View style={Styles.Direc}>
            <View style={Styles.start}>
              <View style={Styles.startTitle}>
                <View>
                  <Icon name="burn" style={Styles.logostart}></Icon>
                </View>
                <View>
                  <Text style={Styles.startTitleText}>Shop</Text>
                </View>
              </View>
              <Text style={Styles.DelyAddress}>
                StarBuck'S House -Hồ Tùng Mậu
              </Text>
              <Text style={Styles.DelyAddress}>29 Hồ Tùng Mậu </Text>
            </View>
            <View style={Styles.goal}>
              <View style={Styles.startTitle}>
                <View>
                  <Icon name="burn" style={Styles.logogoal}></Icon>
                </View>
                <View>
                  <Text style={Styles.startTitleText}>Khách hàng</Text>
                </View>
              </View>
              <Text style={Styles.DelyAddress}>28,Nguyễn Hoàng Mai Dịch</Text>
              <Text style={Styles.DelyAddress}>
                <Text style={{color: '#FA5454'}}>1.9 Km</Text>
                <Text>-Phí di chuyển:10.000D -Dự tính:37'</Text>
              </Text>
            </View>
          </View>
          <View style={Styles.driver}>
            <View style={Styles.person}>
              <View style={Styles.person2}>
                <Icon name={'user-circle'} style={Styles.logoUser}></Icon>
              </View>
              <View>
                <Text style={Styles.PersonName}>Nguyễn Đức Hoàng</Text>
              </View>
            </View>
            <View style={Styles.num}>
              <View style={Styles.person2}>
                <Icon name={'phone-alt'} style={Styles.logoUser}></Icon>
              </View>
              <View>
                <Text style={Styles.PersonName}>123456789</Text>
              </View>
            </View>
            <View>
              <Icon name={'user-circle'} style={Styles.user}></Icon>
            </View>
          </View>
          <View style={Styles.time}>
            <Text style={Styles.timetitle}>Thời gian đến</Text>
            <View style={Styles.DelyTime}>
              <View style={Styles.timedetail}>
                <View style={Styles.person2}>
                  <Icon name={'calendar-alt'} style={Styles.logoUser}></Icon>
                </View>
                <View>
                  <Text style={Styles.PersonName}>16/12/2021</Text>
                </View>
              </View>
              <View style={Styles.num}>
                <View style={Styles.person2}>
                  <Icon name={'clock'} style={Styles.logoUser}></Icon>
                </View>
                <View>
                  <Text style={Styles.PersonName}>sớm nhát có thể</Text>
                </View>
              </View>
            </View>
          </View>
          <View>
            <TextInput style={Styles.input} placeholder="Thêm ghi chú" />
          </View>
        </View>
      </View>
    </View>
  );
};
const Styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  //
  DelyDetail: {
    width: '100%',
    height: 500,
    backgroundColor: '#fff',
    borderColor: '#CCCCCC',
    borderWidth: 0.4,
  },

  DelyTitle: {
    width: '100%',
    // height: '10%',
    borderBottomColor: '#EBEFFE',
    borderBottomWidth: 1,
    flexDirection: 'row',
  },
  logoTitle: {
    fontSize: 30,
    color: '#0052D4',
    // margin: 10,
    padding: 10,
  },
  DelyTitleText: {
    fontSize: 18,
    fontStyle: 'normal',
    fontWeight: '700',
    color: 'black',
    marginLeft: 10,
    marginTop: 10,
  },
  //
  Direc: {
    borderBottomWidth: 1,
    borderColor: '#EBEFFE',
    // height: '60%',
  },
  start: {marginTop: 10},
  logostart: {
    color: '#FA481F',
    fontSize: 24,
    marginTop: 10,
    marginLeft: 20,
  },
  logogoal: {
    color: '#2249FF',
    fontSize: 24,
    marginTop: 10,
    marginLeft: 20,
  },
  startTitle: {flexDirection: 'row'},
  startTitleText: {
    fontSize: 18,
    fontStyle: 'normal',
    fontWeight: 'bold',
    marginLeft: 10,
    marginTop: 10,
  },
  DelyAddress: {fontSize: 18, marginLeft: 47},
  goal: {
    marginTop: 20,
    marginBottom: 5,
  },
  //
  driver: {
    width: '100%',
    // height: '14%',
    flexDirection: 'row',
    marginLeft: 20,
    borderColor: '#EBEFFE',
    borderBottomWidth: 1,
  },
  person: {
    marginTop: 20,
    marginLeft: 20,
    flexDirection: 'row',
  },
  person2: {
    flexDirection: 'row',
  },
  logoUser: {
    color: '#CCC',
    fontSize: 20,
    marginRight: 10,
    color: '#FF73EF',
  },
  PersonName: {
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: '700',
    color: 'black',
  },
  num: {
    margin: 20,
    flexDirection: 'row',
  },

  user: {
    marginTop: 20,
    marginRight: 5,
    color: '#10A9FF',
    fontSize: 20,
  },
  //
  time: {borderColor: '#EBEFFE', borderBottomWidth: 1},
  DelyTime: {
    flexDirection: 'row',
  },
  timetitle: {
    fontSize: 18,
    marginTop: 20,
    marginLeft: 25,
  },
  timedetail: {marginTop: 20, marginLeft: 40, flexDirection: 'row'}, //
  input: {
    height: 40,
    width: '93%',
    margin: 20,
    fontSize: 18,
    lineHeight: 27,
    color: 'black',
    borderColor: '#CCC',
    borderWidth: 1,
    borderRadius: 5,
    marginLeft: 15,
  },
});

export default DelyMap;
