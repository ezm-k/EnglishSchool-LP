'use strict';

$(function() {
  /*===============================================
  ハンバーガ―メニュー 共通処理を呼び出し
  ===============================================*/
  $(".hamburger_menu").click(function() {
    hamburger();
  });

  $(".hamburger_menu_navi a").click(function() {
    hamburger();
  });
  
  /*=================================================
  Reason  要素が表示されたらクラスを追加
  ===================================================*/
  //スライド左
  $('.inview_slide_left').on('inview', function(event, isInView) {
    if(isInView){
      $(this).stop().addClass('left_appear');
    }
  });
  
  //スライド右
  $('.inview_slide_right').on('inview', function(event, isInView) {
    if(isInView){
      $(this).stop().addClass('right_appear');
    }
  });
  
  /*=================================================
  Voice  要素が表示されたらクラスを追加
  ===================================================*/
  $('.item').on('inview', function(event, isInView) {
    if(isInView){
      $(this).stop().addClass('voice_appear');
    }
  });
});

/*=================================================
ハンバーガーメニューの共通処理　
===================================================*/
function hamburger() {
  $('.hamburger_menu').toggleClass('active');

  if ($('.hamburger_menu').hasClass('active')) {
    $(".hamburger_menu_navi").addClass('active');
  } else {
    $(".hamburger_menu_navi").removeClass('active');
  }
}