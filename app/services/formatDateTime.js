export const formatTime = (date) => {
  let timeObj = new Date;
  let hour = date.slice(0, 2);
  let minutes = date.slice(2, 4);
  timeObj.setHours(hour);
  timeObj.setMinutes(minutes);
  return timeObj.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
};

export const formatAndGetTime = (date) => {
  let timeObj = new Date;
  let hour = date.slice(0, 2);
  let minutes = date.slice(2, 4);
  timeObj.setHours(hour);
  timeObj.setMinutes(minutes);
  return timeObj.getTime();
};
