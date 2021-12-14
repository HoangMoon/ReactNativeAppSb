import React, {useState, useEffect} from 'react';
import CountDown from 'react-native-countdown-component';
const Countdown = () => {
  const [totalDuration, setTotalDuration] = useState(0);

  useEffect(() => {
    var date = moment().utcOffset('+05:30').format('YYYY-MM-DD hh:mm:ss');
    var expirydate = '2020-12-23 04:00:45';
    var diffr = moment.duration(moment(expirydate).diff(moment(date)));
    var hours = parseInt(diffr.asHours());
    var minutes = parseInt(diffr.minutes());
    var seconds = parseInt(diffr.seconds());
    var d = hours * 60 * 60 + minutes * 60 + seconds;
    setTotalDuration(d);
  }, []);
  return (
    <>
      <CountDown
        size={30}
        until={totalDuration}
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
        timeLabels={{m: null, s: null}}
        showSeparator
      />
    </>
  );
};

export default Countdown;
