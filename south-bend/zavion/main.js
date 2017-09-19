(function() {

$(document).ready(initalize);

  function initalize(){
      $('#button1').click(changeColorblue);
      $('#button2').click(changeColoryellow);
  }

  function changeColorblue(){
    $('body').css('background-color','blue')
  }
  function changeColoryellow(){
    $('body').css('background-color','Yellow')
  }

})();
