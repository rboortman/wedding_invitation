function en () {
  var html = {
    header: {
      tabs: {
        hellen: 'Her',
        us: 'Us',
        ron: 'Him', 
      },
    },
  }
  
  
  this.change_header = function () {
    $.each($('.tab-span'), function change_tabs (key, element) {
      $(element).text(html.header.tabs[element.id]);
    })
  }
  
}

en.prototype.change_language = function () {
  this.change_header()
}