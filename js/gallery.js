$(function(){

  var $thumbnails = $('#gallery img');

  // Thumbnail fading

  $thumbnails.fadeTo(200, .5);

  $thumbnails.hover(function(){
    // mouseover
    $(this).fadeTo(600, 1);
  }, function(){
    // mouseoff
    $(this).fadeTo(400, .5);
  });

  // Image Modal

  // $("#gallery img").fancybox();

})