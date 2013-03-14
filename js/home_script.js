
var image_sources = [
  'images/hellen&ron.png', 
]
var index = 0;
var fade_duration = 1500;
var timeout_duration = 6000;
var min_interval = 1500;
var max_interval = 3000;
var interval_timer = 1000;
var min_angle = -45;
var max_angle = 45;


function get_location (image_width, image_height) {
  var window_width = $(window).width();
  var window_height = $(window).height();
  
  var x = (Math.random() * window_width) - (image_width / 2);
  var y = (Math.random() * window_height) - (image_height / 2);
  
  if (!$.browser.mobile) {
    console.log($('#image-container').find('img'));
    var valid_coord = true;
    
    do {
      $.each($('#image-container').find('img'), function (key, img) {
        var x_diff = Math.abs($(img).offset().left - x);
        var y_diff = Math.abs($(img).offset().top - y);
        
        if (x_diff < (image_width / 2)) { x = (Math.random() * window_width) - (image_width / 2); }
        if (y_diff < (image_height / 2)) { y = (Math.random() * window_height) - (image_height / 2); }
        
        if ((x_diff > (image_width / 2)) && (y_diff > (image_height / 2)))
        
        console.log(x_diff)
        console.log(y_diff)
      })
    } while (!valid_coord)
  }
  
  return {x: x, y: y, }
}

function put_image (image) {
  var image_div = $('<div>', { 'class': 'images' }).hide().append(image);
  image_div.appendTo($('#image-container'));
  
  var image_width = $(image_div).width();
  var image_height = $(image_div).height();
  
  var location = get_location(image_width, image_height);
  var angle = (Math.random() * (max_angle - min_angle)) + min_angle;
  
  image_div
    .css('left', location.x)
    .css('top', location.y)
    .fadeIn(fade_duration, function () {
      setTimeout(function () {
        image_div.fadeOut(fade_duration, function () { image_div.remove() });
      }, timeout_duration)
    }).rotate(angle);
}

function load_image (url, callback) {
	var image = new Image();
	image.src = url;
	image.onload = function() {
	  callback(image);
	}
}


function start_slideshow () {
  
  load_image(image_sources[index], put_image);
  
  index = (index + 1) % image_sources.length;
  interval_timer = (Math.random() * (max_interval - min_interval)) + min_interval;
  
  setTimeout(start_slideshow, interval_timer)
}

function check_mobile () {
  if ($.browser.mobile) {
    $('head').append("<link rel='stylesheet' href='css/mobile/home_style.css' type='text/css' charset='utf-8'>")
  }
}

function enter_site () {
  var date = new Date();
  var minutes = 60;
  date.setTime(date.getTime() + (minutes * 60 * 1000));
  
  $.cookie('to_main', true, { expires: date });
  $(location).attr('href','main.html');
}

function ready () {
  check_mobile();
  start_slideshow();
  
  $('a').click(enter_site);
};

$(document).ready(ready);