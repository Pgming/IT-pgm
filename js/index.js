
  $('#box').fullpage({
  sectionsColor: ['#0DA5D6', '#0DA5D6', '#DE8910', '#16BA9D', '#2AB561'],
  verticalCentered: false,
  navigation: true,
  // scrollingSpeed:100,
  afterLoad: function (anchorLink, index) {
    // 只有加载到当前页面的时候，才会给当前的这个section添加current类，其它的都需要移除掉
    $('.section').eq(index - 1).addClass('current').siblings().removeClass('current');
    // console.log(index);
  },
  anchors: ['p1', 'p2', 'p3', 'p4', 'p5'],
  menu: '#menu',
});

// 轮播图
$(function(){
  var json = [
    {"width": 281, "height": 130, "left": -82, "top": 82},
    {"width": 435, "height": 223, "left": 0, "top": 30},
    {"width": 639, "height": 271, "left": 278, "top": 6},
    {"width": 435, "height": 223, "left": 761, "top": 30},
    {"width": 281, "height": 130, "left": 1001, "top": 82}
  ]

  //1.单击右侧按钮注册事件
  $('.e_btn .e_right').on('click',function (){
      // 当所有的li标签的属性都到达到目标位置的时候，再来进行下一次的移动
      if(!$('.exhibition .e_lists ul li').is(':animated')){
        // 一开始的时候，因为是用css来设置的，所以没有动画效果，也就是没有animated属性，因此需要取反
        $('.exhibition .e_lists ul').append($('.exhibition .e_lists ul li:first'));
        $('.exhibition .e_lists ul li:eq(4)').css(json[4]);
        assign();
      }

  });
  //2. 左侧按钮
  $('.e_btn .e_left').on('click',function (){
      if(!$('.exhibition .e_lists ul li').is(':animated')){
        $('.exhibition .e_lists ul ').prepend($('.exhibition .e_lists ul li:last')); // 将最后一个剪切下来，追加到最前面
        $('.exhibition .e_lists ul li:eq(0)').css(json[0]);
        assign();
      }
  })

    function assign(){
      var lis = $('.exhibition .e_lists ul li:lt(5)');  // 获取前5个的li标签
      $('.exhibition .e_lists ul li:gt(4)').removeClass().addClass('waiting'); //设置后4个的样式 ，后4个看不见，不需要 动画，直接设置不显示
      $.each(json,function (index,ele){
        lis.eq(index).stop().animate(ele,500).removeClass().addClass('no'+index);
      });
    }
})

