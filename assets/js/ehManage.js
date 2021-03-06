//注意：选项卡 依赖 element 模块，否则无法进行功能性操作
layui.use('element', function () {
  var element = layui.element;

  //…
});
layui.use('laypage', function () {
  var laypage = layui.laypage;

  //执行一个laypage实例
  laypage.render({
    elem: 'emlayPage' //注意，这里的 test1 是 ID，不用加 # 号
      ,
    count: 50 //数据总数，从服务端得到

  });
  laypage.render({
    elem: 'dyPage' //注意，这里的 test1 是 ID，不用加 # 号
      ,
    count: 100,
    layout: ['count', 'limit', 'prev', 'page', 'next', ],
    jump: function (obj) {}

  });
});
$(".tabs-item").click(function(e){
  let tabs=$(".tabs-item");
  for(var i=0;i<tabs.length;i++){
    tabs[i].className="tabs-item"
  }
    e.target.className="tabs-item  goHere"
  for(var i=0;i<tabs.length;i++){
    if( tabs[i].className=="tabs-item  goHere"){
      
     if(i==0){
    
      $('html,body').animate({ scrollTop:699+"px" }, 500); 
     }
     else{
      var topScroll = document.documentElement.scrollTop; 
      let tabTop=document.getElementById("tabsConent"+(i+1)).offsetTop;
      $("html, body").animate({
        scrollTop: $("#tabsConent"+(i+1)).offset().top-80 }, {duration: 200,easing: "swing"});

     }
    
    }
  }
})
function choiseTabs(value){
  let tabs=$(".tabs-item");

    for(var i=0;i<tabs.length;i++){
      tabs[i].className="tabs-item"
    }
    tabs[value].className="tabs-item  tab_active"
}
window.onscroll = function () {
  var topScroll = document.documentElement.scrollTop; //滚动的距离,距离顶部的距离
 
  var nav = document.getElementById("navBtns"); //获取到导航栏id
  var fixBox = document.getElementById("fixed_box"); //获取到导航栏id
  var dwei = document.getElementById("tabsHeaderBar")
  var tabsHeader = document.getElementById("tabs_header")

  let tabTop1=document.getElementById("tabsConent1").getBoundingClientRect().top-82
  let tabTop2=document.getElementById("tabsConent2").getBoundingClientRect().top-82
  let tabTop3=document.getElementById("tabsConent3").getBoundingClientRect().top-82
  let tabTop4=document.getElementById("tabsConent4").getBoundingClientRect().top-82
  let tabTop5=document.getElementById("tabsConent5").getBoundingClientRect().top-82
  let tabTop6=document.getElementById("tabsConent6").getBoundingClientRect().top-82
  if(tabTop1>0){
    choiseTabs(0)
  }
  else if(tabTop1<=0&&tabTop2>0){
    choiseTabs(0)
  }
  else if(tabTop2<=0&&tabTop3>0){
    choiseTabs(1)
  }
  else if(tabTop3<=0&&tabTop4>0){
    choiseTabs(2)
  }
  else if(tabTop4<=0&&tabTop5>0){
    choiseTabs(3)
  }
  else if(tabTop5<=0&&tabTop6>0){
    choiseTabs(4)
  }
  else if(tabTop6<=0){
    choiseTabs(5)
  }
  if (dwei.getBoundingClientRect().top <= 0) {

    tabsHeader.style.position = 'fixed';
    tabsHeader.style.top = '0';
    tabsHeader.style.display = "block"
  } else {
    tabsHeader.style.position = 'relative';
    tabsHeader.style.top = '0';
    tabsHeader.style.left = 'auto';
  }

  var leftLength = fixBox.getBoundingClientRect().left; //div离屏幕右边距离（长度）

  if (topScroll > 200) {
    nav.style.position = 'fixed';
    nav.style.top = '80%';
    nav.style.right = '30px'
    nav.style.display = "block"
  } else {
    nav.style.display = "none"
  }
//   if (topScroll >= 714 && topScroll < 1485) {
//     //当滚动距离大于x时执行下面的东西
//     fixBox.style.position = 'fixed';
//     fixBox.style.top = '80px';
//     fixBox.style.marginLeft = '0';
//     fixBox.style.left = leftLength + "px"

//   } else if (topScroll >= 1485) {
//     fixBox.style.position = 'absolute';
//     fixBox.style.top = '771px';
//     fixBox.style.left = 'auto';
//   } else {
//     fixBox.style.position = 'absolute';
//     fixBox.style.top = '0';
//     fixBox.style.left = 'auto';
//   }

// }
let fixedPosition=$( "#aboutUs" ).offset().top;
if(fixBox){
    var leftLength = fixBox.getBoundingClientRect().left; //div离屏幕右边距离（长度）
    
    if(topScroll >=714&&topScroll<fixedPosition-824-80){
    fixBox.style.position = 'fixed';
    fixBox.style.top = '80px';
    fixBox.style.marginLeft = '0';
    fixBox.style.left = leftLength + "px"
  }
  else if(topScroll>=fixedPosition-824-80){
      fixBox.style.position = 'absolute';
      fixBox.style.top = fixedPosition-824-795+"px";
      // fixBox.style.marginLeft = '0';
      fixBox.style.left = "auto" 
  }
  else{
  fixBox.style.position = 'absolute';
  fixBox.style.top= '0';
  fixBox.style.left= 'auto';   
  }
}}