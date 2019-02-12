// Define the Dependent Packages 
const express = require('express'),
    path = require('path'),
    bodyParser = require('body-parser'),
    cors = require('cors'),
    mongoose = require('mongoose'),
    config = require('./config');
    resources = require('./resources/labels.json');
    routes = require('./routes');
mongoose.Promise = global.Promise;

///Connect to the Database using Mongoose
mongoose.connect(config.dbURL, { useNewUrlParser: true }).then(
  () => {console.log(resources.successMessages.dbConnect) },
  err => { console.log(resources.errorMessages.errorDBConnect+ err)}
);

const app = express();
app.use(bodyParser.json());
app.use(cors());
app.use('/', routes);
const port = process.env.PORT || 4000;

const server = app.listen(port, function(){
  console.log(resources.successMessages.listenPort + port);
});