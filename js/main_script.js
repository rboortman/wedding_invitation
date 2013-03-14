
var flags = {
  indonesian: {
    small_position: {
      top: 5,
      bottom: (90 - 26) - 5,
      right: (90 - 26) - 5,
      left: 5,
    },
  },
  english: {
    small_position: {
      top: (90 - 26) - 15,
      bottom: 15,
      right: (90 - 26) - 15,
      left: 15,
    },
  },
  dutch: {
    small_position: {
      top: (90 - 26) - 5,
      bottom: 5,
      right: 5,
      left: (90 - 26) - 5,
    },
  },
};
var current_language = {
  flag: flags.indonesian,
  center: {top: 20, bottom: 44, right: 20, left: 44, },
};
var animate_options = { queue: false, }


function over_language (event) {
  $('.img-containers').removeAttr('style');
  
  $.each($('.img-containers'), function (key, img) {
    $(img).animate(flags[img.id].small_position, animate_options)
  });
}

function out_language (event) {
  $('.img-containers').removeAttr('style');
  $('.img-containers').animate(current_language.center, animate_options);
}

function ready () {
  $('.img-containers').css(current_language.center);
  $('#language-container').hover(over_language, out_language);
};

$(document).ready(ready);