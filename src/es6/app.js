// jQuery

const jQuery = require('jquery');
window.$ = window.jQuery = jQuery;

// owl-carousel
require('../../node_modules/owl.carousel/dist/owl.carousel.min.js');

require('../../node_modules/magnific-popup/dist/jquery.magnific-popup.min.js');


$(document).ready(function(){
  
  // slider
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
});