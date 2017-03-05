// A $( document ).ready() block.
$(document).ready(function() {
  new WOW().init();
  $('.scrollspy').scrollSpy();
  $('.button-collapse').sideNav();
  $('.parallax').parallax();
});

$(function() {
  $('.tlt').textillate();
});

$(document).ready(function(){
    // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
    $('.modal').modal();
    $('#textarea1').val();
    $('#textarea1').trigger('autoresize');
  });

  $('.datepicker').pickadate({
      selectMonths: true, // Creates a dropdown to control month
      selectYears: 15 // Creates a dropdown of 15 years to control year
    });

    $(document).ready(function() {
   Materialize.updateTextFields();
 });

 (function () {

   'use strict';

   var skills = [
     { name: 'HTML', number: 100 },
     { name: 'CSS', number: 90 },
     { name: 'JavaScript', number: 70 },
     { name: 'PHP', number: 50 },
     { name: 'mySQL', number: 50 }
   ];

   d3.select('.graph')
     .selectAll('div')
     .data(skills)
     .enter()
     .append('div')
     .classed('bar', true)
     .transition()
     .duration(1000)
     .ease(d3.easeLinear)
     .style('width', function (d) {
       return d.number + '%';
     })
     .text(function (d) {
       return d.name;
     });

 }());

var duration   = 1500,
    transition = 200;

drawDonutChart(
  '#donut',
  $('#donut').data('donut'),
  170,
  170,
  '.35em'
);
drawDonutChart(
  '#donut2',
  $('#donut2').data('donut2'),
  170,
  170,
  '.35em'
);
drawDonutChart(
  '#donut3',
  $('#donut3').data('donut3'),
  170,
  170,
  '.35em'
);
drawDonutChart(
  '#donut4',
  $('#donut4').data('donut4'),
  170,
  170,
  '.35em'
);
drawDonutChart(
  '#donut5',
  $('#donut5').data('donut5'),
  170,
  170,
  '.35em'
);
drawDonutChart(
  '#donut6',
  $('#donut6').data('donut6'),
  170,
  170,
  '.35em'
);
drawDonutChart(
  '#donut7',
  $('#donut7').data('donut7'),
  170,
  170,
  '.35em'
);
drawDonutChart(
  '#donut8',
  $('#donut8').data('donut8'),
  170,
  170,
  '.35em'
);
drawDonutChart(
  '#donut9',
  $('#donut9').data('donut9'),
  170,
  170,
  '.35em'
);

function drawDonutChart(element, percent, width, height, text_y) {
  width = typeof width !== 'undefined' ? width : 190;
  height = typeof height !== 'undefined' ? height : 190;
  text_y = typeof text_y !== 'undefined' ? text_y : '-.10em';

  var dataset = {
        lower: calcPercent(0),
        upper: calcPercent(percent)
      },
      radius = Math.min(width, height) / 2,
      pie = d3.layout.pie().sort(null),
      format = d3.format('.0%');

  var arc = d3.svg.arc()
        .innerRadius(radius - 10)
        .outerRadius(radius);

  var svg = d3.select(element).append('svg')
        .attr('width', width)
        .attr('height', height)
        .append('g')
        .attr('transform', 'translate(' + width / 2 + ',' + height / 2 + ')');

  var path = svg.selectAll('path')
        .data(pie(dataset.lower))
        .enter().append('path')
        .attr('class', function(d, i) { return 'color' + i })
        .attr('d', arc)
        .each(function(d) { this._current = d; }); // store the initial values

  var text = svg.append('text')
        .attr('text-anchor', 'middle')
        .attr('dy', text_y);

  if (typeof(percent) === 'string') {
    text.text(percent);
  }
  else {
    var progress = 0;
    var timeout = setTimeout(function () {
      clearTimeout(timeout);
      path = path.data(pie(dataset.upper)); // update the data
      path.transition().duration(duration).attrTween('d', function (a) {
        // Store the displayed angles in _current.
        // Then, interpolate from _current to the new angles.
        // During the transition, _current is updated in-place by d3.interpolate.
        var i  = d3.interpolate(this._current, a);
        var i2 = d3.interpolate(progress, percent)
        this._current = i(0);
        return function(t) {
          text.text( format(i2(t) / 100) );
          return arc(i(t));
        };
      }); // redraw the arcs
    }, 200);
  }
};

function calcPercent(percent) {
  return [percent, 100-percent];
};
