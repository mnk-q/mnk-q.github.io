
var margin = {top: 20, right: 20, bottom: 250, left: 150},
    width = 1400 - margin.left - margin.right,
    height = 500 - margin.top - margin.bottom;

 const x = d3.scale.ordinal().rangeRoundBands([0, width], .05);

 const y = d3.scale.linear().range([height, 0]);

var xAxis = d3.svg.axis()
    .scale(x)
    .orient("bottom")


var yAxis = d3.svg.axis()
    .scale(y)
    .orient("left")
    .ticks(10);
var tip = d3.tip()
  .attr('class', 'd3-tip')
  .offset([-10, 0])
  .html(function(d) {
    return "<strong>Area:</strong> " + d.area + "</span>";
  })

var svg = d3.select("body").append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform", 
          "translate(" + margin.left + "," + margin.top + ")");

svg.call(tip);

d3.json("stateData.json", function(error, data) {

  x.domain(data.map(function(d) { return d.state; }));
  y.domain([0, d3.max(data, function(d) { return d.area; })]);
  
  svg.append("g")
    .attr("class", "x axis")
    .attr("transform", "translate(0," + height + ")")
    .call(xAxis)
    .selectAll("text")
    .style("text-anchor", "end")
    .attr("dx", "-.8em")
    .attr("dy", "-.55em")
    .attr("transform", "rotate(-90)" );

  svg.append("g")
    .attr("class", "y axis")
    .call(yAxis)
    .append("text")
    .attr("y", -20)
    .attr("x",20)
    .attr("dy", ".71em")
    .style("text-anchor", "end")
    .text("Area");

  svg.selectAll("bar")
    .data(data)
    .enter().append("rect")
    .attr("class", "bar")
    .attr("x", function(d) { return x(d.state); })
    .attr("width", x.rangeBand())
    .attr("y", function(d) { return y(d.area); })
    .attr("height", function(d) { return height - y(d.area); })
    .on('mouseover', tip.show)
    .on('mouseout', tip.hide)
});