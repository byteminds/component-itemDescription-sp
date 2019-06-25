const mongoose = require('mongoose');
const { save } = require('./save');
const { Description } = require('./schema');

mongoose.connect('mongodb://localhost/itemDescription', {useNewUrlParser: true});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'mongoose connection error'));
db.once('open', () => {
  save();
  console.log('SUCCESS: mongoDB connection');
});

const allItemDescriptions = (id, callback) => {
  Description
    .aggregate()
    .sample(1)
    .exec((err, data) => {
      return err ?
      callback(err, null) :
      callback(null, data);
    });
};

module.exports = {
  allItemDescriptions,
}