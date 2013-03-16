function id () {
  var html = {
    header: {
      tabs: {
        hellen: 'Hellen',
        us: 'Kita',
        ron: 'Ron', 
      },
    },
  }
  
  
  this.change_header = function () {
    $.each($('.tab-span'), function change_tabs (key, element) {
      $(element).text(html.header.tabs[element.id]);
    })
  }
  
}

id.prototype.change_language = function () {
  this.change_header()
}