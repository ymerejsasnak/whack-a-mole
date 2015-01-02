$(function() {

  var ticks = 0;
  var moles = [];
  

  var intervalID = setInterval(function() {
  	createMole(moles);
  }, 500);



});









//need to seperate this shit out so moles can be individual objects with their own timers and points and sizes and shit

var createMole = function(moles) {
  var moleID = moles[moles.length - 1] + 1 || 0;
  var x = Math.random() * 80 + 5;
  var y = Math.random() * 60 + 2.5;


  $("#field").append("<div class='mole' id='mole" + moleID + "'>");
  $("#mole" + moleID).css({ top: y + "%", left: x + "%" });


  moles.push(moleID);
  moleID++;
};