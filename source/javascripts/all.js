//= require_tree .
//= require jquery

$('document').ready(function() {
  var el = $('#title');

  var width = el.width();
  var docWidth = document.body.scrollWidth;

  var leftPos = (docWidth/2) - (width/2);
  el.css('left', leftPos);
})