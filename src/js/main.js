// $("セレクタ").メソッド("パラメータ[引数]");
// HTMLが準備できたら、中身の記述を実行する
// ここにjQueryの処理を記述

$(function() {
  var h = $(window).height(); //windowの高さ(px) 1vh = h/100(px);

  //フェードイン
  $('#container > section').not('#mv').each(function () {
    //タイトルのアニメーション
    var windowWidth = window.innerWidth;
    function beforeSectionRevealed(_this) {
      $(_this).children('*').css('visibility', 'hidden');
      $(_this).children('*').css('opacity', '1');
    }
    function afterSectionRevealed (_this) {
      $(_this).find('.main-ttl-letters span').addClass('ttl-anime-letters');
      $(_this).find('.main-ttl-line').addClass('ttl-anime-line');
      $(_this).children('*').each(function(i) {
        ScrollReveal().reveal(this, {
          delay: 60*i,
          viewFactor: 0.1,
          duration: 250,
          origin: 'bottom',
          distance: '20px',
          reset: false,
          afterReveal: function(_this) {
            $(_this).find(".marker-animation").each(function(){
              $(this).addClass('active');
            });
            $(_this).removeAttr('style');
          },
        })
      });
      $(_this).removeAttr('style');
    }
    function afterSectionReseted (_this) {
      $(_this).find('.main-ttl-letters span').removeClass('ttl-anime-letters');
      $(_this).find('.main-ttl-line').removeClass('ttl-anime-line');
    }

    ScrollReveal().reveal(this, {
      viewFactor: 0.0,
      duration: 800,
      origin: 'bottom',
      distance: '40px',
      reset: false,
      afterReveal: afterSectionRevealed, //()をつけてはだめ
      afterReset: afterSectionReseted,
      beforeReveal: beforeSectionRevealed
    });
  });

  //再読み込み時も表示
  jQuery(window).scroll();

  //ページ内リンクへのスムーズスクロール
  $('a[href^="#"]').click(function(){
    var speed = 1000;
    var header_h = 150; //px
    var href= $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top - header_h;
    $("html, body").animate({scrollTop: position}, speed, "easeOutExpo");
    return false;
  });

  //ハンバーガーメニュー
  $('.hamburger').click(function () {
    $('.hamburger-wrap').fadeToggle();
    $(this).toggleClass('open');
    $('.header-nav').toggleClass('open');
  });
  
  $(document).click(function(event){
    var target = $(event.target);
    if(target.hasClass('hamburger-wrap')) {
      target.fadeOut();
      $('.hamburger').removeClass('open');
      $('.header-nav').removeClass('open');
    }
  });

});
