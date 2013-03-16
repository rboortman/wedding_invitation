
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
var animate_speed = 400;
var animate_options = { duration: animate_speed, queue: false, }

var timeouts = [];
var languages = {};


function over_language (event) {
  $('.img-containers').each( function hover_over (key, img) {
    var timeout = setTimeout( function () {
      $(img).animate(flags[img.id].small_position, animate_options);
      $(img).show(animate_speed);
    }, key * (animate_speed / 2));
    timeouts.push(timeout);
  });
}

function out_language (event) {
  
  $.each(timeouts, function clear_timeouts (key, timeout) {
    clearTimeout(timeout);
    delete timeouts[key];
  })
  
  $('.img-containers').each( function hover_out (key, img) {
    $(img).animate(current_language.center, animate_options);
    $(img).hide(animate_speed);
  });
}

function change_language (event) {
  $('.img-containers').removeClass('selected');
  $(this).addClass('selected');
  
  $('#current-language img')[0].src = 'images/' + this.id + '-flag.png'
  
  languages[this.id].change_lang();
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
  
  $('#text-container').fadeOut({
    duration: animate_speed,
    
    done: function reappear() {
      $('#text-container').fadeIn({
        duration: animate_speed,
      })
    },
  })
}

function ready () {
  
  languages = {
    english: new LanguageObject(en),
    indonesian: new LanguageObject(id),
    dutch: new LanguageObject(nl), 
  }
  
  // console.log(languages)
  
  initiate_language()
  
  $('.img-containers').css(current_language.center).hide().click(change_language);
  $('#language-container').hover(over_language, out_language);
  $('.tab').click(change_tab);
};

window.onload = ready;