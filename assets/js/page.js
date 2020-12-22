layui.use(['layer', 'form'], function(){
    var layer = layui.layer
    ,form = layui.form;
    
  });
  layui.use('element', function(){
    var element = layui.element;
    console.log(element);
    //…
  });
  layui.use('carousel', function(){
    var carousel = layui.carousel;
    //建造实例
    carousel.render({
      elem: '#test1'
      ,height:"500px"
      ,interval:3000
      ,autoplay:false
      ,width: '100%' //设置容器宽度
      ,arrow: 'hover' //始终显示箭头
      //,anim: 'updown' //切换动画方式
    });
  });
  layui.use('laypage', function(){
    var laypage = layui.laypage;
    
    //执行一个laypage实例
    laypage.render({
      elem: 'dyPage' //注意，这里的 test1 是 ID，不用加 # 号
      ,count: 1100 //数据总数，从服务端得到
    });
  });