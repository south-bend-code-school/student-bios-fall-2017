(function() {

$(document).ready(initialize)

function initialize(){
  $('#thebutton').click(colora);
}





function colora() {
  $('#thebutton').css('background-color','red');
  $('#thebutton').css('padding', '200pt');
  $('#thebutton').css('background-image', 'url("http://neodragon786.weebly.com/uploads/1/5/5/8/15587732/1196576_orig.jpg?201")');
  $('#thebutton').css('background-size', 'cover');
}

})();
