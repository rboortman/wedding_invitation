function nl () {
  var html = {
    header: {
      tabs: {
        hellen: 'Zij',
        us: 'Wij',
        ron: 'Hij', 
      },
    },
  }
  
  
  this.change_header = function () {
    $.each($('.tab-span'), function change_tabs (key, element) {
      $(element).text(html.header.tabs[element.id]);
    })
  }
  
}

nl.prototype.change_language = function () {
  this.change_header()
}