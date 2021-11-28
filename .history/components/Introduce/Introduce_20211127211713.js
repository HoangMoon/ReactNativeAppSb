import React from 'react';
import {Dimensions, View} from 'react-native';

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

const WIDTH = Dimensions.get("window").width;
const WIDTH = Dimensions.get("window").width;

const Introduce = () => {
  return (
    <>
      <View style={styles.introList}></View>
    </>
  );
};

export default Introduce;
