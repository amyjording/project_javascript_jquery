
var input = prompt("Type number of squares you want in your grid.");
var container = 640;
var n = container / input;
var rows = input;
var cols = input;

var $row = $("<div />", {
  class: 'row'
});
var $square = $("<div />", {
  class: 'square'
})

var safeColors = ['00','33','66','99','cc','ff'];
var rand = function() {
    return Math.floor(Math.random()*6);
};
var randomColor = function() {
    var r = safeColors[rand()];
    var g = safeColors[rand()];
    var b = safeColors[rand()];
    return "#"+r+g+b;
};

$(document).ready(function () {
    for (var i = 0; i < cols; i++) {
          $row.append($square.clone().css({"width": n, "height": n}));
        }

    for (var i = 0; i < rows; i++) {
      $("#wrapper").append($row.clone().css({"width": n, "height": n}));
    }
          $('div.square').mouseenter(function() {
                  $(this).css('background',randomColor());
          });
});
