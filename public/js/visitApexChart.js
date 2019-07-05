//Create Graph Using Apex Chart Library
import ApexCharts from 'apexcharts'
let options = {
	chart:{
		type:'line'
	},
	series:[{
		name:'Number Of Visits',
		data:[10,35,27,50,10,77,80,93,20,101,120,33]
	}],
	xaxis:{
		title:{
			text:'Month'
		},
		categories:['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']
	}

}

let chart = new ApexCharts(document.querySelector("#graph"),options);
chart.render();