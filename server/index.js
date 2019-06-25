const express = require('express');
const favicon = require('serve-favicon');
const bodyParser = require('body-parser');
const { allItemDescriptions } = require('../database/index');
const path = require('path');
const app = express();
const port = 3003;

app.use(bodyParser.json());

app.use(favicon(path.join(__dirname, '../client/src', 'favicon.ico')));

app.use(express.static(path.join(__dirname, '../client/dist')));

app.get('/api/:id', (req, res) => {
  console.log('req params', req.params)
  let id = req.params.id;

  allItemDescriptions(id, (err, data) => {
    return err ?
    res.sendStatus(400) :
    res.send(data);
  })
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});