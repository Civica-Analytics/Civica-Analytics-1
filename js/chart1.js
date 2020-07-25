window.onload = function () {
    var chart = new CanvasJS.Chart("chartContainer", {
        animationEnabled: true,
        zoomEnabled: true,
        theme: "light2",
        title:{
            text: "Political Party vs Voter Turnout by Demographic Group"
        },
        axisX: {
            title:"Political Lean",
            suffix: "%",
            minimum: 0,
            maximum: 100,
            gridThickness: 2
        },
        axisY:{
            title: "Voter Turnout (in %)",
            suffix: "%",
            minimum: 0,
            maximum: 100,
        },
        data: [{
            type: "bubble",
            toolTipContent: "<b>{name}</b><br/> % Republican: {x}% <br/> Voter Turnout: {y}% <br/> Size (millions): {z}",
           // name: "Age",
            //showInLegend = true,
            dataPoints: [ //https://www.pewresearch.org/fact-tank/2018/04/03/millennials-approach-baby-boomers-as-largest-generation-in-u-s-electorate/
                 //x = % republican, y = % voter turnout, z = size (millions) -->
                { x: 32, y: 51, z:69, name:"18-35 (Millennial)" },
                { x: 43, y: 63, z:57, name:"36-51 (Gen X)" },
                { x: 46, y: 69, z:70, name:"52-70 (Boomer)" },
                { x: 52, y: 70, z:28, name:"71+ (Silent/Greatest)"}
            ]
        }]
    });
    chart.render();
    
}