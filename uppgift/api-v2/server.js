const app = require('./app');
const mongoose = require('mongoose');
require('dotenv').config();

const PORT = process.env.PORT || 9999;

const serverURI = 'http://localhost:' + PORT
const mongoURI = 'mongodb+srv://davidea:bytmig123@cluster0.3i6wk.mongodb.net/REST?retryWrites=true&w=majority';

app.listen(PORT, () => console.log('Server running at: ' + serverURI));

mongoose
.set('useCreateIndex', true)
.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}, () => console.log('connected to database'))