const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  if (typeof date === 'undefined') {
    return 'Unable to determine the time of year!';
  }
  if (isNaN(date.getTime())) {
    throw new CustomError('Not implemented');
  }
  let month = date.getMonth();
  let season = '';
  if (month >= 2 && month < 5) {
    season = 'spring';
  }
  else if (month >= 5 && month < 8) {
    season = 'summer';
  }
  else if (month >= 8 && month < 11) {
    season = 'autumn';
  }
  else if ((month >= 0 && month < 2) || month === 11) {
    season = 'winter';
  }
  return season;
};
