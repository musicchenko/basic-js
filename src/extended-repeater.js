const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  let result = "";
  if(typeof options === "object") {
    let repeatTimes = typeof options.repeatTimes === "number" ? options.repeatTimes : 0;
    let separator = options.separator ? options.separator : "+";
    let addition = options.addition;
    let additionRepeatTimes = typeof options.additionRepeatTimes === 'number' ? options.additionRepeatTimes : 0;
    let additionSeparator = options.additionSeparator ? options.additionSeparator : "|";
    if(repeatTimes > 0) {
      for(let i = 0; i < repeatTimes; i++) {
        result += str;
        for(let j = 0; j < additionRepeatTimes; j++) {
          result += addition;
          if(j != additionRepeatTimes-1) {
            result += additionSeparator;
          }
        }
        if(i !== repeatTimes-1) {
          result += separator;
        }
      }
    }
    else {
      result = str + addition;
    }
  }
  return result;
};
