$(function() {

  var ticks = 0;
  var moles = [];
  

  var intervalID = setInterval(function() {
  	
  	if (ticks % 5 === 0) {
  	  moles.push(createMole(moles));
  	  moles = updateMoles(moles);

  	}

  	    
    console.log(moles)

  	ticks++;
  }, 500);



});







var createMole = function(moles) {
  
  mole = {id: moles.length,
          x: Math.random() * 80 + 5,
          y: Math.random() * 55 + 5,
          life: 2};
  
  $("#field").append("<div class='mole' id='mole" + mole.id + "'>");
  $("#mole" + mole.id).css({ top: mole.y + "%", left: mole.x + "%" });

  return mole;
};




var updateMoles = function(moles) {

  for (var i = 0; i < moles.length; i++) {
		moles[i].life--;
		if (moles[i].life <= 0) {
      $("#mole" + moles[i].id).remove();
      moles[i] = false; //set to false for later removal, but don't cut yet because it will mess up loop
    }
	}

  //filter out deleted moles  !!!!!!!this isn't working!!!! why?????
	var resultMoles = moles.filter(function(value) {
		return value;
	});

  return resultMoles;
};




