import * as moment from 'moment-timezone';
import axios from 'axios';

export const searchTimeZone = (airportCode) => {
  let API_KEY = '93ea2d20-0965-4c51-8ffc-14201aa2bb17'
  let URI = `https://iatacodes.org/api/v6/airports?api_key=${API_KEY}&code=`;
  return axios.get(URI + airportCode);
};

const getSegmentDuration = (dateTime) => {
  var departure = moment.tz(departDateTime, timeZone);
  var arrival = moment.tz(arriveDateTime, timeZone);
  var duration = moment.duration(arrival.diff(departure));
  let hours = duration._data.hours.toString();
  let minutes = duration._data.minutes.toString();
  return (hours + 'h' + ' ' + minutes + '' + 'min');
}

export const extractTravelInfo = (flightDetails) => {
  return (
    flightDetails.map(({dateTime, location}) => {
      let departLocation = location[0].locationId;
      let arriveLocation = location[1].locationId;
      axios.all([searchTimeZone(departLocation), searchTimeZone(arriveLocation)])
        .then((responses) => { repackageInfo(responses, dateTime) })
    })
  )
};

const repackageInfo = (responses, dateTime) => {
    dateTime.departTimezone = responses[0].data.response[0].timezone;
    dateTime.arriveTimezone = responses[1].data.response[0].timezone;
};







export const getTotalFlightDuration = (segment) => {
  let travelCollection = extractTravelInfo(segment);
  Promise.all(
    travelCollection.map((dateTime) => {
      let {
        departLocation,
        arriveLocation
      } = dateTime;

      // let departDateTime = formatTimeTime(departureTime, departureDate);
      // let arrivalDateTime = formatTimeTime(arrivalTime, arrivalDate);
      return getTimezones(departLocation, arriveLocation);
    })
  ).then((res) => { packageTravelInfo(res, travelCollection)})
};

const getTimezones = (departLocation, arriveLocation) => {
  return axios.all([searchTimeZone(departLocation), searchTimeZone(arriveLocation)])
};


// depart.data.response[0].timezone;

const formatTimeTime = (time, date) => {
  let hour = time.substring(0, 2);
  let minutes = time.substring(2, 4);
  let day = date.substring(0, 2);
  let month = date.substring(2, 4,);
  let currentYear = new Date;
  let year = currentYear.getFullYear().toString();
  return new Date(`${month} ${day} ${year} ${hour}:${minutes}:00`);
};

// "2014-06-01 12:00"
