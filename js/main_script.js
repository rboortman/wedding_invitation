
var flags = {
  indonesian: {
    small_position: {
      top: '-=15',
      bottom: '+=15',
      right: '+=39',
      left: '-=39',
    },
  },
  english: {
    small_position: {
      top: '+=29',
      bottom: '-=29',
      right: '+=29',
      left: '-=29',
    },
  },
  dutch: {
    small_position: {
      top: '+=39',
      bottom: '-=39',
      right: '-=15',
      left: '+=15',
    },
  },
};
var current_language = {
  flag: flags.indonesian,
  center: {top: 20, bottom: 44, right: 20, left: 44, },
};
//var animate_options = { queue: false, complete:  }


function over_language (event) {
  $.each($('.img-containers'), function (key, img) {
    setTimeout( function () {
      $(img).animate(flags[img.id].small_position, { queue: false });
      $(img).show(400);
    }, key * 200)
  });
}

function out_language (event) {
  $.each($('.img-containers'), function (key, img) {
    $(img).animate(current_language.center, { queue: false });
    $(img).hide(400);
  });
}

function change_language (event) {
  $('.img-containers').removeClass('selected');
  $(this).addClass('selected');
  
  $('#current-language img')[0].src = 'images/' + this.id + '-flag.png'
}

function ready () {
  $('.img-containers').css(current_language.center).hide().click(change_language);
  $('#language-container').hover(over_language, out_language);
};

window.onload = ready;