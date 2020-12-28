
  window.onscroll=function(){
    var topScroll =document.documentElement.scrollTop;//滚动的距离,距离顶部的距离
    var fixBox = document.getElementById("fixed_box");//获取到导航栏id
    var fixBox2 = document.getElementById("fixed_box2");//获取到导航栏id
    var topScroll =document.documentElement.scrollTop;//滚动的距离,距离顶部的距离
    var nav = document.getElementById("navBtns");//获取到导航栏id

    var topLength = nav.getBoundingClientRect().top; //div离屏幕上边距离（长度）
    let height = $(".aboutUs")[0].offsetTop-204;
//     if(topScroll>=935&&topScroll<height){
//       nav.style.position = 'fixed';
//      nav.style.top = '80px';
//      nav.style.right = '30px'  
//  }
//  else if(topScroll>=height)
//  {
//    nav.style.position = 'absolute';
//    nav.style.top= height+84+"px";
//    nav.style.left= 'auto';
//  }else{
//      nav.style.position = 'absolute';
//      nav.style.top= '995px';
//  }
if(topScroll>200){
  nav.style.position = 'fixed';
 nav.style.top = '80%';
 nav.style.right = '30px'  
 nav.style.display="block"
}else{
nav.style.display="none"
}
    // if(topScroll <= 935){
    //     nav.style.position = 'absolute';
    //     nav.style.top= '995px';
    // }else{      
    //     nav.style.position = 'fixed';
    //     nav.style.top = '80px';
    //     nav.style.right = '30px'
     
    // }
    if(fixBox){
        var leftLength = fixBox.getBoundingClientRect().left; //div离屏幕右边距离（长度）
        
        if(topScroll >=262&&topScroll<1353){
            //当滚动距离大于x时执行下面的东西
    fixBox.style.position = 'fixed';
    fixBox.style.top = 0+"px";
    fixBox.style.marginLeft = '0';
    fixBox.style.left = leftLength+"pp" 
      }
      else if(topScroll>=1353){
          fixBox.style.position = 'absolute';
          fixBox.style.top = 1118+"px";
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
        if(topScroll >=236&&topScroll<1044){
            //当滚动距离大于x时执行下面的东西
    fixBox2.style.position = 'fixed';
    fixBox2.style.top = 0+"px";
    fixBox2.style.marginLeft = '0';
    // fixBox2.style.left = leftLength+"px" 
      }
      else if(topScroll>=1044){
          fixBox2.style.position = 'absolute';
        //   fixBox2.style.top = 22+"px";
          fixBox2.style.top = 762+"px";
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
$('#btnGoTop').on('click', function() {
  $('html,body').animate({ scrollTop: '0px' }, 1000); 
    return false; 

});