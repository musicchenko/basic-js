const CustomError = require("../extensions/custom-error");

const chainMaker = {
  chain: [],
  length: 0,
  getLength() {
    return this.length;
  },
  addLink(value) {
    if (value === null)
      value = 'null';
    else {
      value = value.toString();
    }
    if(this.chain.length === 0) {
      this.chain.push(`( ${value} )`);
      this.length++;
      return chainMaker;
    }
    else {
      this.chain.push(`~~( ${value} )`);
      this.length++;
      return chainMaker;
    }
  },
  removeLink(position) {
    if (typeof position !== 'number'|| position <= 0) {
        this.chain = [];
        throw new Error('Not implemented');
      }
  if (this.chain.length !== 0) {
    if (position === 1) {
    this.chain.splice(0, 1);
    this.chain[0] = this.chain[0].substr(2, this.chain[0].length - 2);
    return chainMaker;
  }
  else {
        this.chain.splice(position - 1, 1);
        return chainMaker;
      }
    }
    return chainMaker;
  },
  reverseChain() {
    if (this.chain.length >= 2) {
        this.chain.reverse();
        this.chain[0] = this.chain[0].substr(2, this.chain[0].length - 2);
        this.chain[this.chain.length - 1] = "~~" + this.chain[this.chain.length - 1];
      }
      return chainMaker;
    },
      finishChain() {
      let str = this.chain.join('');
      this.chain = [];
      return str;
    }
};

module.exports = chainMaker;
