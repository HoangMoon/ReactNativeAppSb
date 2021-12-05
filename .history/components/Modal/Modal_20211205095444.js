import React, {useState} from 'react';
import {StyleSheet, View, Text, Pressable} from 'react-native';
const Modal = () => {
  // const [modalVisible, setModalVisible] = useStatete(false);
  const [open, setOpen] = useState(false);
  return (
    <>
      <View style={styles.centeredView}>
        <Modal
          animationType="slide"
          // transparent={true}
          visible={setOpen}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
            // setModalVisible(!modalVisible);
          }}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>Hello World!</Text>
              {/* <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => open(!modalVisible)}>
                <Text style={styles.textStyle}>Hide Modal</Text>
              </Pressable> */}
            </View>
          </View>
        </Modal>
        {/* <Pressable
          style={[styles.button, styles.buttonOpen]}
          onPress={() => setModalVisible(true)}>
          <Text style={styles.textStyle}>Show Modal</Text>
        </Pressable> */}
        {setTimeout(() => {
          setOpen(true);
        }, 1000)}
      </View>
    </>
  );
};

const styles = StyleSheet.create({});

export default Modal;
