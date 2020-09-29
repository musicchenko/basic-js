const CustomError = require("../extensions/custom-error");

const N = 26;

class VigenereCipheringMachine {
  constructor (type = true) {
    this.type = type;
  }
  encrypt(message, key) {
    if(typeof message === "undefined" || typeof key === "undefined") throw Error;
    message = message.toString().toUpperCase();
    key = key.toString().toUpperCase();
    let result = '';
    let index = 0;
    let num = 0;
    let c = '';
    for (let i = 0; i < message.length; i++) {
      num = ((message[i].charCodeAt(0) + key[index].charCodeAt(0)) % N) + 65;
      if(message[i].charCodeAt(0) >= 65 && message[i].charCodeAt(0) <= 90) {
        c = String.fromCharCode(num);
      }
      else {
        c = message[i]
        index--;
      }
      result += c;
      if (index === key.length - 1) {
        index = 0;
      }
      else {
        index++;
      }
    }
    if(this.type === false) {
      return result.split('').reverse().join('');
    }
    return result;
  }

  decrypt(message, key) {
    if(typeof message === "undefined" || typeof key === "undefined") throw Error;
    message = message.toString().toUpperCase();
    key = key.toString().toUpperCase();
    let result = '';
    let index = 0;
    let num = 0;
    let c = '';
    for (let i = 0; i < message.length; i++) {
      num = ((message[i].charCodeAt(0) + N - key[index].charCodeAt(0)) % N) + 65;
      if(message[i].charCodeAt(0) >= 65 && message[i].charCodeAt(0) <= 90) {
        c = String.fromCharCode(num);
      }
      else {
        c = message[i]
        index--;
      }
      result += c;
      if (index === key.length - 1) {
        index = 0;
      }
      else {
        index++;
      }
    }
    if(this.type === false) {
      return result.split('').reverse().join('');
    }
  return result;
  }
}

module.exports = VigenereCipheringMachine;
