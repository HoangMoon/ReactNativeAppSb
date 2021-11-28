import React, {useState} from 'react';
import {
  Dimensions,
  SafeAreaView,
  ScrollView,
  View,
  StyleSheet,
  onchange,
  Image,
  Text,
} from 'react-native';

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
  const [imgActive, setimgActive] = useState(0);

  // onchange = nativeEvent => {
  //   if (nativeEvent) {
  //     const slide = Math.ceil(
  //       nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width,
  //     );
  //     if (!slide != imgActive) {
  //       setimgActive(slide);
  //     }
  //   }
  // };
  return (
    <>
      <SafeAreaView style={styles.container}>
        <View style={styles.wrap}>
          <ScrollView
            // onScroll={({nativeEvent}) => onchange(nativeEvent)}
            // showsHorizontalScrollIndicator={false}
            // pagingEnabled
            // horizontal
            style={styles.wrap}>
            {dataImage &&
              dataImage.length > 0 &&
              dataImage.map((item, index) => {
                <>
                  <View style={styles.introList} key={item.id}>
                    <View>
                      <Image source={require('../../assets/images/logo.png')} />
                    </View>
                    <View style={styles.introItem}>
                      <Image source={item.introImage} />
                      <Text style={styles.introTitle}>{item.imgTitle}</Text>
                      <Text style={styles.introDesc}>{item.introDesc}</Text>
                    </View>
                  </View>
                </>;
              })}
          </ScrollView>
          <View style={styles.wrapDot}>
            {dataImage.map((item, index) => (
              <>
                <Text
                  style={imgActive === index ? styles.dotActive : styles.dot}>
                  ●
                </Text>
              </>
            ))}
          </View>
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  wrap: {
    width: WIDTH,
    height: HEIGHT * 0.25,
  },
  wrapDot: {
    position: 'absolute',
    bottom: 0,
    flexDirection: 'row',
    alignSelf: 'center',
  },
  dotActive: {
    margin: 3,
    color: 'black',
  },
  dot: {
    margin: 3,
    color: '#888',
  },
});

export default Introduce;
