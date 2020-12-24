//注意：选项卡 依赖 element 模块，否则无法进行功能性操作
layui.use('element', function(){
    var element = layui.element;
 
    //…
  });
  layui.use('laypage', function(){
    var laypage = layui.laypage;
    
    //执行一个laypage实例
    laypage.render({
      elem: 'emlayPage' //注意，这里的 test1 是 ID，不用加 # 号
      ,count: 50 //数据总数，从服务端得到
   
    });
    laypage.render({
      elem: 'dyPage' //注意，这里的 test1 是 ID，不用加 # 号
      ,count: 100
      ,layout: ['count','limit', 'prev', 'page', 'next',]
      ,jump: function(obj){
        // console.log(obj)
      }
   
    });
  });
  // $(document).ready(function(){
  //   $(".go_pmBulter").click(function(){
  //       location.href='../../pages/ehManage/pmBulter.html';
  //   });
  //   });
  window.onscroll=function(){
    var topScroll =document.documentElement.scrollTop;//滚动的距离,距离顶部的距离
    var nav = document.getElementById("navBtns");//获取到导航栏id
    var fixBox = document.getElementById("fixed_box");//获取到导航栏id
    // console.log(topScroll);
    // var topLength = div.getBoundingClientRect().top; //div离屏幕上边距离（长度）
    // var bottomLength = div.getBoundingClientRect().bottom; //div离屏幕下边距离（长度）

    // var leftLength = div.getBoundingClientRect().left; //div离屏幕左边距离（长度）
    // var rightLength = div.getBoundingClientRect().right; //div离屏幕右边距离（长度）
    var leftLength = fixBox.getBoundingClientRect().left; //div离屏幕右边距离（长度）

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
    if(topScroll >=714&&topScroll<1485)
    {      
      //当滚动距离大于x时执行下面的东西
      fixBox.style.position = 'fixed';
      fixBox.style.top = '80px';
      fixBox.style.marginLeft = '0';
      fixBox.style.left = leftLength+"px"
   
  }else if(topScroll>=1485)
  {
    fixBox.style.position = 'absolute';
    fixBox.style.top= '771px';
    fixBox.style.left= 'auto';
  }
  else
    {
        //当滚动距离小于x的时候执行下面的内容，也就是让导航栏恢复原状    
        fixBox.style.position = 'absolute';
        fixBox.style.top= '0';
        fixBox.style.left= 'auto';
    }

}