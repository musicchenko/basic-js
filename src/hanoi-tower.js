const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  let turnsCount = Math.pow(2, disksNumber)-1;
  let turnsTime = Math.floor(turnsCount/turnsSpeed*60*60);
  return {
    "turns": turnsCount,
    "seconds": turnsTime
  };
};
