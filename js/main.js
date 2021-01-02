$(document).ready(function(){

  ////////////  carousel
  $('.carousel').carousel({
    interval: 2000
  });
  //////////// aos library
  AOS.init({
  });



  /////////////// nice scroll library
  $("body").niceScroll({
    cursorcolor:"#D35481",
    cursorwidth:"5px",
    scrollspeed:90
  });



  ///////////// navbar effects with scroll in all screens
$(window).scroll(function() {
  if ($(document).scrollTop() > 100) {
    $('.my-nav').addClass('fixed');
  } else {
    $('.my-nav').removeClass('fixed');
  }
});





//////////////// navbar items smooth scrollTop$('#main-nav li a').click(function(e) {

$('.navbar-nav li a').click(function(e) {

var targetHref = $(this).attr('href');

$('html, body').animate({
  scrollTop: $(targetHref).offset().top
}, 1000);

e.preventDefault();
});






/////////////////////  scrollSpy
$('body').scrollspy({
		target: '#navbarNav',
	});

});
