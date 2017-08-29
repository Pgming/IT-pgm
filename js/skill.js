
    $(function () {
      
      if (!Highcharts.theme) {
        Highcharts.setOptions({
          chart: {
            backgroundColor: '#DE8910'
          },
          colors: ['#F62366', '#9DFF02', '#0CCDD6'],
          title: {
            style: {
              color: 'silver'
            }
          },
          tooltip: {
            style: {
              color: 'silver'
            }
          }
        });
      }
      Highcharts.chart('container', {
        chart: {
          type: 'solidgauge',
          marginTop: 50
        },
        // 文字描述
        credits: {
          text: '时时刻刻努力，不断提升自我',
           style: {
            fontSize: '14px',
            color:'#fff',
           }
          // href: 'http://www.hcharts.cn'
        },
        title: {
          text: '综合技能',
          style: {
            fontSize: '30px',
            color:'#fff'
          }
        },
        tooltip: {
          borderWidth: 0,
          backgroundColor: 'none',
          shadow: false,
          style: {
            fontSize: '16px'
          },
          pointFormat: '{series.name}<br><span style="font-size:2em; color: {point.color}; font-weight: bold">{point.y}%</span>',
          positioner: function (labelWidth, labelHeight) {
            return {
              x: 200 - labelWidth / 2,
              y: 180
            };
          }
        },
        pane: {
          startAngle: 0,
          endAngle: 360,
          background: [{ // Track for Move
            outerRadius: '112%',
            innerRadius: '88%',
            backgroundColor: Highcharts.Color(Highcharts.getOptions().colors[0]).setOpacity(0.3).get(),
            borderWidth: 0
          }, { // Track for Exercise
            outerRadius: '87%',
            innerRadius: '63%',
            backgroundColor: Highcharts.Color(Highcharts.getOptions().colors[1]).setOpacity(0.3).get(),
            borderWidth: 0
          }, { // Track for Stand
            outerRadius: '62%',
            innerRadius: '38%',
            backgroundColor: Highcharts.Color(Highcharts.getOptions().colors[2]).setOpacity(0.3).get(),
            borderWidth: 0
          }]
        },
        yAxis: {
          min: 0,
          max: 100,
          lineWidth: 0,
          tickPositions: []
        },
        plotOptions: {
          solidgauge: {
            borderWidth: '34px',
            dataLabels: {
              enabled: false
            },
            linecap: 'round',
            stickyTracking: false
          }
        },
        series: [{
          name: 'Java-script',
          borderColor: Highcharts.getOptions().colors[0],
          data: [{
            color: Highcharts.getOptions().colors[0],
            radius: '100%',
            innerRadius: '100%',
            y: 82
          }]
        }, {
          name: 'CSS',
          borderColor: Highcharts.getOptions().colors[1],
          data: [{
            color: Highcharts.getOptions().colors[1],
            radius: '75%',
            innerRadius: '75%',
            y: 89
          }]
        }, {
          name: 'HTML',
          borderColor: Highcharts.getOptions().colors[2],
          data: [{
            color: Highcharts.getOptions().colors[2],
            radius: '50%',
            innerRadius: '50%',
            y: 90
          }]
        }]
      },
        /**
* In the chart load callback, add icons on top of the circular shapes
*/
        function callback() {
          // Move icon
          this.renderer.path(['M', -8, 0, 'L', 8, 0, 'M', 0, -8, 'L', 8, 0, 0, 8])
            .attr({
              'stroke': '#303030',
              'stroke-linecap': 'round',
              'stroke-linejoin': 'round',
              'stroke-width': 2,
              'zIndex': 10
            })
            .translate(190, 26)
            .add(this.series[2].group);
          // Exercise icon
          this.renderer.path(['M', -8, 0, 'L', 8, 0, 'M', 0, -8, 'L', 8, 0, 0, 8, 'M', 8, -8, 'L', 16, 0, 8, 8])
            .attr({
              'stroke': '#fff',
              'stroke-linecap': 'round',
              'stroke-linejoin': 'round',
              'stroke-width': 2,
              'zIndex': 10
            })
            .translate(190, 61)
            .add(this.series[2].group);
          // Stand icon
          this.renderer.path(['M', 0, 8, 'L', 0, -8, 'M', -8, 0, 'L', 0, -8, 8, 0])
            .attr({
              'stroke': '#303030',
              'stroke-linecap': 'round',
              'stroke-linejoin': 'round',
              'stroke-width': 2,
              'zIndex': 10
            })
            .translate(190, 96)
            .add(this.series[2].group);
        });
        
    });

