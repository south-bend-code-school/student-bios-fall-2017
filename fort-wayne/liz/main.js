(function(){

  $(document).ready(initialize);

  function initialize() {

    $('button').click(changeColor);



}

  function changeColor() {
    var buttoncolor=$(this).text();
    $('h1').css('color',buttoncolor);
  }

})();
