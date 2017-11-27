// jQuery

const jQuery = require('jquery');
window.$ = window.jQuery = jQuery;

// owl-carousel
require('../../node_modules/owl.carousel/dist/owl.carousel.min.js');

require('../../node_modules/magnific-popup/dist/jquery.magnific-popup.min.js');



// sandwich
$(".sandwich").click(toggleMenu);
$(".nav-link").click(toggleMenu);

function toggleMenu() {
  $(".sandwich").toggleClass("swich");
  if($(".sandwich").hasClass("swich")){
    $(".nav").slideDown();
  }
  else{
    $(".nav").slideUp();
  }
}





// slider
$(document).ready(function(){
  
  $('.owl-carousel').owlCarousel({
    items:1,
    smartSpeed: 500
  });


 

});

$(function () {
  $('.popup-modal').magnificPopup({
    type: 'inline',
    preloader: false,
    modal: true
  });
  $(document).on('click', '.popup-modal-dismiss', function (e) {
    e.preventDefault();
    $.magnificPopup.close();
  });
  $(document).on('click', '.reserv__btn', function (e) {
    $.magnificPopup.close();
    console.log('call')
  });
});