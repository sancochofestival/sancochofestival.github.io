$(document).ready(function(){
window.addEventListener('scroll', function(e){

  var distanceY = window.pageYOffset || document.documentElement.scrollTop,
      shrinkOn = 100

  if (distanceY > shrinkOn) {

      $('#bigmenu').addClass('menu-protected')
      $('#logo').css("display", "none")
  } else {
      if (  $('#bigmenu').hasClass('menu-protected')) {

           $('#bigmenu').removeClass('menu-protected')
           $('#logo').css("display", "initial")

      }

  }
});

$('a[href^="#"]').on('click',function (e) {
   e.preventDefault();
   var target = this.hash;
   var $target = $(target);

   $('html, body').stop().animate({

       'scrollTop': $target.offset().top

   }, 900, 'swing', function () {

       window.location.hash = target;
   });
});

});
