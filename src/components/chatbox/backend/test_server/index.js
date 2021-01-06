const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
const {
  saveMsg,
  fetchChatsByUser,
  fetchChatsByAgent,
  fetchMsgById,
} = require('../chatboxDB.js');

const app = express();
const PORT = 4000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/msg/client', function (req, res) {
  fetchChatsByUser(req.query)
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      res.sendStatus(500);
      console.log(err);
    });
});

app.get('/msg/agent', function (req, res) {
  fetchChatsByAgent(req.query)
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      res.sendStatus(500);
      console.log(err);
    });
});

app.post('/msg', function (req, res) {
  console.log(req);

  // conAgent(req.query)
  //   .then(() => {
  //     res.sendStatus(200);
  //   })
  //   .catch((err) => {
  //     res.sendStatus(500);
  //   });
});

app.listen(PORT, () => console.log(`listening on port ${PORT}!`));