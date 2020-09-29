const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  constructor () {
    this.count = 1;
  }
  calculateDepth(arr, num = 1) {
    for (let i = 0; i < arr.length; i++) {
      if(typeof arr[i] === 'object') {
        num++;
        if (num > this.count) {
          this.count++;
        }
        this.calculateDepth(arr[i], num);
        num--;
      }
    }
    let result = this.count;
    if(num === 1) {
      this.count = 1;
    }
    return result;
  }
};
