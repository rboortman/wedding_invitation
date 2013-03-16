
var flags = {
  indonesian: {
    small_position: {
      top: '5',
      bottom: '59',
      right: '59',
      left: '5',
    },
  },
  english: {
    small_position: {
      top: '49',
      bottom: '15',
      right: '49',
      left: '15',
    },
  },
  dutch: {
    small_position: {
      top: '59',
      bottom: '5',
      right: '5',
      left: '59',
    },
  },
};
var current_language = {
  flag: flags.indonesian,
  center: {top: 20, bottom: 44, right: 20, left: 44, },
};
//var animate_options = { queue: false, complete:  }

var languages = {};


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
  
  console.log(this)
  
  $('.img-containers').removeClass('selected');
  $(this).addClass('selected');
  
  $('#current-language img')[0].src = 'images/' + this.id + '-flag.png'
  
  languages[this.id].change_language();
}

function initiate_language () {
  var user_language = window.navigator.language || window.navigator.userLanguage || window.navigator.browserLanguage
  var language_element;
  switch (user_language) {
    case 'id':
      language_element = $('#indonesian')
      break;
    
    case 'nl':
      language_element = $('#dutch')
      break;
    
    default:
      language_element = $('#english')
      break;
  }
  change_language.call(language_element[0])
}

function change_tab (event) {
  $('.tab').removeClass('selected');
  $(this).addClass('selected');
}

function ready () {
  
  languages = {
    english: new en(),
    indonesian: new id(),
    dutch: new nl(), 
  }
  
  initiate_language()
  
  $('.img-containers').css(current_language.center).hide().click(change_language);
  $('#language-container').hover(over_language, out_language);
  $('.tab').click(change_tab);
};

window.onload = ready;