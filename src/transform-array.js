const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if(!Array.isArray(arr)) throw new Error('Not array');
  let transformedArray = arr;
  let sequences = ["--discard-next", "--discard-prev", "--double-next", "--double-prev"];
  transformedArray = transformedArray.map(value => {
    if(sequences.includes(value)) return null;
    else return value;
  });
  let i = 0;
  while(i < arr.length) {
    switch(arr[i]) {
      case "--discard-next": {
        if(transformedArray.length > i+1) {
          transformedArray.splice(i+1, 1, null);
        }
        break;
      }
      case "--discard-prev": {
        if(i-1 >= 0) {
          transformedArray.splice(i-1, 1, null);
        }
        break;
      }
      case "--double-next": {
        if(i+1 < transformedArray.length) {
          transformedArray.splice(i, 1, transformedArray[i+1]);
        }
        break;
      }
      case "--double-prev": {
        if(i-1 >= 0) {
          transformedArray.splice(i, 1, transformedArray[i-1]);
        }
        break;
      }
    }
    i++;
  }
  return transformedArray.filter(value => value !== null);
};
