// A $( document ).ready() block.
$(document).ready(function() {
  new WOW().init();
  $('.scrollspy').scrollSpy();
  $('.button-collapse').sideNav();
  $('.parallax').parallax();

});

$(function() {
  $('.tlt').textillate();
});

$(document).ready(function(){
    // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
    $('.modal').modal();
  });
