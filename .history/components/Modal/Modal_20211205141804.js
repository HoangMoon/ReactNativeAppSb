import React, {useState, useEffect} from 'react';
import {StyleSheet, View, Text, Pressable, Modal, Image} from 'react-native';
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
              <Image source={require('../../assets/images/salm.jpeg')} />
            </View>
          </View>
          <Pressable
            style={[styles.btnModal, styles.buttonClose]}
            onPress={() => handleClickTimes()}>
            <Text style={styles.closeModal}>X</Text>
          </Pressable>
        </Modal>
      </View>
    </>
  );
};

const styles = StyleSheet.create({});

export default HomeModal;
