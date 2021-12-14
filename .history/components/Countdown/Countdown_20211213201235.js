import React, {useState, useEffect} from 'react';
import CountDown from 'react-native-countdown-component';
import moment from 'moment';
const Countdown = () => {
  const [totalDuration, setTotalDuration] = useState(0);

  // let countDate = new Date("August 31, 2021 00:00:00 ").getTime();
  useEffect(() => {
    var date = moment().utcOffset('+07:00').format('YYYY-MM-DD hh:mm:ss');
    var expirydate = new Date('December 13, 2021 0:00:00').getTime();
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
        style={{marginLeft: 30}}
        size={16}
        until={totalDuration}
        onFinish={() => alert('Finished')}
        digitStyle={{
          backgroundColor: '#FFF',
          borderWidth: 2,
          borderColor: '#eee',
        }}
        digitTxtStyle={{color: '#1D976C'}}
        timeLabelStyle={{color: 'red', fontWeight: 'bold'}}
        separatorStyle={{color: '#1D976C'}}
        timeToShow={['D', 'H', 'M', 'S']}
        timeLabels={{m: null, s: null, d: null, h: null}}
        showSeparator
      />
    </>
  );
};

export default Countdown;
