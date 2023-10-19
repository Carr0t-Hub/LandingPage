$(function() {
  $('.square1').click(function(){
    $(this).toggleClass('square-top-left').toggleClass('square-pulse');
    setTimeout(function(){
      $('.square2').toggleClass('square-top-right');
      $('.square3').toggleClass('square-bottom-left');
      $('.square4').toggleClass('square-bottom-right');
    },100);
  });
});