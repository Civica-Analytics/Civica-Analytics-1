window.onload = function () {
var chart = new CanvasJS.Chart("chartContainer1", {
	animationEnabled: true,
	zoomEnabled: true,
	theme: "light2",
	toolTip: {
      	  borderThickness: 10,
      	  borderColor: "black",
      	  cornerRadius: 15,
          fontColor: "white",
          backgroundColor: "black"
    	},
	axisX: {
			title:"Republican Lean (%)",
			suffix: "%",
			minimum: 0,
			maximum: 100,
			gridThickness: 1,
			margin: 10
	},
	axisY:{
		title: "Voter Turnout (in %)",
        suffix: "%",
        minimum: 0,
		maximum: 100
    },
    legend:{
		cursor: "pointer",
		fontSize: 16,
		itemclick: toggleDataSeries
    },
	data: [{
		type: "bubble",
		name: "Age",
		toolTipContent: "<b>{name}</b><br/> % Republican: {x}% <br/> Voter Turnout: {y}% <br/> Size (millions): {z}",
        showInLegend: true,
		markerBorderColor: "black",
        markerBorderThickness: 1,
        dataPoints: [ //https://www.pewresearch.org/fact-tank/2018/04/03/millennials-approach-baby-boomers-as-largest-generation-in-u-s-electorate/
             //x = % republican, y = % voter turnout, z = size (millions) -->
            { x: 32, y: 51, z:30, name:"18-35 (Millennial)" },
			{ x: 43, y: 63, z:25, name:"36-51 (Gen X)" },
			{ x: 46, y: 69, z:31, name:"52-70 (Boomer)" },
			{ x: 52, y: 70, z:13, name:"71+ (Silent/Greatest)"}
		]
    },
    {
        type: "bubble",
		name: "Education Level",
		toolTipContent: "<b>{name}</b><br/> % Republican: {x}% <br/> Voter Turnout: {y}% <br/> Size (millions): {z}",
        showInLegend: true,
        dataPoints: [ 
             /*x = % republican, y = % voter turnout, z = size (percentage of population) 
			 x: https://www.pewresearch.org/politics/2015/04/07/party-identification-trends-1992-2014/#education
			 y: https://www.census.gov/library/stories/2019/04/behind-2018-united-states-midterm-election-turnout.html
			 z: https://www.census.gov/library/stories/2019/02/number-of-people-with-masters-and-phd-degrees-double-since-2000.html 
			 */
			{ x: 37, y: 42.1, z:29.5, name:"High school diploma or less" },
			{ x: 42, y: 54.5, z:26.4, name:"Some college or associate's degree" },
            { x: 40, y: 65.7, z:20.5, name:"Bachelor's degree"},
            { x: 36, y: 74.0, z:12, name:"Advanced degree"}
		]
    },
	{
        type: "bubble",
		name: "Race",
		toolTipContent: "<b>{name}</b><br/> % Republican: {x}% <br/> Voter Turnout: {y}% <br/> Size (millions): {z}",
        showInLegend: true,
        dataPoints: [ 
             /*x = % republican, y = % voter turnout, z = size (percentage of population) 
			 x: https://www.pewresearch.org/politics/2018/03/20/1-trends-in-party-affiliation-among-demographic-groups/
			 y: https://www.census.gov/library/stories/2019/04/behind-2018-united-states-midterm-election-turnout.html 
			 z: https://www.pewresearch.org/fact-tank/2019/05/01/historic-highs-in-2018-voter-turnout-extended-across-racial-and-ethnic-groups/
			 */
			{ x: 51, y: 57.5, z:72.8, name:"White" },
			{ x: 8, y: 51.4, z:11.9, name:"Black" },
            { x: 27, y: 40.2, z:3.5, name:"Asian"},
            { x: 28, y: 40.4, z:9.6, name:"Hispanic/miscellaneous"}
		]
    }]
});
chart.render();

function toggleDataSeries(e){
	if (typeof(e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
		e.dataSeries.visible = false;
	}
	else{
		e.dataSeries.visible = true;
	}
	chart.render();
}

    var chart = new CanvasJS.Chart("chartContainer2", {
	animationEnabled: true,
	zoomEnabled: true,
	theme: "light2",
	toolTip: {
      	  borderThickness: 10,
      	  borderColor: "black",
      	  cornerRadius: 15,
          fontColor: "white",
          backgroundColor: "black"
    	},
	axisX: {
			title:"Democratic Lean (%)",
			suffix: "%",
			minimum: 0,
			maximum: 100,
			gridThickness: 1,
			margin: 10
	},
	axisY:{
		title: "Voter Turnout (in %)",
        suffix: "%",
        minimum: 0,
		maximum: 100
    },
    legend:{
		cursor: "pointer",
		fontSize: 16,
		itemclick: toggleDataSeries
    },
	data: [{
		type: "bubble",
		name: "Age",
		toolTipContent: "<b>{name}</b><br/> % Democratic: {x}% <br/> Voter Turnout: {y}% <br/> Size (millions): {z}",
        showInLegend: true,
	markerBorderColor: "black",
        markerBorderThickness: 1,
        dataPoints: [ //
             /*x = % dem, y = % voter turnout, z = size (millions) 
             x: https://www.pewresearch.org/politics/2018/03/20/1-trends-in-party-affiliation-among-demographic-groups/
             z: https://www.pewresearch.org/fact-tank/2018/04/03/millennials-approach-baby-boomers-as-largest-generation-in-u-s-electorate/ 
             */
            { x: 59, y: 51, z:30, name:"18-35 (Millennial)" },
			{ x: 48, y: 63, z:25, name:"36-51 (Gen X)" },
			{ x: 48, y: 69, z:31, name:"52-70 (Boomer)" },
			{ x: 43, y: 70, z:13, name:"71+ (Silent/Greatest)"}
		]
    },
    {
        type: "bubble",
		name: "Education Level",
		toolTipContent: "<b>{name}</b><br/> % Democratic: {x}% <br/> Voter Turnout: {y}% <br/> Size (millions): {z}",
        showInLegend: true,
        dataPoints: [ 
             /*x = % dem, y = % voter turnout, z = size (percentage of population) 
			 x: https://www.pewresearch.org/politics/2015/04/07/party-identification-trends-1992-2014/#education
			 y: https://www.census.gov/library/stories/2019/04/behind-2018-united-states-midterm-election-turnout.html
			 z: https://www.census.gov/library/stories/2019/02/number-of-people-with-masters-and-phd-degrees-double-since-2000.html 
			 */
			{ x: 47, y: 42.1, z:29.5, name:"High school diploma or less" },
			{ x: 47, y: 54.5, z:26.4, name:"Some college or associate's degree" },
            { x: 52, y: 65.7, z:20.5, name:"Bachelor's degree"},
            { x: 56, y: 74.0, z:12, name:"Advanced degree"}
		]
    },
	{
        type: "bubble",
		name: "Race",
		toolTipContent: "<b>{name}</b><br/> % Democratic: {x}% <br/> Voter Turnout: {y}% <br/> Size (millions): {z}",
        showInLegend: true,
        dataPoints: [ 
             /*x = % dem, y = % voter turnout, z = size (percentage of population) 
			 x: https://www.pewresearch.org/politics/2018/03/20/1-trends-in-party-affiliation-among-demographic-groups/
			 y: https://www.census.gov/library/stories/2019/04/behind-2018-united-states-midterm-election-turnout.html 
			 z: https://www.pewresearch.org/fact-tank/2019/05/01/historic-highs-in-2018-voter-turnout-extended-across-racial-and-ethnic-groups/
			 */
			{ x: 43, y: 57.5, z:72.8, name:"White" },
			{ x: 84, y: 51.4, z:11.9, name:"Black" },
            { x: 65, y: 40.2, z:3.5, name:"Asian"},
            { x: 63, y: 40.4, z:9.6, name:"Hispanic/miscellaneous"}
		]
    }
    ]
});
chart.render();

function toggleDataSeries(e){
	if (typeof(e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
		e.dataSeries.visible = false;
	}
	else{
		e.dataSeries.visible = true;
	}
	chart.render();
}

    var chart = new CanvasJS.Chart("chartContainer3", {
        animationEnabled: true,
        zoomEnabled: true,
        theme: "light2",
        axisX: {
            title:"Voter Turnout",
            suffix: "%",
            gridThickness: 1
        },
        axisY:{
            title: "Democratic Lean",
            suffix: "%",
            minimum: -20
        },
        toolTip: {
                borderThickness: 10,
                borderColor: "black",
                cornerRadius: 15,
              fontColor: "white",
              backgroundColor: "black"
        },
        data: [{
            type: "bubble",
            markerBorderColor: "black",
            markerBorderThickness: 3,
            toolTipContent: "<b>{state}</b><br/>Democrat: {democrat}% <br/>Republican: {republican}%<br/>Population: {z}<br/>GDP per capita: {gdp}<br/>Percent white: {white}%",
            dataPoints: [
            {
                state: "Massachusetts",
                democrat: 56,
                republican: 27,
                y: 29,
                z: 6949503,
                x: 53.7,
                gdp: 75258,
                white: 71,
                color: "blue"
            },
            {
                state: "Vermont",
                democrat: 55,
                republican: 30,
                y: 25,
                z: 623989,
                x: 54.8,
                gdp: 48855,
                white: 93,
                color: "blue"
            },	
            {
                state: "Hawaii",
                democrat: 54,
                republican: 29,
                y: 25,
                z: 1415872,
                x: 38.7,
                gdp: 58981,
                white: 21,
                color: "blue"
            },	
            {
                state: "New York",
                democrat: 53,
                republican: 30,
                y: 23,
                z: 19453561,
                x: 44.8,
                gdp: 75131,
                white: 55,
                color: "blue"
            },	
            {
                state: "Maryland",
                democrat: 54,
                republican: 31,
                y: 23,
                z: 6045680,
                x: 53.5,
                gdp: 61926,
                white: 50,
                color: "blue"
            },
            {
                state: "California",
                democrat: 51,
                republican: 31,
                y: 20,
                z: 39512223,
                x: 48.3,
                gdp: 70662,
                white: 37,
                color: "blue"
            },
            {
                state: "Connecticut",
                democrat: 52,
                republican: 33,
                y: 19,
                z: 3565287,
                x: 54.2,
                gdp: 69789,
                white: 66,
                color: "blue"
            },
            {
                state: "Illinois",
                democrat: 50,
                republican: 34,
                y: 16,
                z: 12671821,
                x: 50.8,
                gdp: 61713,
                white: 61,
                color: "blue"
            },
            {
                state: "New Jersey",
                democrat: 50,
                republican: 35,
                y: 15,
                z: 8882190,
                x: 52.2,
                gdp: 63492,
                white: 55,
                color: "blue"
            },
            {
                state: "Washington",
                democrat: 50,
                republican: 35,
                y: 15,
                z: 7614893,
                x: 57.4,
                gdp: 69761,
                white: 68,
                color: "blue"
            },
            {
                state: "Maine",
                democrat: 50,
                republican: 37,
                y: 13,
                z: 1344212,
                x: 58.8,
                gdp: 43541,
                white: 93,
                color: "blue"
            },
            {
                state: "Delaware",
                democrat: 48,
                republican: 35,
                y: 13,
                z: 973764,
                x: 50.8,
                gdp: 64985,
                white: 62,
                color: "blue"
            },
            {
                state: "New Hampshire",
                democrat: 48,
                republican: 36,
                y: 12,
                z: 1316470,
                x: 53.3,
                gdp: 57272,
                white: 90,
                color: "blue"
            },
            {
                state: "New Mexico",
                democrat: 48,
                republican: 38,
                y: 10,
                z: 2096829,
                x: 46.5,
                gdp: 46304,
                white: 37,
                color: "blue"
            },
            {
                state: "Oregon",
                democrat: 47,
                republican: 38,
                y: 9,
                z: 4217737,
                x: 59.7,
                gdp: 52726,
                white: 75,
                color: "blue"
            },
            {
                state: "Minnesota",
                democrat: 46,
                republican: 38,
                y: 8,
                z: 5639632,
                x: 63.8,
                gdp: 60066,
                white: 80,
                color: "blue"
            },
            {
                state: "Rhode Island",
                democrat: 43,
                republican: 36,
                y: 7,
                z: 1059361,
                x: 47.0,
                gdp: 51963,
                white: 72,
                color: "blue"
            },
            {
                state: "Virginia",
                democrat: 46,
                republican: 39,
                y: 7,
                z: 8535519,
                x: 54.3,
                gdp: 56938,
                white: 62,
                color: "blue"
            },
            {
                state: "Colorado",
                democrat: 47,
                republican: 40,
                y: 7,
                z: 5758736,
                x: 60.0,
                gdp: 61311,
                white: 68,
                color: "blue"
            },
            {
                state: "Nevada",
                democrat: 45,
                republican: 38,
                y: 7,
                z: 3080156,
                x: 46.3,
                gdp: 50043,
                white: 49,
                color: "blue"
            },
            {
                state: "Pennsylvania",
                democrat: 46,
                republican: 40,
                y: 6,
                z: 12801989,
                x: 51.4,
                gdp: 56868,
                white: 76,
                color: "blue"
            },
            {
                state: "Michigan",
                democrat: 45,
                republican: 39,
                y: 6,
                z: 9986857,
                x: 56.5,
                gdp: 47448,
                white: 75,
                color: "blue"
            },
            {
                state: "Georgia",
                democrat: 43,
                republican: 42,
                y: 1,
                z: 10617423,
                x: 53.9,
                gdp: 50816,
                white: 52,
                color: "white"
            },
            {
                state: "Florida",
                democrat: 42,
                republican: 41,
                y: 1,
                z: 21477737,
                x: 53.6,
                gdp: 44267,
                white: 53,
                color: "white"
            },
            {
                state: "Wisconsin",
                democrat: 43,
                republican: 43,
                y: 0,
                z: 5822434,
                x: 61.4,
                gdp: 52534,
                white: 81,
                color: "white"
            },
            {
                state: "Iowa",
                democrat: 42,
                republican: 42,
                y: 0,
                z: 3155070,
                x: 57.6,
                gdp: 55051,
                white: 86,
                color: "white"
            },
            {
                state: "Arizona",
                democrat: 41,
                republican: 41,
                y: 0,
                z: 7278717,
                x: 46.9,
                gdp: 44161,
                white: 54,
                color: "white"
            },
            {
                state: "Nebraska",
                democrat: 42,
                republican: 43,
                y: -1,
                z: 1934408,
                x: 50.9,
                gdp: 59386,
                white: 79,
                color: "white"
            },
            {
                state: "North Carolina",
                democrat: 41,
                republican: 42,
                y: -1,
                z: 10488084,
                x: 48.2,
                gdp: 48496,
                white: 63,
                color: "white"
            },
            {
                state: "Kentucky",
                democrat: 42,
                republican: 45,
                y: -3,
                z: 4467673,
                x: 47.4,
                gdp: 42386,
                white: 85,
                color: "white"
            },
            {
                state: "Texas",
                democrat: 39,
                republican: 42,
                y: -3,
                z: 28995881,
                x: 45.6,
                gdp: 61682,
                white: 41,
                color: "white"
            },
            {
                state: "Ohio",
                democrat: 41,
                republican: 45,
                y: -4,
                z: 11689100,
                x: 50.2,
                gdp: 52664,
                white: 79,
                color: "white"
            },
            {
                state: "Montana",
                democrat: 39,
                republican: 46,
                y: -7,
                z: 1068778,
                x: 60.7,
                gdp: 44145,
                white: 86,
                color: "red"
            },
            {
                state: "Indiana",
                democrat: 38,
                republican: 46,
                y: -8,
                z: 6732219,
                x: 46.0,
                gdp: 49321,
                white: 79,
                color: "red"
            },
            {
                state: "Louisiana",
                democrat: 37,
                republican: 45,
                y: -8,
                z: 4648794,
                x: 43.4,
                gdp: 51729,
                white: 59,
                color: "red"
            },
            {
                state: "Oklahoma",
                democrat: 38,
                republican: 46,
                y: -8,
                z: 3956971,
                x: 41.9,
                gdp: 50876,
                white: 65,
                color: "red"
            },
            {
                state: "Missouri",
                democrat: 38,
                republican: 47,
                y: -9,
                z: 6137428,
                x: 53.3,
                gdp: 47407,
                white: 80,
                color: "red"
            },
            {
                state: "South Carolina",
                democrat: 37,
                republican: 47,
                y: -10,
                z: 5148714,
                x: 44.0,
                gdp: 41457,
                white: 64,
                color: "red"
            },
            {
                state: "South Dakota",
                democrat: 40,
                republican: 51,
                y: -11,
                z: 884659,
                x: 52.8,
                gdp: 52913,
                white: 82,
                color: "red"
            },
            {
                state: "Kansas",
                democrat: 36,
                republican: 47,
                y: -11,
                z: 2913314,
                x: 41.0,
                gdp: 53528,
                white: 76,
                color: "red"
            },
            {
                state: "West Virginia",
                democrat: 37,
                republican: 49,
                y: -12,
                z: 1792147,
                x: 41.7,
                gdp: 40265,
                white: 92,
                color: "red"
            },
            {
                state: "Mississippi",
                democrat: 36,
                republican: 48,
                y: -12,
                z: 2976149,
                x: 42.7,
                gdp: 35015,
                white: 57,
                color: "red"
            },
            {
                state: "Tennessee",
                democrat: 35,
                republican: 48,
                y: -13,
                z: 6833174,
                x: 44.2,
                gdp: 48440,
                white: 74,
                color: "red"
            },
            {
                state: "Arkansas",
                democrat: 35,
                republican: 48,
                y: -13,
                z: 3017825,
                x: 41.0,
                gdp: 39580,
                white: 72,
                color: "red"
            },
            {
                state: "Idaho",
                democrat: 34,
                republican: 50,
                y: -16,
                z: 1787065,
                x: 53.6,
                gdp: 40566,
                white: 82,
                color: "red"
            },
            {
                state: "Alabama",
                democrat: 35,
                republican: 52,
                y: -17,
                z: 4903185,
                x: 46.9,
                gdp: 41389,
                white: 66,
                color: "red"
            },
            {
                state: "Alaska",
                democrat: 33,
                republican: 51,
                y: -18,
                z: 731545,
                x: 54.5,
                gdp: 74422,
                white: 60,
                color: "red"
            },
            {
                state: "North Dakota",
                democrat: 30,
                republican: 55,
                y: -25,
                z: 762062,
                x: 57.9,
                gdp: 70991,
                white: 84,
                color: "red"
            },
            {
                state: "Utah",
                democrat: 28,
                republican: 56,
                y: -28,
                z: 3205958,
                x: 49.8,
                gdp: 51407,
                white: 78,
                color: "red"
            },
            {
                state: "Wyoming",
                democrat: 25,
                republican: 59,
                y: -34,
                z: 578759,
                x: 47.4,
                gdp: 67915,
                white: 84,
                color: "red"
            },
        ]}]
    });
    chart.render();

    var chart = new CanvasJS.Chart("chartContainer4", {
        animationEnabled: true,
        zoomEnabled: true,
        theme: "light2",
        axisX: {
            title:"Population",
            suffix: "",
            gridThickness: 1
        },
        axisY:{
            title: "Democratic Lean",
            suffix: "%",
            minimum: -20
        },
        toolTip: {
                borderThickness: 10,
                borderColor: "black",
                cornerRadius: 15,
              fontColor: "white",
              backgroundColor: "black"
        },
        data: [{
            type: "scatter",
            markerBorderColor: "black",
            markerBorderThickness: 1,
            toolTipContent: "<b>{state}</b><br/>Democrat: {democrat}% <br/>Republican: {republican}%<br/>Population: {z}<br/>GDP per capita: ${gdp}<br/>Percent white: {white}%",
            dataPoints: [
            {
                state: "Massachusetts",
                democrat: 56,
                republican: 27,
                y: 29,
                x: 6949503,
                turnout: 53.7,
                gdp: 75258,
                white: 71,
                color: "blue"
            },
            {
                state: "Vermont",
                democrat: 55,
                republican: 30,
                y: 25,
                x: 623989,
                turnout: 54.8,
                gdp: 48855,
                white: 93,
                color: "blue"
            },	
            {
                state: "Hawaii",
                democrat: 54,
                republican: 29,
                y: 25,
                x: 1415872,
                turnout: 38.7,
                gdp: 58981,
                white: 21,
                color: "blue"
            },	
            {
                state: "New York",
                democrat: 53,
                republican: 30,
                y: 23,
                x: 19453561,
                turnout: 44.8,
                gdp: 75131,
                white: 55,
                color: "blue"
            },	
            {
                state: "Maryland",
                democrat: 54,
                republican: 31,
                y: 23,
                x: 6045680,
                turnout: 53.5,
                gdp: 61926,
                white: 50,
                color: "blue"
            },
            {
                state: "California",
                democrat: 51,
                republican: 31,
                y: 20,
                x: 39512223,
                turnout: 48.3,
                gdp: 70662,
                white: 37,
                color: "blue"
            },
            {
                state: "Connecticut",
                democrat: 52,
                republican: 33,
                y: 19,
                x: 3565287,
                turnout: 54.2,
                gdp: 69789,
                white: 66,
                color: "blue"
            },
            {
                state: "Illinois",
                democrat: 50,
                republican: 34,
                y: 16,
                x: 12671821,
                turnout: 50.8,
                gdp: 61713,
                white: 61,
                color: "blue"
            },
            {
                state: "New Jersey",
                democrat: 50,
                republican: 35,
                y: 15,
                x: 8882190,
                turnout: 52.2,
                gdp: 63492,
                white: 55,
                color: "blue"
            },
            {
                state: "Washington",
                democrat: 50,
                republican: 35,
                y: 15,
                x: 7614893,
                turnout: 57.4,
                gdp: 69761,
                white: 68,
                color: "blue"
            },
            {
                state: "Maine",
                democrat: 50,
                republican: 37,
                y: 13,
                x: 1344212,
                turnout: 58.8,
                gdp: 43541,
                white: 93,
                color: "blue"
            },
            {
                state: "Delaware",
                democrat: 48,
                republican: 35,
                y: 13,
                x: 973764,
                turnout: 50.8,
                gdp: 64985,
                white: 62,
                color: "blue"
            },
            {
                state: "New Hampshire",
                democrat: 48,
                republican: 36,
                y: 12,
                x: 1316470,
                turnout: 53.3,
                gdp: 57272,
                white: 90,
                color: "blue"
            },
            {
                state: "New Mexico",
                democrat: 48,
                republican: 38,
                y: 10,
                x: 2096829,
                turnout: 46.5,
                gdp: 46304,
                white: 37,
                color: "blue"
            },
            {
                state: "Oregon",
                democrat: 47,
                republican: 38,
                y: 9,
                x: 4217737,
                turnout: 59.7,
                gdp: 52726,
                white: 75,
                color: "blue"
            },
            {
                state: "Minnesota",
                democrat: 46,
                republican: 38,
                y: 8,
                x: 5639632,
                turnout: 63.8,
                gdp: 60066,
                white: 80,
                color: "blue"
            },
            {
                state: "Rhode Island",
                democrat: 43,
                republican: 36,
                y: 7,
                x: 1059361,
                turnout: 47.0,
                gdp: 51963,
                white: 72,
                color: "blue"
            },
            {
                state: "Virginia",
                democrat: 46,
                republican: 39,
                y: 7,
                x: 8535519,
                turnout: 54.3,
                gdp: 56938,
                white: 62,
                color: "blue"
            },
            {
                state: "Colorado",
                democrat: 47,
                republican: 40,
                y: 7,
                x: 5758736,
                turnout: 60.0,
                gdp: 61311,
                white: 68,
                color: "blue"
            },
            {
                state: "Nevada",
                democrat: 45,
                republican: 38,
                y: 7,
                x: 3080156,
                turnout: 46.3,
                gdp: 50043,
                white: 49,
                color: "blue"
            },
            {
                state: "Pennsylvania",
                democrat: 46,
                republican: 40,
                y: 6,
                x: 12801989,
                turnout: 51.4,
                gdp: 56868,
                white: 76,
                color: "blue"
            },
            {
                state: "Michigan",
                democrat: 45,
                republican: 39,
                y: 6,
                x: 9986857,
                turnout: 56.5,
                gdp: 47448,
                white: 75,
                color: "blue"
            },
            {
                state: "Georgia",
                democrat: 43,
                republican: 42,
                y: 1,
                x: 10617423,
                turnout: 53.9,
                gdp: 50816,
                white: 52,
                color: "white"
            },
            {
                state: "Florida",
                democrat: 42,
                republican: 41,
                y: 1,
                x: 21477737,
                turnout: 53.6,
                gdp: 44267,
                white: 53,
                color: "white"
            },
            {
                state: "Wisconsin",
                democrat: 43,
                republican: 43,
                y: 0,
                x: 5822434,
                turnout: 61.4,
                gdp: 52534,
                white: 81,
                color: "white"
            },
            {
                state: "Iowa",
                democrat: 42,
                republican: 42,
                y: 0,
                x: 3155070,
                turnout: 57.6,
                gdp: 55051,
                white: 86,
                color: "white"
            },
            {
                state: "Arizona",
                democrat: 41,
                republican: 41,
                y: 0,
                x: 7278717,
                turnout: 46.9,
                gdp: 44161,
                white: 54,
                color: "white"
            },
            {
                state: "Nebraska",
                democrat: 42,
                republican: 43,
                y: -1,
                x: 1934408,
                turnout: 50.9,
                gdp: 59386,
                white: 79,
                color: "white"
            },
            {
                state: "North Carolina",
                democrat: 41,
                republican: 42,
                y: -1,
                x: 10488084,
                turnout: 48.2,
                gdp: 48496,
                white: 63,
                color: "white"
            },
            {
                state: "Kentucky",
                democrat: 42,
                republican: 45,
                y: -3,
                x: 4467673,
                turnout: 47.4,
                gdp: 42386,
                white: 85,
                color: "white"
            },
            {
                state: "Texas",
                democrat: 39,
                republican: 42,
                y: -3,
                x: 28995881,
                turnout: 45.6,
                gdp: 61682,
                white: 41,
                color: "white"
            },
            {
                state: "Ohio",
                democrat: 41,
                republican: 45,
                y: -4,
                x: 11689100,
                turnout: 50.2,
                gdp: 52664,
                white: 79,
                color: "white"
            },
            {
                state: "Montana",
                democrat: 39,
                republican: 46,
                y: -7,
                x: 1068778,
                turnout: 60.7,
                gdp: 44145,
                white: 86,
                color: "red"
            },
            {
                state: "Indiana",
                democrat: 38,
                republican: 46,
                y: -8,
                x: 6732219,
                turnout: 46.0,
                gdp: 49321,
                white: 79,
                color: "red"
            },
            {
                state: "Louisiana",
                democrat: 37,
                republican: 45,
                y: -8,
                x: 4648794,
                turnout: 43.4,
                gdp: 51729,
                white: 59,
                color: "red"
            },
            {
                state: "Oklahoma",
                democrat: 38,
                republican: 46,
                y: -8,
                x: 3956971,
                turnout: 41.9,
                gdp: 50876,
                white: 65,
                color: "red"
            },
            {
                state: "Missouri",
                democrat: 38,
                republican: 47,
                y: -9,
                x: 6137428,
                turnout: 53.3,
                gdp: 47407,
                white: 80,
                color: "red"
            },
            {
                state: "South Carolina",
                democrat: 37,
                republican: 47,
                y: -10,
                x: 5148714,
                turnout: 44.0,
                gdp: 41457,
                white: 64,
                color: "red"
            },
            {
                state: "South Dakota",
                democrat: 40,
                republican: 51,
                y: -11,
                x: 884659,
                turnout: 52.8,
                gdp: 52913,
                white: 82,
                color: "red"
            },
            {
                state: "Kansas",
                democrat: 36,
                republican: 47,
                y: -11,
                x: 2913314,
                turnout: 41.0,
                gdp: 53528,
                white: 76,
                color: "red"
            },
            {
                state: "West Virginia",
                democrat: 37,
                republican: 49,
                y: -12,
                x: 1792147,
                turnout: 41.7,
                gdp: 40265,
                white: 92,
                color: "red"
            },
            {
                state: "Mississippi",
                democrat: 36,
                republican: 48,
                y: -12,
                x: 2976149,
                turnout: 42.7,
                gdp: 35015,
                white: 57,
                color: "red"
            },
            {
                state: "Tennessee",
                democrat: 35,
                republican: 48,
                y: -13,
                x: 6833174,
                turnout: 44.2,
                gdp: 48440,
                white: 74,
                color: "red"
            },
            {
                state: "Arkansas",
                democrat: 35,
                republican: 48,
                y: -13,
                x: 3017825,
                turnout: 41.0,
                gdp: 39580,
                white: 72,
                color: "red"
            },
            {
                state: "Idaho",
                democrat: 34,
                republican: 50,
                y: -16,
                x: 1787065,
                turnout: 53.6,
                gdp: 40566,
                white: 82,
                color: "red"
            },
            {
                state: "Alabama",
                democrat: 35,
                republican: 52,
                y: -17,
                x: 4903185,
                turnout: 46.9,
                gdp: 41389,
                white: 66,
                color: "red"
            },
            {
                state: "Alaska",
                democrat: 33,
                republican: 51,
                y: -18,
                x: 731545,
                turnout: 54.5,
                gdp: 74422,
                white: 60,
                color: "red"
            },
            {
                state: "North Dakota",
                democrat: 30,
                republican: 55,
                y: -25,
                x: 762062,
                turnout: 57.9,
                gdp: 70991,
                white: 84,
                color: "red"
            },
            {
                state: "Utah",
                democrat: 28,
                republican: 56,
                y: -28,
                x: 3205958,
                turnout: 49.8,
                gdp: 51407,
                white: 78,
                color: "red"
            },
            {
                state: "Wyoming",
                democrat: 25,
                republican: 59,
                y: -34,
                x: 578759,
                turnout: 47.4,
                gdp: 67915,
                white: 84,
                color: "red"
            },
        ]}]
    });
    chart.render();

    var chart = new CanvasJS.Chart("chartContainer5", {
        animationEnabled: true,
        zoomEnabled: true,
        theme: "light2",
        axisX: {
            title:"GDP per capita",
            prefix: "$",
            gridThickness: 1
        },
        axisY:{
            title: "Democratic Lean",
            suffix: "%",
            minimum: -20
        },
        toolTip: {
                borderThickness: 10,
                borderColor: "black",
                cornerRadius: 15,
              fontColor: "white",
              backgroundColor: "black"
        },
        data: [{
            type: "bubble",
            markerBorderColor: "black",
            markerBorderThickness: 3,
            toolTipContent: "<b>{state}</b><br/>Democrat: {democrat}% <br/>Republican: {republican}%<br/>Population: {z}<br/>GDP per capita: ${x}<br/>Percent white: {white}%",
            dataPoints: [
            {
                state: "Massachusetts",
                democrat: 56,
                republican: 27,
                y: 29,
                z: 6949503,
                turnout: 53.7,
                x: 75258,
                white: 71,
                color: "blue"
            },
            {
                state: "Vermont",
                democrat: 55,
                republican: 30,
                y: 25,
                z: 623989,
                turnout: 54.8,
                x: 48855,
                white: 93,
                color: "blue"
            },	
            {
                state: "Hawaii",
                democrat: 54,
                republican: 29,
                y: 25,
                z: 1415872,
                turnout: 38.7,
                x: 58981,
                white: 21,
                color: "blue"
            },	
            {
                state: "New York",
                democrat: 53,
                republican: 30,
                y: 23,
                z: 19453561,
                turnout: 44.8,
                x: 75131,
                white: 55,
                color: "blue"
            },	
            {
                state: "Maryland",
                democrat: 54,
                republican: 31,
                y: 23,
                z: 6045680,
                turnout: 53.5,
                x: 61926,
                white: 50,
                color: "blue"
            },
            {
                state: "California",
                democrat: 51,
                republican: 31,
                y: 20,
                z: 39512223,
                turnout: 48.3,
                x: 70662,
                white: 37,
                color: "blue"
            },
            {
                state: "Connecticut",
                democrat: 52,
                republican: 33,
                y: 19,
                z: 3565287,
                turnout: 54.2,
                x: 69789,
                white: 66,
                color: "blue"
            },
            {
                state: "Illinois",
                democrat: 50,
                republican: 34,
                y: 16,
                z: 12671821,
                turnout: 50.8,
                x: 61713,
                white: 61,
                color: "blue"
            },
            {
                state: "New Jersey",
                democrat: 50,
                republican: 35,
                y: 15,
                z: 8882190,
                turnout: 52.2,
                x: 63492,
                white: 55,
                color: "blue"
            },
            {
                state: "Washington",
                democrat: 50,
                republican: 35,
                y: 15,
                z: 7614893,
                turnout: 57.4,
                x: 69761,
                white: 68,
                color: "blue"
            },
            {
                state: "Maine",
                democrat: 50,
                republican: 37,
                y: 13,
                z: 1344212,
                turnout: 58.8,
                x: 43541,
                white: 93,
                color: "blue"
            },
            {
                state: "Delaware",
                democrat: 48,
                republican: 35,
                y: 13,
                z: 973764,
                turnout: 50.8,
                x: 64985,
                white: 62,
                color: "blue"
            },
            {
                state: "New Hampshire",
                democrat: 48,
                republican: 36,
                y: 12,
                z: 1316470,
                turnout: 53.3,
                x: 57272,
                white: 90,
                color: "blue"
            },
            {
                state: "New Mexico",
                democrat: 48,
                republican: 38,
                y: 10,
                z: 2096829,
                turnout: 46.5,
                x: 46304,
                white: 37,
                color: "blue"
            },
            {
                state: "Oregon",
                democrat: 47,
                republican: 38,
                y: 9,
                z: 4217737,
                turnout: 59.7,
                x: 52726,
                white: 75,
                color: "blue"
            },
            {
                state: "Minnesota",
                democrat: 46,
                republican: 38,
                y: 8,
                z: 5639632,
                turnout: 63.8,
                x: 60066,
                white: 80,
                color: "blue"
            },
            {
                state: "Rhode Island",
                democrat: 43,
                republican: 36,
                y: 7,
                z: 1059361,
                turnout: 47.0,
                x: 51963,
                white: 72,
                color: "blue"
            },
            {
                state: "Virginia",
                democrat: 46,
                republican: 39,
                y: 7,
                z: 8535519,
                turnout: 54.3,
                x: 56938,
                white: 62,
                color: "blue"
            },
            {
                state: "Colorado",
                democrat: 47,
                republican: 40,
                y: 7,
                z: 5758736,
                turnout: 60.0,
                x: 61311,
                white: 68,
                color: "blue"
            },
            {
                state: "Nevada",
                democrat: 45,
                republican: 38,
                y: 7,
                z: 3080156,
                turnout: 46.3,
                x: 50043,
                white: 49,
                color: "blue"
            },
            {
                state: "Pennsylvania",
                democrat: 46,
                republican: 40,
                y: 6,
                z: 12801989,
                turnout: 51.4,
                x: 56868,
                white: 76,
                color: "blue"
            },
            {
                state: "Michigan",
                democrat: 45,
                republican: 39,
                y: 6,
                z: 9986857,
                turnout: 56.5,
                x: 47448,
                white: 75,
                color: "blue"
            },
            {
                state: "Georgia",
                democrat: 43,
                republican: 42,
                y: 1,
                z: 10617423,
                turnout: 53.9,
                x: 50816,
                white: 52,
                color: "white"
            },
            {
                state: "Florida",
                democrat: 42,
                republican: 41,
                y: 1,
                z: 21477737,
                turnout: 53.6,
                x: 44267,
                white: 53,
                color: "white"
            },
            {
                state: "Wisconsin",
                democrat: 43,
                republican: 43,
                y: 0,
                z: 5822434,
                turnout: 61.4,
                x: 52534,
                white: 81,
                color: "white"
            },
            {
                state: "Iowa",
                democrat: 42,
                republican: 42,
                y: 0,
                z: 3155070,
                turnout: 57.6,
                x: 55051,
                white: 86,
                color: "white"
            },
            {
                state: "Arizona",
                democrat: 41,
                republican: 41,
                y: 0,
                z: 7278717,
                turnout: 46.9,
                x: 44161,
                white: 54,
                color: "white"
            },
            {
                state: "Nebraska",
                democrat: 42,
                republican: 43,
                y: -1,
                z: 1934408,
                turnout: 50.9,
                x: 59386,
                white: 79,
                color: "white"
            },
            {
                state: "North Carolina",
                democrat: 41,
                republican: 42,
                y: -1,
                z: 10488084,
                turnout: 48.2,
                x: 48496,
                white: 63,
                color: "white"
            },
            {
                state: "Kentucky",
                democrat: 42,
                republican: 45,
                y: -3,
                z: 4467673,
                turnout: 47.4,
                x: 42386,
                white: 85,
                color: "white"
            },
            {
                state: "Texas",
                democrat: 39,
                republican: 42,
                y: -3,
                z: 28995881,
                turnout: 45.6,
                x: 61682,
                white: 41,
                color: "white"
            },
            {
                state: "Ohio",
                democrat: 41,
                republican: 45,
                y: -4,
                z: 11689100,
                turnout: 50.2,
                x: 52664,
                white: 79,
                color: "white"
            },
            {
                state: "Montana",
                democrat: 39,
                republican: 46,
                y: -7,
                z: 1068778,
                turnout: 60.7,
                x: 44145,
                white: 86,
                color: "red"
            },
            {
                state: "Indiana",
                democrat: 38,
                republican: 46,
                y: -8,
                z: 6732219,
                turnout: 46.0,
                x: 49321,
                white: 79,
                color: "red"
            },
            {
                state: "Louisiana",
                democrat: 37,
                republican: 45,
                y: -8,
                z: 4648794,
                turnout: 43.4,
                x: 51729,
                white: 59,
                color: "red"
            },
            {
                state: "Oklahoma",
                democrat: 38,
                republican: 46,
                y: -8,
                z: 3956971,
                turnout: 41.9,
                x: 50876,
                white: 65,
                color: "red"
            },
            {
                state: "Missouri",
                democrat: 38,
                republican: 47,
                y: -9,
                z: 6137428,
                turnout: 53.3,
                x: 47407,
                white: 80,
                color: "red"
            },
            {
                state: "South Carolina",
                democrat: 37,
                republican: 47,
                y: -10,
                z: 5148714,
                turnout: 44.0,
                x: 41457,
                white: 64,
                color: "red"
            },
            {
                state: "South Dakota",
                democrat: 40,
                republican: 51,
                y: -11,
                z: 884659,
                turnout: 52.8,
                x: 52913,
                white: 82,
                color: "red"
            },
            {
                state: "Kansas",
                democrat: 36,
                republican: 47,
                y: -11,
                z: 2913314,
                turnout: 41.0,
                x: 53528,
                white: 76,
                color: "red"
            },
            {
                state: "West Virginia",
                democrat: 37,
                republican: 49,
                y: -12,
                z: 1792147,
                turnout: 41.7,
                x: 40265,
                white: 92,
                color: "red"
            },
            {
                state: "Mississippi",
                democrat: 36,
                republican: 48,
                y: -12,
                z: 2976149,
                turnout: 42.7,
                x: 35015,
                white: 57,
                color: "red"
            },
            {
                state: "Tennessee",
                democrat: 35,
                republican: 48,
                y: -13,
                z: 6833174,
                turnout: 44.2,
                x: 48440,
                white: 74,
                color: "red"
            },
            {
                state: "Arkansas",
                democrat: 35,
                republican: 48,
                y: -13,
                z: 3017825,
                turnout: 41.0,
                x: 39580,
                white: 72,
                color: "red"
            },
            {
                state: "Idaho",
                democrat: 34,
                republican: 50,
                y: -16,
                z: 1787065,
                turnout: 53.6,
                x: 40566,
                white: 82,
                color: "red"
            },
            {
                state: "Alabama",
                democrat: 35,
                republican: 52,
                y: -17,
                z: 4903185,
                turnout: 46.9,
                x: 41389,
                white: 66,
                color: "red"
            },
            {
                state: "Alaska",
                democrat: 33,
                republican: 51,
                y: -18,
                z: 731545,
                turnout: 54.5,
                x: 74422,
                white: 60,
                color: "red"
            },
            {
                state: "North Dakota",
                democrat: 30,
                republican: 55,
                y: -25,
                z: 762062,
                turnout: 57.9,
                x: 70991,
                white: 84,
                color: "red"
            },
            {
                state: "Utah",
                democrat: 28,
                republican: 56,
                y: -28,
                z: 3205958,
                turnout: 49.8,
                x: 51407,
                white: 78,
                color: "red"
            },
            {
                state: "Wyoming",
                democrat: 25,
                republican: 59,
                y: -34,
                z: 578759,
                turnout: 47.4,
                x: 67915,
                white: 84,
                color: "red"
            },
        ]}]
    });
    chart.render();

    var chart = new CanvasJS.Chart("chartContainer6", {
        animationEnabled: true,
        zoomEnabled: true,
        theme: "light2",
        axisX: {
            title:"Percent of Whites",
            suffix: "%",
            gridThickness: 1
        },
        axisY:{
            title: "Democratic Lean",
            suffix: "%",
            minimum: -20
        },
        toolTip: {
                borderThickness: 10,
                borderColor: "black",
                cornerRadius: 15,
              fontColor: "white",
              backgroundColor: "black"
        },
        data: [{
            type: "bubble",
            markerBorderColor: "black",
            markerBorderThickness: 3,
            toolTipContent: "<b>{state}</b><br/>Democrat: {democrat}% <br/>Republican: {republican}%<br/>Population: {z}<br/>GDP per capita: ${gdp}<br/>Percent white: {x}%",
            dataPoints: [
            {
                state: "Massachusetts",
                democrat: 56,
                republican: 27,
                y: 29,
                z: 6949503,
                turnout: 53.7,
                gdp: 75258,
                x: 71,
                color: "blue"
            },
            {
                state: "Vermont",
                democrat: 55,
                republican: 30,
                y: 25,
                z: 623989,
                turnout: 54.8,
                gdp: 48855,
                x: 93,
                color: "blue"
            },	
            {
                state: "Hawaii",
                democrat: 54,
                republican: 29,
                y: 25,
                z: 1415872,
                turnout: 38.7,
                gdp: 58981,
                x: 21,
                color: "blue"
            },	
            {
                state: "New York",
                democrat: 53,
                republican: 30,
                y: 23,
                z: 19453561,
                turnout: 44.8,
                gdp: 75131,
                x: 55,
                color: "blue"
            },	
            {
                state: "Maryland",
                democrat: 54,
                republican: 31,
                y: 23,
                z: 6045680,
                turnout: 53.5,
                gdp: 61926,
                x: 50,
                color: "blue"
            },
            {
                state: "California",
                democrat: 51,
                republican: 31,
                y: 20,
                z: 39512223,
                turnout: 48.3,
                gdp: 70662,
                x: 37,
                color: "blue"
            },
            {
                state: "Connecticut",
                democrat: 52,
                republican: 33,
                y: 19,
                z: 3565287,
                turnout: 54.2,
                gdp: 69789,
                x: 66,
                color: "blue"
            },
            {
                state: "Illinois",
                democrat: 50,
                republican: 34,
                y: 16,
                z: 12671821,
                turnout: 50.8,
                gdp: 61713,
                x: 61,
                color: "blue"
            },
            {
                state: "New Jersey",
                democrat: 50,
                republican: 35,
                y: 15,
                z: 8882190,
                turnout: 52.2,
                gdp: 63492,
                x: 55,
                color: "blue"
            },
            {
                state: "Washington",
                democrat: 50,
                republican: 35,
                y: 15,
                z: 7614893,
                turnout: 57.4,
                gdp: 69761,
                x: 68,
                color: "blue"
            },
            {
                state: "Maine",
                democrat: 50,
                republican: 37,
                y: 13,
                z: 1344212,
                turnout: 58.8,
                gdp: 43541,
                x: 93,
                color: "blue"
            },
            {
                state: "Delaware",
                democrat: 48,
                republican: 35,
                y: 13,
                z: 973764,
                turnout: 50.8,
                gdp: 64985,
                x: 62,
                color: "blue"
            },
            {
                state: "New Hampshire",
                democrat: 48,
                republican: 36,
                y: 12,
                z: 1316470,
                turnout: 53.3,
                gdp: 57272,
                x: 90,
                color: "blue"
            },
            {
                state: "New Mexico",
                democrat: 48,
                republican: 38,
                y: 10,
                z: 2096829,
                turnout: 46.5,
                gdp: 46304,
                x: 37,
                color: "blue"
            },
            {
                state: "Oregon",
                democrat: 47,
                republican: 38,
                y: 9,
                z: 4217737,
                turnout: 59.7,
                gdp: 52726,
                x: 75,
                color: "blue"
            },
            {
                state: "Minnesota",
                democrat: 46,
                republican: 38,
                y: 8,
                z: 5639632,
                turnout: 63.8,
                gdp: 60066,
                x: 80,
                color: "blue"
            },
            {
                state: "Rhode Island",
                democrat: 43,
                republican: 36,
                y: 7,
                z: 1059361,
                turnout: 47.0,
                gdp: 51963,
                x: 72,
                color: "blue"
            },
            {
                state: "Virginia",
                democrat: 46,
                republican: 39,
                y: 7,
                z: 8535519,
                turnout: 54.3,
                gdp: 56938,
                x: 62,
                color: "blue"
            },
            {
                state: "Colorado",
                democrat: 47,
                republican: 40,
                y: 7,
                z: 5758736,
                turnout: 60.0,
                gdp: 61311,
                x: 68,
                color: "blue"
            },
            {
                state: "Nevada",
                democrat: 45,
                republican: 38,
                y: 7,
                z: 3080156,
                turnout: 46.3,
                gdp: 50043,
                x: 49,
                color: "blue"
            },
            {
                state: "Pennsylvania",
                democrat: 46,
                republican: 40,
                y: 6,
                z: 12801989,
                turnout: 51.4,
                gdp: 56868,
                x: 76,
                color: "blue"
            },
            {
                state: "Michigan",
                democrat: 45,
                republican: 39,
                y: 6,
                z: 9986857,
                turnout: 56.5,
                gdp: 47448,
                x: 75,
                color: "blue"
            },
            {
                state: "Georgia",
                democrat: 43,
                republican: 42,
                y: 1,
                z: 10617423,
                turnout: 53.9,
                gdp: 50816,
                x: 52,
                color: "white"
            },
            {
                state: "Florida",
                democrat: 42,
                republican: 41,
                y: 1,
                z: 21477737,
                turnout: 53.6,
                gdp: 44267,
                x: 53,
                color: "white"
            },
            {
                state: "Wisconsin",
                democrat: 43,
                republican: 43,
                y: 0,
                z: 5822434,
                turnout: 61.4,
                gdp: 52534,
                x: 81,
                color: "white"
            },
            {
                state: "Iowa",
                democrat: 42,
                republican: 42,
                y: 0,
                z: 3155070,
                turnout: 57.6,
                gdp: 55051,
                x: 86,
                color: "white"
            },
            {
                state: "Arizona",
                democrat: 41,
                republican: 41,
                y: 0,
                z: 7278717,
                turnout: 46.9,
                gdp: 44161,
                x: 54,
                color: "white"
            },
            {
                state: "Nebraska",
                democrat: 42,
                republican: 43,
                y: -1,
                z: 1934408,
                turnout: 50.9,
                gdp: 59386,
                x: 79,
                color: "white"
            },
            {
                state: "North Carolina",
                democrat: 41,
                republican: 42,
                y: -1,
                z: 10488084,
                turnout: 48.2,
                gdp: 48496,
                x: 63,
                color: "white"
            },
            {
                state: "Kentucky",
                democrat: 42,
                republican: 45,
                y: -3,
                z: 4467673,
                turnout: 47.4,
                gdp: 42386,
                x: 85,
                color: "white"
            },
            {
                state: "Texas",
                democrat: 39,
                republican: 42,
                y: -3,
                z: 28995881,
                turnout: 45.6,
                gdp: 61682,
                x: 41,
                color: "white"
            },
            {
                state: "Ohio",
                democrat: 41,
                republican: 45,
                y: -4,
                z: 11689100,
                turnout: 50.2,
                gdp: 52664,
                x: 79,
                color: "white"
            },
            {
                state: "Montana",
                democrat: 39,
                republican: 46,
                y: -7,
                z: 1068778,
                turnout: 60.7,
                gdp: 44145,
                x: 86,
                color: "red"
            },
            {
                state: "Indiana",
                democrat: 38,
                republican: 46,
                y: -8,
                z: 6732219,
                turnout: 46.0,
                gdp: 49321,
                x: 79,
                color: "red"
            },
            {
                state: "Louisiana",
                democrat: 37,
                republican: 45,
                y: -8,
                z: 4648794,
                turnout: 43.4,
                gdp: 51729,
                x: 59,
                color: "red"
            },
            {
                state: "Oklahoma",
                democrat: 38,
                republican: 46,
                y: -8,
                z: 3956971,
                turnout: 41.9,
                gdp: 50876,
                x: 65,
                color: "red"
            },
            {
                state: "Missouri",
                democrat: 38,
                republican: 47,
                y: -9,
                z: 6137428,
                turnout: 53.3,
                gdp: 47407,
                x: 80,
                color: "red"
            },
            {
                state: "South Carolina",
                democrat: 37,
                republican: 47,
                y: -10,
                z: 5148714,
                turnout: 44.0,
                gdp: 41457,
                x: 64,
                color: "red"
            },
            {
                state: "South Dakota",
                democrat: 40,
                republican: 51,
                y: -11,
                z: 884659,
                turnout: 52.8,
                gdp: 52913,
                x: 82,
                color: "red"
            },
            {
                state: "Kansas",
                democrat: 36,
                republican: 47,
                y: -11,
                z: 2913314,
                turnout: 41.0,
                gdp: 53528,
                x: 76,
                color: "red"
            },
            {
                state: "West Virginia",
                democrat: 37,
                republican: 49,
                y: -12,
                z: 1792147,
                turnout: 41.7,
                gdp: 40265,
                x: 92,
                color: "red"
            },
            {
                state: "Mississippi",
                democrat: 36,
                republican: 48,
                y: -12,
                z: 2976149,
                turnout: 42.7,
                gdp: 35015,
                x: 57,
                color: "red"
            },
            {
                state: "Tennessee",
                democrat: 35,
                republican: 48,
                y: -13,
                z: 6833174,
                turnout: 44.2,
                gdp: 48440,
                x: 74,
                color: "red"
            },
            {
                state: "Arkansas",
                democrat: 35,
                republican: 48,
                y: -13,
                z: 3017825,
                turnout: 41.0,
                gdp: 39580,
                x: 72,
                color: "red"
            },
            {
                state: "Idaho",
                democrat: 34,
                republican: 50,
                y: -16,
                z: 1787065,
                turnout: 53.6,
                gdp: 40566,
                x: 82,
                color: "red"
            },
            {
                state: "Alabama",
                democrat: 35,
                republican: 52,
                y: -17,
                z: 4903185,
                turnout: 46.9,
                gdp: 41389,
                x: 66,
                color: "red"
            },
            {
                state: "Alaska",
                democrat: 33,
                republican: 51,
                y: -18,
                z: 731545,
                turnout: 54.5,
                gdp: 74422,
                x: 60,
                color: "red"
            },
            {
                state: "North Dakota",
                democrat: 30,
                republican: 55,
                y: -25,
                z: 762062,
                turnout: 57.9,
                gdp: 70991,
                x: 84,
                color: "red"
            },
            {
                state: "Utah",
                democrat: 28,
                republican: 56,
                y: -28,
                z: 3205958,
                turnout: 49.8,
                gdp: 51407,
                x: 78,
                color: "red"
            },
            {
                state: "Wyoming",
                democrat: 25,
                republican: 59,
                y: -34,
                z: 578759,
                turnout: 47.4,
                gdp: 67915,
                x: 84,
                color: "red"
            },
        ]}]
    });
    chart.render();

    var chart = new CanvasJS.Chart("chartContainer7", {
        animationEnabled: true,
        zoomEnabled: true,
        theme: "light2",
        axisX: {
            title:"Percent of Whites",
            suffix: "%",
            gridThickness: 1
        },
        axisY:{
            title: "Population",
            suffix: "",
        },
        toolTip: {
                borderThickness: 10,
                borderColor: "black",
                cornerRadius: 15,
              fontColor: "white",
              backgroundColor: "black"
        },
        data: [{
            type: "scatter",
            markerBorderColor: "black",
            markerBorderThickness: 1,
            toolTipContent: "<b>{state}</b><br/>Democrat: {democrat}% <br/>Republican: {republican}%<br/>Population: {y}<br/>GDP per capita: ${gdp}<br/>Percent white: {x}%",
            dataPoints: [
            {
                state: "Massachusetts",
                democrat: 56,
                republican: 27,
                lean: 29,
                y: 6949503,
                turnout: 53.7,
                gdp: 75258,
                x: 71,
                color: "blue"
            },
            {
                state: "Vermont",
                democrat: 55,
                republican: 30,
                lean: 25,
                y: 623989,
                turnout: 54.8,
                gdp: 48855,
                x: 93,
                color: "blue"
            },	
            {
                state: "Hawaii",
                democrat: 54,
                republican: 29,
                lean: 25,
                y: 1415872,
                turnout: 38.7,
                gdp: 58981,
                x: 21,
                color: "blue"
            },	
            {
                state: "New York",
                democrat: 53,
                republican: 30,
                lean: 23,
                y: 19453561,
                turnout: 44.8,
                gdp: 75131,
                x: 55,
                color: "blue"
            },	
            {
                state: "Maryland",
                democrat: 54,
                republican: 31,
                lean: 23,
                y: 6045680,
                turnout: 53.5,
                gdp: 61926,
                x: 50,
                color: "blue"
            },
            {
                state: "California",
                democrat: 51,
                republican: 31,
                lean: 20,
                y: 39512223,
                turnout: 48.3,
                gdp: 70662,
                x: 37,
                color: "blue"
            },
            {
                state: "Connecticut",
                democrat: 52,
                republican: 33,
                lean: 19,
                y: 3565287,
                turnout: 54.2,
                gdp: 69789,
                x: 66,
                color: "blue"
            },
            {
                state: "Illinois",
                democrat: 50,
                republican: 34,
                lean: 16,
                y: 12671821,
                turnout: 50.8,
                gdp: 61713,
                x: 61,
                color: "blue"
            },
            {
                state: "New Jersey",
                democrat: 50,
                republican: 35,
                lean: 15,
                y: 8882190,
                turnout: 52.2,
                gdp: 63492,
                x: 55,
                color: "blue"
            },
            {
                state: "Washington",
                democrat: 50,
                republican: 35,
                lean: 15,
                y: 7614893,
                turnout: 57.4,
                gdp: 69761,
                x: 68,
                color: "blue"
            },
            {
                state: "Maine",
                democrat: 50,
                republican: 37,
                lean: 13,
                y: 1344212,
                turnout: 58.8,
                gdp: 43541,
                x: 93,
                color: "blue"
            },
            {
                state: "Delaware",
                democrat: 48,
                republican: 35,
                lean: 13,
                y: 973764,
                turnout: 50.8,
                gdp: 64985,
                x: 62,
                color: "blue"
            },
            {
                state: "New Hampshire",
                democrat: 48,
                republican: 36,
                lean: 12,
                y: 1316470,
                turnout: 53.3,
                gdp: 57272,
                x: 90,
                color: "blue"
            },
            {
                state: "New Mexico",
                democrat: 48,
                republican: 38,
                lean: 10,
                y: 2096829,
                turnout: 46.5,
                gdp: 46304,
                x: 37,
                color: "blue"
            },
            {
                state: "Oregon",
                democrat: 47,
                republican: 38,
                lean: 9,
                y: 4217737,
                turnout: 59.7,
                gdp: 52726,
                x: 75,
                color: "blue"
            },
            {
                state: "Minnesota",
                democrat: 46,
                republican: 38,
                lean: 8,
                y: 5639632,
                turnout: 63.8,
                gdp: 60066,
                x: 80,
                color: "blue"
            },
            {
                state: "Rhode Island",
                democrat: 43,
                republican: 36,
                lean: 7,
                y: 1059361,
                turnout: 47.0,
                gdp: 51963,
                x: 72,
                color: "blue"
            },
            {
                state: "Virginia",
                democrat: 46,
                republican: 39,
                lean: 7,
                y: 8535519,
                turnout: 54.3,
                gdp: 56938,
                x: 62,
                color: "blue"
            },
            {
                state: "Colorado",
                democrat: 47,
                republican: 40,
                lean: 7,
                y: 5758736,
                turnout: 60.0,
                gdp: 61311,
                x: 68,
                color: "blue"
            },
            {
                state: "Nevada",
                democrat: 45,
                republican: 38,
                lean: 7,
                y: 3080156,
                turnout: 46.3,
                gdp: 50043,
                x: 49,
                color: "blue"
            },
            {
                state: "Pennsylvania",
                democrat: 46,
                republican: 40,
                lean: 6,
                y: 12801989,
                turnout: 51.4,
                gdp: 56868,
                x: 76,
                color: "blue"
            },
            {
                state: "Michigan",
                democrat: 45,
                republican: 39,
                lean: 6,
                y: 9986857,
                turnout: 56.5,
                gdp: 47448,
                x: 75,
                color: "blue"
            },
            {
                state: "Georgia",
                democrat: 43,
                republican: 42,
                lean: 1,
                y: 10617423,
                turnout: 53.9,
                gdp: 50816,
                x: 52,
                color: "x"
            },
            {
                state: "Florida",
                democrat: 42,
                republican: 41,
                lean: 1,
                y: 21477737,
                turnout: 53.6,
                gdp: 44267,
                x: 53,
                color: "x"
            },
            {
                state: "Wisconsin",
                democrat: 43,
                republican: 43,
                lean: 0,
                y: 5822434,
                turnout: 61.4,
                gdp: 52534,
                x: 81,
                color: "x"
            },
            {
                state: "Iowa",
                democrat: 42,
                republican: 42,
                lean: 0,
                y: 3155070,
                turnout: 57.6,
                gdp: 55051,
                x: 86,
                color: "x"
            },
            {
                state: "Arizona",
                democrat: 41,
                republican: 41,
                lean: 0,
                y: 7278717,
                turnout: 46.9,
                gdp: 44161,
                x: 54,
                color: "x"
            },
            {
                state: "Nebraska",
                democrat: 42,
                republican: 43,
                lean: -1,
                y: 1934408,
                turnout: 50.9,
                gdp: 59386,
                x: 79,
                color: "x"
            },
            {
                state: "North Carolina",
                democrat: 41,
                republican: 42,
                lean: -1,
                y: 10488084,
                turnout: 48.2,
                gdp: 48496,
                x: 63,
                color: "x"
            },
            {
                state: "Kentucky",
                democrat: 42,
                republican: 45,
                lean: -3,
                y: 4467673,
                turnout: 47.4,
                gdp: 42386,
                x: 85,
                color: "x"
            },
            {
                state: "Texas",
                democrat: 39,
                republican: 42,
                lean: -3,
                y: 28995881,
                turnout: 45.6,
                gdp: 61682,
                x: 41,
                color: "x"
            },
            {
                state: "Ohio",
                democrat: 41,
                republican: 45,
                lean: -4,
                y: 11689100,
                turnout: 50.2,
                gdp: 52664,
                x: 79,
                color: "x"
            },
            {
                state: "Montana",
                democrat: 39,
                republican: 46,
                lean: -7,
                y: 1068778,
                turnout: 60.7,
                gdp: 44145,
                x: 86,
                color: "red"
            },
            {
                state: "Indiana",
                democrat: 38,
                republican: 46,
                lean: -8,
                y: 6732219,
                turnout: 46.0,
                gdp: 49321,
                x: 79,
                color: "red"
            },
            {
                state: "Louisiana",
                democrat: 37,
                republican: 45,
                lean: -8,
                y: 4648794,
                turnout: 43.4,
                gdp: 51729,
                x: 59,
                color: "red"
            },
            {
                state: "Oklahoma",
                democrat: 38,
                republican: 46,
                lean: -8,
                y: 3956971,
                turnout: 41.9,
                gdp: 50876,
                x: 65,
                color: "red"
            },
            {
                state: "Missouri",
                democrat: 38,
                republican: 47,
                lean: -9,
                y: 6137428,
                turnout: 53.3,
                gdp: 47407,
                x: 80,
                color: "red"
            },
            {
                state: "South Carolina",
                democrat: 37,
                republican: 47,
                lean: -10,
                y: 5148714,
                turnout: 44.0,
                gdp: 41457,
                x: 64,
                color: "red"
            },
            {
                state: "South Dakota",
                democrat: 40,
                republican: 51,
                lean: -11,
                y: 884659,
                turnout: 52.8,
                gdp: 52913,
                x: 82,
                color: "red"
            },
            {
                state: "Kansas",
                democrat: 36,
                republican: 47,
                lean: -11,
                y: 2913314,
                turnout: 41.0,
                gdp: 53528,
                x: 76,
                color: "red"
            },
            {
                state: "West Virginia",
                democrat: 37,
                republican: 49,
                lean: -12,
                y: 1792147,
                turnout: 41.7,
                gdp: 40265,
                x: 92,
                color: "red"
            },
            {
                state: "Mississippi",
                democrat: 36,
                republican: 48,
                lean: -12,
                y: 2976149,
                turnout: 42.7,
                gdp: 35015,
                x: 57,
                color: "red"
            },
            {
                state: "Tennessee",
                democrat: 35,
                republican: 48,
                lean: -13,
                y: 6833174,
                turnout: 44.2,
                gdp: 48440,
                x: 74,
                color: "red"
            },
            {
                state: "Arkansas",
                democrat: 35,
                republican: 48,
                lean: -13,
                y: 3017825,
                turnout: 41.0,
                gdp: 39580,
                x: 72,
                color: "red"
            },
            {
                state: "Idaho",
                democrat: 34,
                republican: 50,
                lean: -16,
                y: 1787065,
                turnout: 53.6,
                gdp: 40566,
                x: 82,
                color: "red"
            },
            {
                state: "Alabama",
                democrat: 35,
                republican: 52,
                lean: -17,
                y: 4903185,
                turnout: 46.9,
                gdp: 41389,
                x: 66,
                color: "red"
            },
            {
                state: "Alaska",
                democrat: 33,
                republican: 51,
                lean: -18,
                y: 731545,
                turnout: 54.5,
                gdp: 74422,
                x: 60,
                color: "red"
            },
            {
                state: "North Dakota",
                democrat: 30,
                republican: 55,
                lean: -25,
                y: 762062,
                turnout: 57.9,
                gdp: 70991,
                x: 84,
                color: "red"
            },
            {
                state: "Utah",
                democrat: 28,
                republican: 56,
                lean: -28,
                y: 3205958,
                turnout: 49.8,
                gdp: 51407,
                x: 78,
                color: "red"
            },
            {
                state: "Wyoming",
                democrat: 25,
                republican: 59,
                lean: -34,
                y: 578759,
                turnout: 47.4,
                gdp: 67915,
                x: 84,
                color: "red"
            },]
        }]
    });
    chart.render();


    function toggleDataSeries(e){
        if (typeof(e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
            e.dataSeries.visible = false;
        }
        else{
            e.dataSeries.visible = true;
        }
        chart.render();
    }


}
