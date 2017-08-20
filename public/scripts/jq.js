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
