'use strict';

$(function() {
/*===============================================
ハンバーガ―メニュー ボタンを押したらクラスを追加/削除
===============================================*/
  $(".hamburger_menu").click(function() {
    $(this).toggleClass('active');  //ボタンが×になる
    $(".hamburger_menu_navi").toggleClass('active');  //ナビが出てくる
  });

  $(".hamburger_menu_navi a").click(function() {
    $(".hamburger_menu").removeClass('active');
    $(".hamburger_menu_navi").removeClass('active');
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