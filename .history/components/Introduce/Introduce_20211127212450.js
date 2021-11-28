import React from 'react';
import {Dimensions, SafeAreaView, View} from 'react-native';

const dataImage = [
  {
    id: 1,
    imgTitle: 'Good Coffee',
    imgDesc:
      ' “To inspire and nurture the human spirit–one person, one cup and one neighborhood at a time.”',
    introImage: require('../../assets/images/intro1.png'),
  },
  {
    id: 2,
    imgTitle: 'Good Coffee',
    imgDesc:
      ' “To inspire and nurture the human spirit–one person, one cup and one neighborhood at a time.”',
    introImage: require('../../assets/images/intro2.png'),
  },
  {
    id: 3,
    imgTitle: 'Good Coffee',
    imgDesc:
      ' “To inspire and nurture the human spirit–one person, one cup and one neighborhood at a time.”',
    introImage: require('../../assets/images/intro3.png'),
  },
];

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

const Introduce = () => {
  
  return (
    <>
      <SafeAreaView style={styles.container}>

      </SafeAreaView>
      <View style={styles.introList}></View>
    </>
  );
};

const styles = StyleSheet.create({
  container : {
    flex: 1,
  }
});

export default Introduce;
