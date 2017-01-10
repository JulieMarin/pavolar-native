// const convertTime = (timeString, dateString, gmt = '-5') => {
//   let hour = timeString.substring(0, 2);
//   let minutes = timeString.substring(2, 4);
//   let day = dateString.substring(0, 2);
//   let month = dateString.substring(2, 4,)
//   let year = new Date.getFullYear().toString();
//   let packagedDateTime = new Date('01 03 2017 10:00:00 GMT-5')
//   return packagedDateTime
// };

import moment from 'moment';


const getDuration = () => {
  // get the current time so we know which offset to take (DST is such bullkitten)
  var now = moment.utc();
  // get the zone offsets for this time, in minutes
  var NewYork_tz_offset = moment.tz.zone("America/New_York").offset(now);
  var HongKong_tz_offset = moment.tz.zone("Asia/Hong_Kong").offset(now);
  // calculate the difference in hours
  console.log((NewYork_tz_offset - HongKong_tz_offset) / 60);
}
