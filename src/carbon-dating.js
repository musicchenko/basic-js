const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15;
const HALF_LIFE_PERIOD= 5730;
const LN_2 = 0.693;

module.exports = function dateSample(sampleActivity) {
  if(typeof sampleActivity !== "string") return false;
  let N = parseFloat(sampleActivity);
  if (isNaN(N)) return false;
  let k = LN_2 / HALF_LIFE_PERIOD;
  let t = Math.log(MODERN_ACTIVITY / N) / k;
  return t > 0 && t !== Infinity ? Math.ceil(t) : false;
};
