const mongoose = require('mongoose');
const { Description } = require('./schema');
const { arrLenByIndex, objLenByIndex, randomPriceWithDecimals } = require('../helpers');
const _ = require('lodash');

const fakeProductName = () => {
  let data = [
    'Apple iPhone 6, GSM Unlocked, 64GB - Space Gray (Renewed)',
    'DJI Mavic Pro Fly More Combo',
    'Systane Lubricant Eye Gel Drops, 10-mL',
    'Apple Magic Keyboard (Wireless, Rechargable) (US English) - Silver',
    'Hydro Flask 40 oz Double Wall Vacuum Insulated Stainless Steel Leak Proof Sports Water Bottle, Wide Mouth with BPA Free Flex Cap, Black',
    'Blue Yeti USB Microphone - Blackout Edition',
    'ALTOIDS Smalls Peppermint Breath Mints, 0.37-Ounce Tin (Pack of 9)',
    'Sony Noise Cancelling Headphones WH1000XM3: Wireless Bluetooth Over the Ear Headphones with Mic and Alexa voice control - Industry Leading Active Noise Cancellation - Black',
    'Samsung Galaxy S10+ Factory Unlocked Phone with 128GB, (U.S. Warranty) - Prism Black',
    'Samsung Qi Certified Fast Charge Wireless Charging Convertible Stand/Pad - US Version - Black - EP-PG950TBEGUS',
  ];

  return data[_.random(arrLenByIndex(data))];
};

const fakeMainImages = () => {
  let data = {
    'mavic pro': [
      'https://byteminds-item-images.s3-us-west-1.amazonaws.com/1a.jpg',
      'https://byteminds-item-images.s3-us-west-1.amazonaws.com/1b.jpg',
      'https://byteminds-item-images.s3-us-west-1.amazonaws.com/1c.jpg',
      'https://byteminds-item-images.s3-us-west-1.amazonaws.com/1d.jpg',
    ],
    'iPhone6': [
      'https://byteminds-item-images.s3-us-west-1.amazonaws.com/2a.jpg',
      'https://byteminds-item-images.s3-us-west-1.amazonaws.com/2b.png',
      'https://byteminds-item-images.s3-us-west-1.amazonaws.com/2c.jpeg',
    ],
    'hydroflask black': [
      'https://byteminds-item-images.s3-us-west-1.amazonaws.com/3a.jpg',
      'https://byteminds-item-images.s3-us-west-1.amazonaws.com/3b.jpg',
    ],
    'systane ultra': [
      'https://byteminds-item-images.s3-us-west-1.amazonaws.com/4a.jpg',
      'https://byteminds-item-images.s3-us-west-1.amazonaws.com/4b.jpg',
    ],
    'yeti black': [
      'https://byteminds-item-images.s3-us-west-1.amazonaws.com/5a.jpg',
      'https://byteminds-item-images.s3-us-west-1.amazonaws.com/5b.png',
    ],
    'altoids mini 9 pack': [
      'https://byteminds-item-images.s3-us-west-1.amazonaws.com/6a.jpg',
      'https://byteminds-item-images.s3-us-west-1.amazonaws.com/6b.jpg',
      'https://byteminds-item-images.s3-us-west-1.amazonaws.com/6c.jpg',
    ],
    'sony earphones': [
      'https://byteminds-item-images.s3-us-west-1.amazonaws.com/7a.jpg',
      'https://byteminds-item-images.s3-us-west-1.amazonaws.com/7b.jpg',
      'https://byteminds-item-images.s3-us-west-1.amazonaws.com/7c.jpg',
      'https://byteminds-item-images.s3-us-west-1.amazonaws.com/7d.jpg',
      'https://byteminds-item-images.s3-us-west-1.amazonaws.com/7e.jpg',
    ],
    's10+ black': [
      'https://byteminds-item-images.s3-us-west-1.amazonaws.com/8a.jpg',
      'https://byteminds-item-images.s3-us-west-1.amazonaws.com/8b.jpg',
      'https://byteminds-item-images.s3-us-west-1.amazonaws.com/8c.jpg',
    ],
    'samsung fast wireless charger': [
      'https://byteminds-item-images.s3-us-west-1.amazonaws.com/9a.jpg',
      'https://byteminds-item-images.s3-us-west-1.amazonaws.com/9b.jpg',
      'https://byteminds-item-images.s3-us-west-1.amazonaws.com/9c.jpg',
      'https://byteminds-item-images.s3-us-west-1.amazonaws.com/9d.png',
      'https://byteminds-item-images.s3-us-west-1.amazonaws.com/9e.jpeg',
    ],
    'apple wireless keyboard': [
      'https://byteminds-item-images.s3-us-west-1.amazonaws.com/10a.jpg',
      'https://byteminds-item-images.s3-us-west-1.amazonaws.com/10b.jpg',
    ],
  };

  return Object.values(data)[_.random(objLenByIndex(data))];
};

const fakeStars = () => {
  let data = {
    '3.5 stars': 'https://byteminds-stock-images.s3-us-west-1.amazonaws.com/3.5stars.png',
    '4 stars': 'https://byteminds-stock-images.s3-us-west-1.amazonaws.com/4stars.jpeg',
    '4.5 stars': 'https://byteminds-stock-images.s3-us-west-1.amazonaws.com/4.5stars.svg',
    '5 stars': 'https://byteminds-stock-images.s3-us-west-1.amazonaws.com/5stars.png',
  };

  return Object.values(data)[_.random(objLenByIndex(data))];
};

const fakePrime = 'https://byteminds-stock-images.s3-us-west-1.amazonaws.com/prime.jpg';

const fakeDescription = () => {

  let data = [
    'Dolore stumptown viral hella, ennui messenger bag vegan salvia affogato irure consectetur esse cronut. Stumptown blog skateboard hammock woke celiac cloud bread subway tile ramps ugh single-origin coffee hot chicken velit. Austin everyday carry fugiat ipsum. Fashion axe artisan disrupt, blue bottle blog coloring book pork belly pariatur before they sold out officia swag ut snackwave tattooed.',
    'Unicorn tempor kombucha thundercats, iceland irony 8-bit scenester ipsum nisi chicharrones locavore. Affogato fugiat beard pabst, keytar sint pork belly meh iPhone et heirloom poke. Nostrud occaecat officia sunt, hashtag ullamco authentic irony. +1 schlitz retro green juice wolf chartreuse sriracha kogi kickstarter. Lumbersexual iPhone eiusmod man bun asymmetrical selfies sriracha salvia ea poutine hella voluptate chartreuse. Unicorn in 90\'s offal readymade. Hell of art party fingerstache skateboard, lyft DIY velit adipisicing mixtape photo booth YOLO dolor mollit kinfolk.',
    'Beard green juice pitchfork irure. Pinterest chia cillum next level. Fixie wayfarers aliqua in, whatever vaporware jianbing sriracha keytar pickled aesthetic cliche. Roof party deep v ut tousled do banh mi pop-up direct trade ut tattooed. Af yuccie ea, affogato tofu hexagon sint hot chicken hammock. La croix snackwave deserunt cloud bread, velit kogi skateboard hashtag chambray occupy single-origin coffee proident. Proident vice cornhole pop-up, selfies elit YOLO synth blog pug aesthetic four dollar toast consectetur master cleanse.',
    'Forage pitchfork edison bulb lo-fi health goth chillwave quis minim. Kickstarter VHS labore, nulla street art quis succulents ut 8-bit velit vinyl try-hard nostrud actually vape. Fam DIY copper mug anim, cold-pressed jianbing roof party biodiesel. Disrupt organic occaecat hell of paleo banh mi. Labore disrupt listicle skateboard artisan elit veniam next level. Minim farm-to-table qui tofu, wayfarers meggings fanny pack cillum trust fund irure cliche shabby chic hexagon reprehenderit actually. Everyday carry fanny pack copper mug ut, sed occupy cliche.',
    'Kale chips mumblecore pabst ipsum salvia paleo. Tumeric iceland coloring book austin, small batch four loko lo-fi scenester +1 dolor viral bitters marfa eiusmod nulla. Voluptate master cleanse iceland fugiat, flannel exercitation post-ironic yr banh mi. Dolore mollit aute swag anim, id tumeric scenester microdosing PBR&B keffiyeh green juice taxidermy +1 normcore. Seitan meh enamel pin pickled flannel. Trust fund forage art party viral banh mi jean shorts taiyaki in pour-over organic sint before they sold out kickstarter echo park.',
    'Aute exercitation chartreuse coloring book seitan occaecat austin ullamco. Edison bulb labore dreamcatcher readymade tumeric chambray vaporware cillum distillery non consequat quinoa chicharrones irony prism. Master cleanse ut velit tacos, flexitarian vexillologist microdosing magna. Schlitz cred ad fixie cardigan. Brunch qui slow-carb VHS, letterpress cray food truck occupy chartreuse culpa. Live-edge aesthetic laboris viral ut. Cillum single-origin coffee keytar everyday carry chicharrones activated charcoal butcher enim iPhone voluptate glossier ex.',
    'Flexitarian four loko in tousled. Hell of consequat occaecat, unicorn live-edge pop-up green juice farm-to-table health goth snackwave. Green juice typewriter helvetica, flexitarian chillwave viral PBR&B in la croix etsy edison bulb. Photo booth yuccie enim kitsch aute celiac.',
    'Fashion axe ut waistcoat +1 brooklyn leggings ipsum bicycle rights chicharrones asymmetrical minim twee. Before they sold out slow-carb lyft, cillum exercitation bespoke banh mi. You probably haven\'t heard of them messenger bag sartorial, palo santo dolore umami lorem intelligentsia readymade laborum hoodie. Fam microdosing keffiyeh artisan, trust fund hashtag nostrud cloud bread cliche activated charcoal ullamco gochujang food truck blue bottle. Jianbing culpa kinfolk bushwick sartorial hot chicken dreamcatcher chillwave lorem post-ironic tacos brunch.',
    'Sed shabby chic letterpress, pok pok subway tile proident chambray thundercats drinking vinegar twee laboris craft beer voluptate. Gluten-free ut beard gochujang yr taiyaki cray XOXO jean shorts fanny pack. Tofu hell of poutine meh, ramps hexagon wayfarers id trust fund pour-over chicharrones. Yr eiusmod copper mug helvetica succulents minim subway tile, glossier edison bulb photo booth paleo.',
    'Subway tile minim non, letterpress brooklyn mixtape ethical chambray tofu seitan fingerstache laboris. Keytar put a bird on it aesthetic dolor kogi gochujang tofu. Fingerstache portland locavore, paleo small batch austin letterpress flexitarian adaptogen in proident plaid cillum. Lumbersexual keffiyeh forage coloring book flannel beard succulents artisan disrupt.',
  ];

  let splitData = data[_.random(arrLenByIndex(data))].split('.');
  return splitData.slice(0, splitData.length - 1);
};

const fakeSeller = () => {
  let data = [
    'Samsung',
    'DJI',
    'Apple',
    'Hydroflask',
    'Alcon',
    'Yeti',
    'Altoids',
    'Sony',
    'Amazon',
  ];

  return data[_.random(arrLenByIndex(data))];
};

const fakeNumOfReviews = () => {
  let data = _.random(500, 3000).toString();

  if (Number(data) > 999) {
    return `${data[0]},${data.slice(1)}`
  }
  return data;
}

const fakeNumOfQAndA = () => _.random(20, 100);

const fakePrice = () => randomPriceWithDecimals(40, 800);

const fakeIsPrime = () => {
  let primeDeterminator = _.random(0, 1);

  return primeDeterminator === 1 ?
  fakePrime :
  '& FREE Shipping';
};

const fakeOtherCondition = () => {
  let data = [
    'New',
    'Renewed',
    'Used'
  ];

  return data[_.random(arrLenByIndex(data))];
}

const fakeOtherSellers = () => `(${_.random(1, 30)}) from ${randomPriceWithDecimals(40, 800)}`;

const saveSchema = async () => {
  let id = 1;

  let schema = async () => {
    while(id < 101) {

      let allDescription = new Description({
        id: id++,
        productName:fakeProductName(),
        images: {
          mainImages: fakeMainImages(),
          stars: fakeStars(),
          prime: fakePrime,
        },
        description: fakeDescription(),
        seller: fakeSeller(),
        numOfReviews: fakeNumOfReviews(),
        numOfQAndA: fakeNumOfQAndA(),
        price: fakePrice(),
        isPrime: fakeIsPrime(),
        otherCondition: fakeOtherCondition(),
        otherSellers: fakeOtherSellers(),
      });

      allDescription.save()
    }
  }
  await schema()
    .then( () => console.log('SUCCESS: save to MongoDB') )
    .catch( err => console.log('ERROR: save to MongoDB', err) );
};

const allItemDescriptions = (id, callback) => {

  mongoose.connect('mongodb://localhost/itemDescription', { useNewUrlParser: true });

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
  saveSchema,
  allItemDescriptions,
};