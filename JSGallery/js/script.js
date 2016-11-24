$(document).ready(function() {
  var currentIndex = 0;
  var images = $('#slider div img');
  $(images[currentIndex]).show();

  $('#debug').text(currentIndex);

  $('input[value="Next"]').click(function() {
    if(currentIndex < images.length - 1) {
      currentIndex++;

      for(var i = 0; i < images.length; i++)
        $(images[i]).hide();

      $(images[currentIndex]).show();

      $('#debug').text(currentIndex);
    }
  });

  $('input[value="Prev"]').click(function() {
    if(currentIndex > 0) {
      currentIndex--;

      for(var i = 0; i < images.length; i++)
        $(images[i]).hide();

      $(images[currentIndex]).show();

      $('#debug').text(currentIndex);
    }
  });
});
