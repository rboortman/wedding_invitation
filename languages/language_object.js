function LanguageObject (lang) {
  this.html = lang;
  
  this.change_header = function () {
    var obj = this;
    $('.tab-span').each( function change_tabs (key, element) {
      $(element).text(obj.html.header.tabs[element.id]);
    })
  }
  
  this.change_lang = function () {
    this.change_header()
  }
}