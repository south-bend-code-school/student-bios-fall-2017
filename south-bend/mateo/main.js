(function(){

  $(document).ready(initialize)

function initialize() {
  $('#button').click(textChange);
  $('#button2').click(colorChange);
  $('#button3').click(colorChange2);
  $('#button4').click(colorChange3);
}

function textChange() {
    $('#body').css('color', 'blue');
  }


function colorChange() {
  $('#body').css('color', 'gold');
}

function colorChange2() {
  $('#body').css('color', 'DarkRed');
}

function colorChange3() {
  $('#body').css('background-color', 'cyan');
}

})();
