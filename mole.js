"use strict";


$(function() {

  var game = { level: 1,
               whacked: 0,
               score: 0,
               moles: [],
               ticks: 0 };


  createHoles();




  //'whacking' event handler
  $("#field").on("click", ".mole", function() {
    var id = $(this).attr("id");
    var position = parseInt( id.substring(3) );

    var whackedMole = game.moles.filter( function(mole) {
      return mole.position === position;
    });
   
    //whackedMole is an array but will only have 1 value in it so just use index 0
    game.moles[ game.moles.indexOf(whackedMole[0]) ].life = 0;

    game.whacked++;
    game.score += game.level * 10;

    console.log(game.whacked);

  });




  //game loop
  var intervalID = setInterval(function() {
  	
  	if (game.ticks % 20 === 0) {
  	  game.moles.push( createMole() );
  	  game.moles.push( createMole() );
  	}

    game.moles = updateMoles(game.moles);

  	game.ticks++;
  }, 100);



});






var createHoles = function() {
	for (var i = 0; i < 80; i++) {
		$("#field").append("<div id='pos" + i + "' class='hole'></div>");
	}
}



var createMole = function() {
  
  var mole = {position: Math.floor(Math.random() * 80),
          life: 20};
  
  $("#pos" + mole.position).addClass("mole");
  
  return mole;
};



var updateMoles = function(moles) {

  for (var i = 0; i < moles.length; i++) {
		moles[i].life--;
		if (moles[i].life <= 0) {
      $("#pos" + moles[i].position).removeClass("mole");
      moles[i] = false; //set to false for later removal, but don't cut yet because it will mess up loop
    }
	}

  //filter out deleted moles  (ie ones set to false)
	var resultMoles = moles.filter(function(alive) {
		return alive;
	});

  return resultMoles;
};




