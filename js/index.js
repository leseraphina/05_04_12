import $ from 'jquery';

$(function(){
  let windowW = $(window).width();
  console.log(windowW);
      if(windowW >= 1320){
    nav();
    subMenu();
    topScroll();
  }
  else if(windowW <1320 && windowW >=980){
    nav();
    subMenu();
    topScroll();
  }
  else if(windowW <980 && windowW >=580){
    mobileNav();
  }
  else if(windowW <580){

  }

})

// 함수
//  함수 옮기기
//  nav
function nav(){
        $('nav>ul>li>a').on('click',function(e){
          let navHref = $(this).attr('href');
          let aPos = $(navHref).offset().top;
          console.log(aPos);
         $('html,body').animate({scrollTop:aPos},800);
         //  
         return false;
        })
      }
     
function subMenu(){
       $('aside ul>li>a').on('click',function(e){
         let navHref = $(this).attr('href');
         let aPos = $(navHref).offset().top;
          console.log(aPos);
         $('html,body').animate({scrollTop:aPos},800);
         //  
         return false;
       });
     }
     
function topScroll(){
       $('aside .top').on('click',function(e){
         $('html,body').animate({scrollTop:0},800);
       })
     }
     // table, mobile
     
function mobileNav(){
        $('header p#btn').on('click',function(e){
          $('nav').animate({left:'0'},800);
          $(this).hide();
        });
     
        $('nav>ul>li>a').on('click',function(e){
         let navHref = $(this).attr('href');
         let aPos = $(navHref).offset().top;
         $('nav').css('left','-480px');
          console.log(aPos);
         $('html,body').animate({scrollTop:aPos},800);
         $('header p#btn').show();
         //  
         return false;
        });
     
        $('nav .close').on('click',function(e){
       $('nav').animate({left:'-480px'},300);
       $('header p#btn').show();
        })
     }

