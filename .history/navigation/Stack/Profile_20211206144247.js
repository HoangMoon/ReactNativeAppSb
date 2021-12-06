import React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  View,
  ScrollView,
  TextInput,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
const imageBg = require('../../assets/images/profileb.jpg');
const Profile = () => {
  return (
    <>
      <View style={styles.profileApp}>
        <ImageBackground source={imageBg} style={styles.profileHeader}>
          <View style={styles.sprofileTk}>
            <Image
              style={styles.avatarProfile}
              source={require('../../assets/images/avatarb.jpg')}
            />
            <View style={styles.profileInfo}>
              <Text style={styles.profileInfoName}>Hoang0508</Text>
              <View style={styles.profileTV}>
                <Text>Thành viên</Text>
                <Icon name="chevron-right" />
              </View>
              <View style={styles.profileFollow}>
                <Text>Người theo dõi: 50</Text>
                <Text>Đang theo dõi: 10</Text>
              </View>
            </View>
          </View>
        </ImageBackground>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  profileHeader: {},
  avatarProfile: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
});

export default Profile;
