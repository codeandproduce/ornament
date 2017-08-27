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
  // $('.motto').text('First impression is everything.');
  $('.motto').text('We are coming soon! Email me at chanwkim01@gmail.com if you have any questions for now.');


  document.addEventListener('scroll', function (event) {
      if (event.target.id == 'about-contain') {
        var scrollableDivHeight = $(event.target).height(),
            scrollTop = $(event.target).scrollTop(),
            windowHeight = $(window).height();
        var actualScrollTop = $(event.target).scrollTop() + $(event.target).height();
        var addedAlready = false;
        if(actualScrollTop >= $(event.target)[0].scrollHeight-20 && !addedAlready){
          console.log('bruh');
          $('#contain-tree').removeClass('move-out-left');
          $('#contain-tree').toggleClass('tree-link-show');
          $('.tree-label').css('opacity','1');
          // $('#contain-tree').toggleClass('selected-img');
          addedAlready = true;
        }
      }
  }, true /*Capture event*/);
  console.log($('.about-contain').scrollTop());
});

var screenWidth = 0;
var screenHeight = 0;
$(document).ready(function(){
  screenWidth = $(document).width();
  screenHeight = $(document).height();
});

var firstpage = true;
$(document).mousemove(function(event){
  if(firstpage){
    $('#contain-leaf').css('transform','translate3d('+(-(event.pageY/screenWidth)*50)+'px,'+(event.pageY/screenWidth)*20+'px,0)');
    $('#contain-wave').css('transform','translate3d('+((event.pageY/screenWidth)*50)+'px,'+-(event.pageY/screenWidth)*20+'px,0)');
    $('#contain-dandelion').css('transform','translate3d('+((event.pageY/screenWidth)*30)+'px,'+-(event.pageY/screenWidth)*70+'px,0)');
    $('#contain-tree').css('transform','translate3d('+(-(event.pageY/screenWidth)*30)+'px,'+(event.pageY/screenWidth)*70+'px,0)');
  }
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

$(document).on('click', '.learn', function(){
  showPage1();
});
$(document).scroll(function(){
  if($(this).scrollTop() > $(this).height()/4){
    showPage1();
  }
});
function showPage1(){
  firstpage = false;
  $('.contain').css('top','-100vh');
  $('.bottomcontain').css('bottom','0');
  $('.contain-individual-images').toggleClass('contain-individual-images-slow');
  $('.contain-nav-options').toggleClass('contain-nav-options-move-in');
  $('.contain-individual-images-left').toggleClass('move-out-left');
  $('.contain-individual-images-right').toggleClass('move-out-right');
  $('#contain-leaf').removeClass('move-out-left');
  $('#contain-leaf').toggleClass('leaf-top');
  $('#leaf-link').toggleClass('selected-img');
  $('.leaf-label').css('opacity','1');
  $('#contain-leaf').css('animation','none');
}
function showPage2Option(){
}
$(document).on('click', '.next', function(){
  console.log('bruh');
  $('#contain-tree').removeClass('move-out-left');
  $('#contain-tree').toggleClass('tree-link-show');
});
// $('#about-contain').scroll(function(){
//   if($(this).scrollTop() == $(this).height()-20){
//     console.log('bottom!');
//   }
//   console.log('scroll!');
// });
$(".about-contain").on('scroll', function(){
  console.log('new scroll!');
});
