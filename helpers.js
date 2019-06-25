const _ = require('lodash');

const arrLenByIndex = arr => arr.length - 1;

const objLenByIndex = obj => Object.keys(obj).length - 1;

const randomPriceWithDecimals = (min, max) => `$${_.random(min, max)}${_.random(1, true).toString().slice(1, 4)}`;

module.exports = {
  arrLenByIndex,
  objLenByIndex,
  randomPriceWithDecimals,
};