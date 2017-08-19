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
  $('.links-floating').css('transform','translate3d('+((event.pageY/screenWidth)*200)+'px,0,0)');
  console.log('translate3d('+((event.pageY/screenWidth)*200)+'px,0,0)');
  console.log('awef');
});


// @keyframes shake {
//   0%{
//     transform: translate3d(0, 0, 0);
//   }
//   33.3%{
//     transform: translate3d(0, -3px, 0);
//   }
//   66.6%{
//     transform: translate3d(0, 3px, 0);
//   }
//   100%{
//     transform: translate3d(0, 0, 0);
//   }
// }
//
// $(document).ready(function(){
//   $('.hidden').css('opacity', '1');
//   $('.loader').css('display', 'none');
//   $('.biglogo').removeClass('up-a-bit');
// });
