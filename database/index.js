const mongoose = require('mongoose');
const { saveSchema } = require('./save');
const { Description } = require('./schema');

mongoose.connect('mongodb://localhost/itemDescription', {useNewUrlParser: true});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'mongoose connection error'));

db.once('open', () => {
  saveSchema().save()
    .then( () => {
      console.log('SUCCESS: save to MongoDB');
      db.close( () => console.log('SUCCESS: close connection after save to MongoDB'));
    })
    .catch( () => console.log('ERROR: save to MongoDB') );
});

module.exports = {
  db,
}