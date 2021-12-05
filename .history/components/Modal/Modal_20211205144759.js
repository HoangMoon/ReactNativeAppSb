import React, {useState, useEffect} from 'react';
import {StyleSheet, View, Text, Pressable, Modal, Image} from 'react-native';
import Icon1 from 'react-native-vector-icons/FontAwesome5';
const HomeModal = () => {
  // const [modalVisible, setModalVisible] = useStatete(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    let timer = setTimeout(() => {
      setOpen(true);
    }, 3000);
    return () => {
      clearTimeout(timer);
    };
  }, []);

  const handleClickTimes = () => {
    setOpen(!open);
    return;
  };
  return (
    <>
      <View style={styles.centeredView}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={open}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
            open(!setOpen);
          }}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Image
                style={{width: 20, height: 50, resizeMode: 'contain'}}
                style={styles.tinyLogo}
                source={require('../../assets/images/sl.jpg')}
              />
            </View>
            <Pressable
              style={[styles.btnModal, styles.buttonClose]}
              onPress={() => handleClickTimes()}>
              <Text style={styles.closeModal}>
                <Icon1 name="times" style={styles.iconTimes} />
              </Text>
            </Pressable>
          </View>
        </Modal>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  tinyLogo: {
    width: 200,
    height: 350,
  },
});

export default HomeModal;
