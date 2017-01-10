import * as moment from 'moment-timezone';
import axios from 'axios';

export const searchTimeZone = (airportCode) => {
  let API_KEY = '93ea2d20-0965-4c51-8ffc-14201aa2bb17'
  let URI = `https://iatacodes.org/api/v6/airports?api_key=${API_KEY}&code=`;
  return axios.get(URI + airportCode);
};

const getDuration = (dateTime) => {
  var departure = moment.tz(departDateTime, timeZone);
  var arrival = moment.tz(arriveDateTime, timeZone);
  var duration = moment.duration(arrival.diff(departure));
  let hours = duration._data.hours.toString();
  let minutes = duration._data.minutes.toString();
  return (hours + 'h' + ' ' + minutes + '' + 'min');
}

export const extractDateTimes = (flightDetails) => {
  return (
    flightDetails.map(({dateTime, location}) => {
      return {
        departureDate: dateTime.departureDate,
        departureTime: dateTime.departureTime,
        arrivalDate: dateTime.arrivalDate,
        arrivalTime: dateTime.arrivalTime,
        departLocation: location[0].locationId,
        arriveLocation: location[1].locationId
      }
    })
  )
};
