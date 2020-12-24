
  window.onscroll=function(){
    var topScroll =document.documentElement.scrollTop;//滚动的距离,距离顶部的距离
    var fixBox = document.getElementById("fixed_box");//获取到导航栏id
    var fixBox2 = document.getElementById("fixed_box2");//获取到导航栏id
    if(fixBox){
        var leftLength = fixBox.getBoundingClientRect().left; //div离屏幕右边距离（长度）
        
        if(topScroll >=262&&topScroll<1385){
            //当滚动距离大于x时执行下面的东西
    fixBox.style.position = 'fixed';
    fixBox.style.top = 0+"px";
    fixBox.style.marginLeft = '0';
    fixBox.style.left = leftLength+"pp" 
      }
      else if(topScroll>=1385){
          fixBox.style.position = 'absolute';
          fixBox.style.top = 1150+"px";
          // fixBox.style.marginLeft = '0';
          fixBox.style.left = leftLength+"pp" 
      }
      else{
      fixBox.style.position = 'absolute';
      fixBox.style.top= '0';
      fixBox.style.left= 'auto';   
      }
    }
    if(fixBox2){
        var leftLength = fixBox2.getBoundingClientRect().left; //div离屏幕右边距离（长度）
        console.log(leftLength);
        if(topScroll >=236&&topScroll<1066){
            //当滚动距离大于x时执行下面的东西
    fixBox2.style.position = 'fixed';
    fixBox2.style.top = 0+"px";
    fixBox2.style.marginLeft = '0';
    // fixBox2.style.left = leftLength+"px" 
      }
      else if(topScroll>=1066){
          fixBox2.style.position = 'absolute';
        //   fixBox2.style.top = 793+"px";
          fixBox2.style.top = 829+"px";
          // fixBox.style.marginLeft = '0';
        //   fixBox2.style.left = leftLength+"px" 
      }
      else{
      fixBox2.style.position = 'absolute';
      fixBox2.style.top= '0';
      fixBox2.style.left= 'auto';   
      }
    }

  


}