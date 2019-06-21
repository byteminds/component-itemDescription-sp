const express = require('express');
const favicon = require('serve-favicon');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const port = 3000;

app.use(favicon(path.join(__dirname, '../client/src', 'favicon.ico')));

app.use(express.static(path.join(__dirname, '../client/dist')));



app.listen(port, () => {
  console.log(`listening on port ${port}`);
})