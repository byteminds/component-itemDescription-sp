const mongoose = require('mongoose');
const { saveSchema } = require('./save');

mongoose.connect('mongodb://database/itemDescription', {useNewUrlParser: true});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'mongoose connection error'));

db.once('open', async () => {
  await saveSchema();
  db.close( () => console.log('SUCCESS-description: close connection after save to MongoDB'));
});

module.exports = {
  db,
}