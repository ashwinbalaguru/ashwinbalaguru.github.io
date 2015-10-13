$(document).foundation();
$(document).ready(function() {
  $('.banner-close-button').on('click', function(e){
    e.preventDefault();
    $('.banner').addClass('hide');
  });
  $('.owl-container').owlCarousel({
    navigation : false,
    navigationText:['&lt;', '&gt;'],
    slideSpeed : 300,
    paginationSpeed : 400,
    singleItem:true,
    autoPlay: true,
    pagination: false,
    transitionStyle: "fade"
  });
  $('.youtube-video').fitVids();
});
