(function(){

$(document).ready(initialize);

function initialize(){
alert("Welcome");

$('button').click(ChangeColor);


}


function ChangeColor() {
  var buttoncolor=$(this).text();
  $('h1').css('color',buttoncolor);







})();
