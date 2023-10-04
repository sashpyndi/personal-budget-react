import React from 'react';
import axios from 'axios';
import Chart from "chart.js/auto";
import * as d3 from "d3";

function Homepage() {

  var dataSource ={
    datasets:[
      {
        data: [],
        backgroundColor: [
          '#ffcd56',
          '#ff6384',
          '#36a2eb',
          '#fd6b19',
          '#262a10',
          '#a9714b',
          '#141204'
        
        ],
      }
    ],
    labels: [
      
    ]
  };



function createChart(){
  var ctx = document.getElementById("myChart").getContext("2d");
  let chartStatus = Chart.getChart("myChart");

        if (chartStatus !== undefined) {
            chartStatus.destroy();
        }
  var myPieChart = new Chart(ctx, {
    type: 'pie',
    data: dataSource
  });

}



function  createColors(data){
    this.colors = d3.scaleOrdinal()
    .domain(data.map((d) => d.title.toString()))
    .range(["#c7d3ec", "#a5b8db", "#879cc4", "#677795", "#5a6782"]);
}

/*function  drawChart(data:any) {
  // Compute the position of each group on the pie:
  const pie = d3.pie<any>().value((d: any) => Number(d.budget));

  // Build the pie chart
  this.svg
  .selectAll('pieces')
  .data(pie(data))
  .enter()
  .append('path')
  .attr('d', d3.arc()
    .innerRadius(0)
    .outerRadius(this.radius)
  )
  .attr('fill', (d: any, i: any) => (this.colors(i)))
  .attr("stroke", "#121926")
  .style("stroke-width", "1px");

  // Add labels
  const labelLocation = d3.arc()
  .innerRadius(100)
  .outerRadius(this.radius);

  this.svg
  .selectAll('pieces')
  .data(pie(data))
  .enter()
  .append('text')
  .text((d: any)=> d.data.title)
  .attr("transform", (d: any) => "translate(" + labelLocation.centroid(d) + ")")
  .style("text-anchor", "middle")
  .style("font-size", 15);
 }*/

  
//image rendered on html of the d3 chart. SVG is a scalable vector graphic. Based on xml mapping, it renders the chart on the webpage. Tag in html in which 
function createSvg(){
    this.svg = d3.select("#d3Chart")
    .append("svg")
    .attr("width", this.width)
    .attr("height", this.height)
    .append("g")
    .attr(
      "transform",
      "translate(" + this.width / 2 + "," + this.height / 2 + ")"
    );
  }


  React.useEffect(()=>{
    axios.get('http://localhost:3001/budget').then(function(res){
      console.log(res);
      for(var i = 0; i < res.data.myBudget.length; i++){
        dataSource.datasets[0].data[i] = res.data.myBudget[i].budget;
        dataSource.labels[i] = res.data.myBudget[i].title;
      }
      createChart();
    });
  },[]);
  return (
   <main className = "center" idea = "main">
        <div className="page-area">
          <article>
            <h1>Stay on track</h1>
            <p>
              Do you know where you are spending your money? If you really stop
              to track it down, you would get surprised! Proper budget
              management depends on real data... and this app will help you with
              that!
            </p>
          </article>
          <article>
            <h1>Alerts</h1>
            <p>
              What if your clothing budget ended? You will get an alert. The
              goal is to never go over the budget.
            </p>
          </article>

          <article>
            <h1>Results</h1>
            <p>
              People who stick to a financial plan, budgeting every expense, get
              out of debt faster! Also, they to live happier lives... since they
              expend without guilt or fear... because they know it is all good
              and accounted for.
            </p>
          </article>

          <article>
            <h1>Free</h1>
            <p>s
              This app is free!!! And you are the only one holding your data!
            </p>
          </article>

          <article>
            <h1>Stay on track</h1>
            <p>
              Do you know where you are spending your money? If you really stop
              to track it down, you would get surprised! Proper budget
              management depends on real data... and this app will help you with
              that!
            </p>
          </article>

          <article>
            <h1>Alerts</h1>
           <p>
              What if your clothing budget ended? You will get an alert. The
              goal is to never go over the budget.
            </p>
          </article>

          <article>
            <h1>Results</h1>
            <p>
              People who stick to a financial plan, budgeting every expense, get
              out of debt faster! Also, they to live happier lives... since they
              expend without guilt or fear... because they know it is all good
              and accounted for.
            </p>
          </article>

          <article>
            <h1>Chart</h1>
            <p>
               <canvas id="myChart" width ="400" height="400"></canvas>
            </p>
            <h1>D3Chart</h1>
            <p>
              <canvas id = "d3Chart" width ="400" height = "400"></canvas>
            </p>
          </article>
       
      </div>
  </main>
  );
}

export default Homepage;
