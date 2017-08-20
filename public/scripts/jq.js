// setTimeout(function(){
//
// },3000);
window.addEventListener("load", function(){
  $('.hidden').css('opacity', '1');
  $('.loader').css('display', 'none');
  $('.biglogo').removeClass('up-a-bit');
  $('.contain-nav-options').removeClass('contain-nav-options-hidden');
  $('.logo').removeClass('logo-hidden');
  $('.learn').css('display','block');
  $('.come-right').css('right', '0');
  $('.motto').text('First impression is everything.');
});
var screenWidth = 0;
var screenHeight = 0;
$(document).ready(function(){
  screenWidth = $(document).width();
  screenHeight = $(document).height();
});
$(document).mousemove(function(event){
  $('#contain-leaf').css('transform','translate3d('+(-(event.pageY/screenWidth)*50)+'px,'+(event.pageY/screenWidth)*20+'px,0)');
  $('#contain-wave').css('transform','translate3d('+((event.pageY/screenWidth)*50)+'px,'+-(event.pageY/screenWidth)*20+'px,0)');
  $('#contain-dandelion').css('transform','translate3d('+((event.pageY/screenWidth)*30)+'px,'+-(event.pageY/screenWidth)*70+'px,0)');
  $('#contain-tree').css('transform','translate3d('+(-(event.pageY/screenWidth)*30)+'px,'+(event.pageY/screenWidth)*70+'px,0)');
});

// Menu button click
var menuOpened = false;
$(document).on('click', '.menu-button', function(){
  if(menuOpened == false){
    $('.shorter-span-left').css('transform','translate(0,-4.5px) rotate(45deg)  scale(2)');
    $('.shorter-span-right').css('transform','translate(0px,4.5px) rotate(-45deg) scale(2)');
    $('.span-center').css('height','0');
    $('.contain-individual-images').toggleClass('contain-individual-images-slow');
    $('.contain-nav-options').toggleClass('contain-nav-options-move-in');
    $('.contain-individual-images-left').toggleClass('move-out-left');
    $('.contain-individual-images-right').toggleClass('move-out-right');
    $('.tint').toggleClass('tint-appear');
    $(this).toggleClass('opened-menu');
    menuOpened=true;

  }else{
    $('.shorter-span-left').css('transform','translate(0,0) rotate(0deg)  scale(1)');
    $('.shorter-span-right').css('transform','translate(0px,0) rotate(0deg) scale(1)');
    $('.span-center').css('height','4px');
    $('.contain-nav-options').removeClass('contain-nav-options-move-in');
    $('.contain-individual-images-left').removeClass('move-out-left');
    $('.contain-individual-images-right').removeClass('move-out-right');
    setTimeout(function(){
      $('.contain-individual-images').removeClass('contain-individual-images-slow');
    },2000);
    $('.tint').removeClass('tint-appear');
    menuOpened = false;
  }

});
