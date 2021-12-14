import React from 'react';
import CountDown from 'react-native-countdown-component';
const Countdown = () => {
  return (
    <>
      <CountDown
        size={30}
        until={1}
        onFinish={() => alert('Finished')}
        digitStyle={{
          backgroundColor: '#FFF',
          borderWidth: 2,
          borderColor: '#1CC625',
        }}
        digitTxtStyle={{color: '#1CC625'}}
        timeLabelStyle={{color: 'red', fontWeight: 'bold'}}
        separatorStyle={{color: '#1CC625'}}
        timeToShow={['D', 'H', 'M', 'S']}
        timeLabels={{m: 'MM', s: 'SS', d: 'DD', h: 'HH'}}
        showSeparator
      />
    </>
  );
};

export default Countdown;
