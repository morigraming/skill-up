$(function(){
  
  // AOS.js
  AOS.init()
  
  // ハンバーガーメニュー
  $(".hamburger-menu").show();

  $(".hamburger-menu").on("click",function() {
    $(this).toggleClass("close");
    $(".nav-wrapper").slideToggle(200);
  });

  // よくある質問、アコーディオン
  $(function(){
    $(".FAQ-question").on("click", function() {
      $(this).next().slideToggle();
      $(".FAQ-question").not($(this)).next().slideUp();
    });
  });
  
    // 制作実績,スライダー
    var swiper = new Swiper ('.swiper-container', {
      slidesPerView: 1,
      autoplay: {
        delay: 5000
      },
      loop: true,
      centeredSlides : true,
      breakpoints: {
        768: {
          slidesPerView: 2,
        },
        1000: {
          slidesPerView:4,
        },
      },
    });

  // お問い合わせ、チェックボタン確認後送信
  $('#submit').prop('disabled', true);

  $('#check').on('click', function() {
    if ( $(this).prop('checked') == false ) {
      $('#submit').prop('disabled', true);
    } else {
      $('#submit').prop('disabled', false);
    }
  });

  // お問い合わせ、スムーススクロール
  $('a[href^="#"]').click(function() {
    // スクロールの速度
    var speed = 400; // ミリ秒で記述
    var href = $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top;
    $('body,html').animate({
      scrollTop: position
    }, speed, 'swing');
    return false;
  });

});
