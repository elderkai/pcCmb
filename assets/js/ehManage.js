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