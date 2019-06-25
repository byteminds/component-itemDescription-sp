const mongoose = require('mongoose');
const { saveSchema } = require('./save');
const { Description } = require('./schema');

mongoose.connect('mongodb://localhost/itemDescription', {useNewUrlParser: true});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'mongoose connection error'));

db.once('open', () => {
  saveSchema().save()
    .then( () => {
      db.close();
      console.log('SUCCESS: save to MongoDB');
    })
    .catch( () => console.log('ERROR: save to MongoDB') )
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
  db,
}