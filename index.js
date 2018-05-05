const express = require('express');
//import express from 'express';
const app = express();

app.get('/', (req, res) => {
  res.send({ hi: 'there' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT);

// app = expres app to register this route handler with
// get = watch incoming request with this method
// '/' = watch request trying to access '/'
// req = object representing the incoming request
// res = object representing the outgoing response
//res.send({hi:'there'}) = immediately send some json back to who ever made this request
