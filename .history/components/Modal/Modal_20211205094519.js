import React, {useState} from 'react';
import {StyleSheet, View, Text} from 'react-native';
const Modal = () => {
  // const [modalVisible, setModalVisible] = useStatete(false);
  const [open, setOpen] = useState(false);
  setTimeout(() => {
    setOpen(true);
  }, 2000);
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
              <Text style={styles.modalText}>Hello World!</Text>
              {/* <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => setModalVisible(!modalVisible)}>
                <Text style={styles.textStyle}>Hide Modal</Text>
              </Pressable> */}
            </View>
          </View>
        </Modal>
      </View>
    </>
  );
};

const styles = StyleSheet.create({});

export default Modal;
