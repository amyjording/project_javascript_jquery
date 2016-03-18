
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

$(document).ready(function () {
    for (var i = 0; i < cols; i++) {
          $row.append($square.clone().css({"width": n, "height": n}));
        }

    for (var i = 0; i < rows; i++) {
      $("#wrapper").append($row.clone().css({"width": n, "height": n}));
    }

  $('div.square').mouseenter(function(){
        $(this).fadeTo("slow", 0.5) /*.addClass("over"); */

        /*.css("background-color", "#ffe28a");
      }); */

          });
});
