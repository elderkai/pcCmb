
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
    console.log(topScroll);
    if(topScroll <= 905){
        //当滚动距离小于x的时候执行下面的内容，也就是让导航栏恢复原状    
        nav.style.position = 'absolute';
        nav.style.top= '995px';
    }else{      
        //当滚动距离大于x时执行下面的东西
        nav.style.position = 'fixed';
        nav.style.top = '80px';
        nav.style.right = '30px'
     
    }
    if(topScroll >=724&&topScroll<8425)
    {      
      //当滚动距离大于x时执行下面的东西
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
        //当滚动距离小于x的时候执行下面的内容，也就是让导航栏恢复原状    
        fixBox.style.position = 'absolute';
        fixBox.style.top= '0';
        fixBox.style.left= 'auto';
    }

}