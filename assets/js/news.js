
  window.onscroll=function(){
    var topScroll =document.documentElement.scrollTop;//滚动的距离,距离顶部的距离
    var fixBox = document.getElementById("fixed_box");//获取到导航栏id
    var fixBox2 = document.getElementById("fixed_box2");//获取到导航栏id
    var topScroll =document.documentElement.scrollTop;//滚动的距离,距离顶部的距离
    var nav = document.getElementById("navBtns");//获取到导航栏id
    // let aboutUs=document.getElementById("aboutUs");

    var topLength = nav.getBoundingClientRect().top; //div离屏幕上边距离（长度）
    let height = $(".aboutUs")[0].offsetTop-204;
      if(topScroll>200){
        nav.style.position = 'fixed';
        nav.style.top = '80%';
        nav.style.right = '30px'  
        nav.style.display="block"
      }else{
      nav.style.display="none"
      }
      let fixedPosition=$( "#aboutUs" ).offset().top;
    if(fixBox){
        var leftLength = fixBox.getBoundingClientRect().left; //div离屏幕右边距离（长度）
        
        if(topScroll >=262&&topScroll<fixedPosition-824){
            //当滚动距离大于x时执行下面的东西
    fixBox.style.position = 'fixed';
    fixBox.style.top = 0+"px";
    fixBox.style.marginLeft = '0';
    fixBox.style.left = leftLength+"pp" 
      }
      else if(topScroll>=fixedPosition-845){
          fixBox.style.position = 'absolute';
          fixBox.style.top = fixedPosition-824-268+"px";
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
        
        if(topScroll >=262&&topScroll<fixedPosition-594){
            //当滚动距离大于x时执行下面的东西
    fixBox2.style.position = 'fixed';
    fixBox2.style.top = 0+"px";
    fixBox2.style.marginLeft = '0';
    fixBox2.style.left = leftLength+"pp" 
      }
      else if(topScroll>=fixedPosition-845){
          fixBox2.style.position = 'absolute';
          fixBox2.style.top = fixedPosition-594-268+"px";
          // fixBox.style.marginLeft = '0';
          fixBox2.style.left = leftLength+"pp" 
      }
      else{
      fixBox2.style.position = 'absolute';
      fixBox2.style.top= '0';
      fixBox2.style.left= 'auto';   
      }
    }
    // if(fixBox2){
    //     var leftLength = fixBox2.getBoundingClientRect().left; //div离屏幕右边距离（长度）
    //     if(topScroll >=236&&topScroll<1044){
    //         //当滚动距离大于x时执行下面的东西
    // fixBox2.style.position = 'fixed';
    // fixBox2.style.top = 0+"px";
    // fixBox2.style.marginLeft = '0';
    // // fixBox2.style.left = leftLength+"px" 
    //   }
    //   else if(topScroll>=1044){
    //       fixBox2.style.position = 'absolute';
    //     //   fixBox2.style.top = 22+"px";
    //       fixBox2.style.top = 762+"px";
    //       // fixBox.style.marginLeft = '0';
    //     //   fixBox2.style.left = leftLength+"px" 
    //   }
    //   else{
    //   fixBox2.style.position = 'absolute';
    //   fixBox2.style.top= '0';
    //   fixBox2.style.left= 'auto';   
    //   }
    // }
}

// if (dwei.getBoundingClientRect().top <= 0) {
$('#btnGoTop').on('click', function() {
  $('html,body').animate({ scrollTop: '0px' }, 1000); 
    return false; 

});