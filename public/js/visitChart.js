//Configure Demo data to use

//configure chart title
var title = {
   text: 'Visit History'   
};

//Chart Subtitle
var subtitle = {
   text: 'Showing Patient Visits Across a Selected Period'
};

//X Axis Data
var xAxis = {
   categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'
      ,'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
};


//Y Axis Data
var yAxis = {
   title: {
      text: 'Temperature (\xB0C)'
   },
   plotLines: [{
      value: 0,
      width: 1,
      color: '#808080'
   }]
};  

//tooltip

var tooltip = {
   valueSuffix: '\xB0C'
}

//Create legend
var legend = {
   layout: 'vertical',
   align: 'right',
   verticalAlign: 'middle',
   borderWidth: 0
};

//Graph Demo Data

var series = [
   {
      name: 'Tokyo',
      data: [7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6]
   }, 
   {
      name: 'New York',
      data: [-0.2, 0.8, 5.7, 11.3, 17.0, 22.0, 24.8, 24.1, 20.1, 14.1, 8.6, 2.5]
   }, 
   {
      name: 'Berlin',
      data: [-0.9, 0.6, 3.5, 8.4, 13.5, 17.0, 18.6, 17.9, 14.3, 9.0, 3.9, 1.0]
   }, 
   {
      name: 'London',
      data: [3.9, 4.2, 5.7, 8.5, 11.9, 15.2, 17.0, 16.6, 14.2, 10.3, 6.6, 4.8]
   }
];


var json = {};

json.title = title;
json.subtitle = subtitle;
json.xAxis = xAxis;
json.yAxis = yAxis;
json.tooltip = tooltip;
json.legend = legend;
json.series = series;

$('#graph').highcharts(json);


//Create Graph Using Apex Chart
