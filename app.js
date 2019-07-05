//import ApexCharts from 'apexcharts'
var express    =    require('express');
var app        =    express();
var bodyParser = require('body-parser');
var path = require('path');
app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());
const port = 3000;
// configure middleware
app.use(express.static(path.join(__dirname, 'public')));
app.set('port', process.env.port || port); // set express to use this port
app.set('views', __dirname + '/views'); // set express to look in this 
//folder to render toyota form
app.set('css', __dirname + '/css'); // set express to look in this 
//folder to render css files
app.set('js', __dirname + '/js'); // set express to look in this folder 
//to render js files
app.set('img', __dirname + '/img'); //render images using express


//login form route
app.get('/', function(request, response) {
response.sendFile(path.join(__dirname + '/views/dash.html'));
});

//login form route
app.get('/chart', function(request, response) {
response.sendFile(path.join(__dirname + '/views/chart.html'));
});

//use Highcharts module
// Load Highcharts

///var Highcharts = require('highcharts');

// Alternatively, this is how to load Highstock. Highmaps is similar.
// var Highcharts = require('highcharts/highstock');
 
// Load the exporting module, and initialize it.

///require('highcharts/modules/exporting')(Highcharts);
 
// Generate the chart

///Highcharts.chart('container', {
  // options - see https://api.highcharts.com/highcharts
///});


app.listen(port,()=>{
	//console.log('Running on Port : ${port}'+${port});
	console.log(`Server running on port: ${port}`);
});

