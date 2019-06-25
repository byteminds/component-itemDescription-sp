const mongoose = require('mongoose');

const descriptionSchema = new mongoose.Schema({
  id: Number,
  productName: String,
  images: {
    mainImages: Array,
    stars: String,
    prime: String,
  },
  description: String,
  seller: String,
  numOfReviews: Number,
  numOfQAndA: Number,
  price: String,
  isPrime: String,
  otherCondition: String,
  otherSellers: String,
});

// Stretch - Add to Schema:
// images.alternateChoices = { key: Array }
// listPrice: String
// youSave: String
// hasAlternate: String


const Description = mongoose.model('Description', descriptionSchema);

module.exports = {
  Description,
};