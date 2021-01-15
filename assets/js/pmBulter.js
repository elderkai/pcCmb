function choiseTabs(value){
  let tabs=$(".tabs-item");

    for(var i=0;i<tabs.length;i++){
      tabs[i].className="tabs-item"
    }
    tabs[value].className="tabs-item  tab_active"
}
$(".tabs-item").click(function(e){
  let tabs=$(".tabs-item");
  for(var i=0;i<tabs.length;i++){
    tabs[i].className="tabs-item"
  }
    e.target.className="tabs-item  goHere"
  for(var i=0;i<tabs.length;i++){
    if( tabs[i].className=="tabs-item  goHere"){
     if(i==0){    
      $('html,body').animate({ scrollTop:720+"px" }, 500); 
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
  window.onscroll=function(){
    var topScroll =document.documentElement.scrollTop;//滚动的距离,距离顶部的距离
    var nav = document.getElementById("navBtns");//获取到导航栏id
    var fixBox = document.getElementById("fixed_box");//获取到导航栏id
    var leftLength = fixBox.getBoundingClientRect().left; //div离屏幕右边距离（长度）
    let height = $(".aboutUs")[0].offsetTop-204;
if(topScroll>200){
      nav.style.position = 'fixed';
     nav.style.top = '80%';
     nav.style.right = '30px'  
     nav.style.display="block"
}else{
nav.style.display="none"
}
    if(topScroll >=724&&topScroll<7970)
    {      
      fixBox.style.position = 'fixed';
      fixBox.style.top = '80px';
      fixBox.style.marginLeft = '0';
      fixBox.style.left = leftLength+"px"
   
  }else if(topScroll>=7970)
  {
    fixBox.style.position = 'absolute';
    fixBox.style.top= '7262px';
    fixBox.style.left= 'auto';
  }
  else
    {
        fixBox.style.position = 'absolute';
        fixBox.style.top= '0';
        fixBox.style.left= 'auto';
    }
    var tabsHeader = document.getElementById("tabs_header")
    var dwei = document.getElementById("tabsHeaderBar")
    let tabTop1=document.getElementById("tabsConent1").getBoundingClientRect().top-82
    let tabTop2=document.getElementById("tabsConent2").getBoundingClientRect().top-82
    let tabTop3=document.getElementById("tabsConent3").getBoundingClientRect().top-82
    let tabTop4=document.getElementById("tabsConent4").getBoundingClientRect().top-82
    let tabTop5=document.getElementById("tabsConent5").getBoundingClientRect().top-82
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
    else if(tabTop5<=0){
      choiseTabs(4)
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
}
$(".clickItem").click(function(e){
 let clickItems=document.getElementsByClassName("clickItem")
 for(var i=0;i<4;i++){
   clickItems[i].className="clickItem"
  }
  e.target.className="clickItem checked_product"
  for(var i=0;i<4;i++){
    if( clickItems[i].className=="clickItem checked_product"){
      if(i==2){}
      $(".lbNavBody").css("left",-400*i+"px")
    }
   }
})
$('#btnGoTop').on('click', function() {
  $('html,body').animate({ scrollTop: '0px' }, 1000); 
    return false; 

});