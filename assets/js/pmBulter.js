
  window.onscroll=function(){
    var topScroll =document.documentElement.scrollTop;//滚动的距离,距离顶部的距离
    var nav = document.getElementById("navBtns");//获取到导航栏id
    var fixBox = document.getElementById("fixed_box");//获取到导航栏id
    var leftLength = fixBox.getBoundingClientRect().left; //div离屏幕右边距离（长度）
    let height = $(".aboutUs")[0].offsetTop-204;
    if(topScroll>=905&&topScroll<height){
      nav.style.position = 'fixed';
     nav.style.top = '80px';
     nav.style.right = '30px'  
 }
 else if(topScroll>=height)
 {
   nav.style.position = 'absolute';
   nav.style.top= height+84+"px";
   nav.style.left= 'auto';
 }else{
     nav.style.position = 'absolute';
     nav.style.top= '995px';
 }

    if(topScroll >=724&&topScroll<8425)
    {      
      fixBox.style.position = 'fixed';
      fixBox.style.top = '80px';
      fixBox.style.marginLeft = '0';
      fixBox.style.left = leftLength+"px"
   
  }else if(topScroll>=8425)
  {
    fixBox.style.position = 'absolute';
    fixBox.style.top= '7665px';
    fixBox.style.left= 'auto';
  }
  else
    {
        fixBox.style.position = 'absolute';
        fixBox.style.top= '0';
        fixBox.style.left= 'auto';
    }
}