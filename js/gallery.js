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

  $('#piano-g-img').mouseover(function(){
    $('#piano-g')[0].play();
  });

  $('#piano-a-img').mouseover(function(){
    $('#piano-a')[0].play();
  });

});