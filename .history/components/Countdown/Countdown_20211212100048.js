import React from 'react';
import CountDown from 'react-native-countdown-component';
const Countdown = () => {
  return (
    <>
      <CountDown
        until={60 * 10 + 30}
        size={30}
        onFinish={() => alert('Finished')}
        digitStyle={{backgroundColor: '#FFF'}}
        digitTxtStyle={{color: '#1CC625'}}
        timeToShow={['M', 'S']}
        timeLabels={{m: 'MM', s: 'SS'}}
      />
    </>
  );
};

export default Countdown;
