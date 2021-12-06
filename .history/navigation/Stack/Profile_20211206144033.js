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
const imageBg = require('../../assets/images/profileb.jpg');
const Profile = () => {
  return (
    <>
      <View style={styles.profileApp}>
        <ImageBackground style={styles.profileHeader}>
          <View style={styles.sprofileTk}>
            <Image source={require('../../assets/images/avatarb.jpg')} />
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
  profileHeader: {
    ba,
  },
});

export default Profile;
