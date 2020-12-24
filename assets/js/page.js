layui.use(['layer', 'form'], function(){
    var layer = layui.layer
    ,form = layui.form;
    
  });
  layui.use('element', function(){
    var element = layui.element;
    // console.log(element);
    //…
  });
  layui.use('carousel', function(){
    var carousel = layui.carousel;
    //建造实例
    carousel.render({
      elem: '#test1'
      ,height:"500px"
      ,interval:3000
      ,autoplay:true
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
  window.onscroll=function(){
    var topScroll =document.documentElement.scrollTop;//滚动的距离,距离顶部的距离
    var nav = document.getElementById("navBtns");//获取到导航栏id

    var topLength = nav.getBoundingClientRect().top; //div离屏幕上边距离（长度）
    // var bottomLength = div.getBoundingClientRect().bottom; //div离屏幕下边距离（长度）

    // var leftLength = div.getBoundingClientRect().left; //div离屏幕左边距离（长度）
    // var rightLength = div.getBoundingClientRect().right; //div离屏幕右边距离（长度）
    // var rightLength = fixBox.getBoundingClientRect().left; //div离屏幕右边距离（长度）
    // console.log(rightLength);
    if(topScroll <= 935){
        //当滚动距离小于x的时候执行下面的内容，也就是让导航栏恢复原状    
        nav.style.position = 'absolute';
        nav.style.top= '995px';
    }else{      
        //当滚动距离大于x时执行下面的东西
        nav.style.position = 'fixed';
        nav.style.top = '80px';
        nav.style.right = '30px'
     
    }
}
$('#btnGoTop').on('click', function() {
  $('html,body').animate({ scrollTop: '0px' }, 1000); 
    return false; 

});
$('.ph-btn-more').on('click', function() {
  layer.open({
    type: 1,
    title: false,
    closeBtn: 0,
    shade:0.7,
    // area: ['26%', '45%'],
    shadeClose: true,
    skin: 'code',
    content: $('#alertWx').html()
});
});
