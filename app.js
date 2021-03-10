const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const indexRouter = require('./routes/index');

global.appRoot = path.resolve(__dirname);

const app = express();
app.use(cors());

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// parse requests of content-type: application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: false}));

// parse requests of content-type: application/json
app.use(bodyParser.json({limit: '10mb'}));

app.use(express.static(path.join(__dirname, 'public')));

// index route
app.get('/', (req, res) => {
	res.json({message: 'Rest API for dynamic screen management'});
});

app.use('/', indexRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
	res.status(404).json({status: false, message: '404! Not Found'});
});

// error handler
app.use(function(err, req, res, next) {
	res.status(400).json({status: false, message: '400! Bad Request', error: err.errors});
});

app.listen(process.env.PORT || '8000', () => {
	console.log(`Server is running on port: ${process.env.PORT || '8000'}`);
});
