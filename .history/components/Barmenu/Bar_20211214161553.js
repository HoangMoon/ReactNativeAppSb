import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Image,
  Text,
  TouchableOpacity,
  Alert,
  Modal,
  Pressable,
  Linking,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon1 from 'react-native-vector-icons/FontAwesome5';

const Bar = () => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <>
      <View style={styles.modalProduct}>
        <Modal
          animationType="slide"
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
    </>
  );
};

const styles = StyleSheet.create({});
export default Bar;
