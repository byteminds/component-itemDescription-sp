const express = require('express');
const favicon = require('serve-favicon');
const { allItemDescriptions } = require('../database/save');
const path = require('path');
const app = express();
const port = 3003;

app.use(favicon(path.join(__dirname, '../client/dist', 'favicon.ico')));

app.get('/', (req, res) => {
  res.send('Hello, please redirect to /(insert id number)');
});

app.use(express.static(path.join(__dirname, '../client/dist')));

app.use('/:id', express.static(path.join(__dirname, '../client/dist')));

app.get('/descriptions/:id', (req, res) => {
  let id = req.params.id;
  
  allItemDescriptions(id, (err, data) => {
    return err ?
    res.sendStatus(400) :
    res.send(data);
  });
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});