const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {

  chain:[],

  getLength() {
   return this.chain.length;
  },

  addLink(value = '') {
    this.chain.push(String(value));
    return this;
  },

  removeLink(position) {
    if (!Number.isInteger(position) || ((position - 1) >= this.chain.length) || ((position -1) < 0)){
      this.chain = [];
      throw new Error(`You can't remove incorrect link!`)
    }
    this.chain = this.chain.filter((_, idx) => position - 1 !== idx);
    return this;
  },

  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    const chainOutput = this.chain.map(item => `( ${item} )`);
    this.chain = [];
    return `${chainOutput.join('~~')}`;
  }
};

module.exports = {
  chainMaker
};
