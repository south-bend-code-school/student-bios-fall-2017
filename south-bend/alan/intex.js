
(function(){

  $(document).ready(initialize)

  function initialize(){
    $('#button').click(colorChange);
  }


  function colorChange() {
    $('#button').css('background-color', 'red');
  }

})();
