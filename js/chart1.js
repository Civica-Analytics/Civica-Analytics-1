window.onload = function () {
    var chart = new CanvasJS.Chart("chartContainer", {
        animationEnabled: true,
        zoomEnabled: true,
        theme: "light2",
        title:{
            text: "Political Party vs Voter Turnout (by demographic group)"
        },
        axisX: {
            title:"Political Lean",
            suffix: "%",
            minimum: 0,
            maximum: 100,
            gridThickness: 1
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
            dataPoints: [ //https://www.pewresearch.org/fact-tank/2018/04/03/millennials-approach-baby-boomers-as-largest-generation-in-u-s-electorate/
                 //x = % republican, y = % voter turnout, z = size (millions) -->
                { x: 32, y: 51, z:69, name:"18-35 (Millennial)" },
                { x: 43, y: 63, z:57, name:"36-51 (Gen X)" },
                { x: 46, y: 69, z:70, name:"52-70 (Boomer)" },
                { x: 52, y: 70, z:28, name:"71+ (Silent/Greatest)"}
            ]
        },
        {
            type: "bubble",
            name: "Education Level",
            toolTipContent: "<b>{name}</b><br/> % Republican: {x}% <br/> Voter Turnout: {y}% <br/> Size (millions): {z}",
            showInLegend: true,
            dataPoints: [ 
                 /*x = % republican, y = % voter turnout, z = size (millions) 
                 x: https://www.pewresearch.org/politics/2015/04/07/party-identification-trends-1992-2014/#education
                 y: https://www.census.gov/library/stories/2019/04/behind-2018-united-states-midterm-election-turnout.html
                 z: https://www.census.gov/library/stories/2019/02/number-of-people-with-masters-and-phd-degrees-double-since-2000.html 
                 */
                { x: 37, y: 42.1, z:70.5, name:"High school diploma or less" },
                { x: 42, y: 54.5, z:63.1, name:"Some college or associate's degree" },
                { x: 40, y: 65.7, z:48.2, name:"Bachelor's degree"},
                { x: 36, y: 74.0, z:28.7, name:"Advanced degree"}
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
    
    }