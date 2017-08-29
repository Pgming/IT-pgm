var dom = document.getElementById("containers");
var myChart = echarts.init(dom);
var app = {};
option = null;
// Schema:
// date,AQIindex,PM2.5,PM10,CO,NO2,SO2
var dataBJ = [
  [55, 9, 56, 0.46, 18, 6, 1],
  [25, 11, 21, 0.65, 34, 9, 2],
  [56, 7, 63, 0.3, 14, 5, 3],
  [33, 7, 29, 0.33, 16, 6, 4],
  [42, 24, 44, 0.76, 40, 16, 5],
  [82, 58, 90, 1.77, 68, 33, 6],
  [74, 49, 77, 1.46, 48, 27, 7],
  [78, 55, 80, 1.29, 59, 29, 8],
  // [267, 216, 280, 4.8, 108, 64, 9],
  [185, 127, 216, 2.52, 61, 27, 10],
  [39, 19, 38, 0.57, 31, 15, 11],
  [41, 11, 40, 0.43, 21, 7, 12],
  [64, 38, 74, 1.04, 46, 22, 13],
  [108, 79, 120, 1.7, 75, 41, 14],
  [108, 63, 116, 1.48, 44, 26, 15],
  [33, 6, 29, 0.34, 13, 5, 16],
  [94, 66, 110, 1.54, 62, 31, 17],
  [186, 142, 192, 3.88, 93, 79, 18],
  [57, 31, 54, 0.96, 32, 14, 19],
  [22, 8, 17, 0.48, 23, 10, 20],
  [39, 15, 36, 0.61, 29, 13, 21],
  [94, 69, 114, 2.08, 73, 39, 22],
  [99, 73, 110, 2.43, 76, 48, 23],
  [31, 12, 30, 0.5, 32, 16, 24],
  [42, 27, 43, 1, 53, 22, 25],
  [154, 117, 157, 3.05, 92, 58, 26],
  [234, 160, 180, 4.09, 123, 69, 27],
  [160, 120, 186, 2.77, 91, 50, 28],
  [134, 96, 165, 2.76, 83, 41, 29],
  [52, 24, 60, 1.03, 50, 21, 30],
  [46, 5, 49, 0.28, 10, 6, 31]
];

var lineStyle = {
  normal: {
    width: 1,
    opacity: 0.5
  }
};

option = {
  backgroundColor: '#DE8910',
  title: {
    top: -5,
    text: '技能分类',
    left: 'center',
    textStyle: {
      color: '#fff'
    }
  },
  legend: {
    bottom: 0,
    data: ['技能点'],
    itemGap: 20,
    textStyle: {
      color: '#fff',
      fontSize: 14
    },
    selectedMode: 'single'
  },
  // visualMap: {
  //     show: true,
  //     min: 0,
  //     max: 20,
  //     dimension: 6,
  //     inRange: {
  //         colorLightness: [0.5, 0.8]
  //     }
  // },
  radar: {
    indicator: [
      { name: 'Jquery-88点', max: 300 },
      { name: 'C3H5-83点', max: 250 },
      { name: 'JavaScript-86点', max: 300 },
      { name: 'HTML-91点', max: 5 },
      { name: '框架-81点', max: 200 },
      { name: 'CSS-89点', max: 100 }
    ],
    shape: 'circle',
    splitNumber: 5,
    name: {
      textStyle: {
        color: '#26f2ff'
      }
    },
    splitLine: {
      lineStyle: {
        color: [
          'rgba(255, 255, 255, 1)', 'rgba(255, 255, 255, 0.8)',
          'rgba(255, 255, 255, 0.7)', 'rgba(255, 255, 255, 0.6)',
          'rgba(255, 255, 255, 0.5)', 'rgba(255, 255, 255, 0.2)'
        ].reverse()
      
      }
    },
    splitArea: {
      show: false
    },
    axisLine: {
      lineStyle: {
        color: 'rgba(238, 197, 102, 0.5)'
      }
    }
  },
  series: [
    {
      name: '技能点',
      type: 'radar',
      lineStyle: lineStyle,
      data: dataBJ,
      symbol: 'none',
      itemStyle: {
        normal: {
          color: 'red'
        }
      },
      areaStyle: {
        normal: {
          opacity: 0.1
        }
      }
    },

  ]
};;
if (option && typeof option === "object") {
  myChart.setOption(option, true);
}