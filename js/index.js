
$('#box').fullpage({
  sectionsColor: ['#0DA5D6', '#2AB561', '#DE8910', '#16BA9D', '#0DA5D6'],
  verticalCentered: false,
  navigation: true,
  afterLoad: function (anchorLink, index) {
    // 只有加载到当前页面的时候，才会给当前的这个section添加current类，其它的都需要移除掉
    $('.section').eq(index - 1).addClass('current').siblings().removeClass('current');
    console.log(index);
  },
  anchors: ['p1', 'p2', 'p3', 'p4', 'p5'],
  menu: '#menu',
});



