import React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  View,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
const Profile = () => {
  return (
    <>
      <View style={styles.profileApp}>
        <View style={style.profileHeader}>
          <View style={profileTk}>
            <Image source={require('../../assets/images/avatarb.jpg')} />
            <View style={profileInfo}>
              <Text style={profileInfoName}>Hoang0508</Text>
              <View>
                <Text>Thành viên</Text>
                <Icon name="chevron-right" />
              </View>
            </View>
          </View>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({});

export default Profile;
