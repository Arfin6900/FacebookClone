// create a new Date object
const noww = new Date();

// extract the current hour and minute
let hours = noww.getHours();
const minutes = noww.getMinutes();

// determine if it's AM or PM
const ampm = hours >= 12 ? 'PM' : 'AM';

// convert to 12-hour format
hours = hours % 12;
hours = hours ? hours : 12; // the hour '0' should be '12'

// create the formatted time string
const time = hours + ':' + (minutes < 10 ? '0' : '') + minutes + ' ' + ampm;

// log the result
console.log(time);
export default time