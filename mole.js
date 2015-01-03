"use strict";


$(function() {

  var ticks = 0;
  var moles = [];

  createHoles();
  

  var intervalID = setInterval(function() {
  	
  	if (ticks % 5 === 0) {
  	  moles.push( createMole() );
  	  
  	  moles = updateMoles(moles);
  	}

  	    
    

  	ticks++;
  }, 500);



});




var createHoles = function() {
	for (var i = 0; i < 80; i++) {
		$("#field").append("<div id='pos" + i + "' class='hole'></div>");
	}
}




var createMole = function() {
  
  var mole = {position: Math.floor(Math.random() * 80),
          life: 2};
  
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

  //filter out deleted moles  !!!!!!!this isn't working!!!! why?????
	var resultMoles = moles.filter(function(value) {
		return value;
	});

  return resultMoles;
};




