// jQuery

const jQuery = require('jquery');
window.$ = window.jQuery = jQuery;

// owl-carousel
require('../../node_modules/owl.carousel/dist/owl.carousel.min.js');



$(document).ready(function(){
  $('.owl-carousel').owlCarousel({
    items:1,
    smartSpeed: 500
  });
});