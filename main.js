var ship;
var invaders = [];
var shots = [];

function setup(){
	createCanvas(800, 600);
	ship = new Ship();
	for (var i = 0; i < 6; i ++){
		invaders[i] = new Invader(i*80 + 80,60);
	}
}

function draw(){
	background(51);
	ship.show();
	ship.move();
	for (var i = 0; i < shots.length; i ++){
		shots[i].show();
		shots[i].move();
		for (var j = 0; j < invaders.length; j ++){
			if (shots[i].hits(invaders[j])){
				invaders[j].alive = false;
				shots[i].alive = false;
			}
		}
	}

	var edege = false;
	for (var i = 0; i < invaders.length; i ++){
		invaders[i].show();
		invaders[i].move();
		if (invaders[i].x + invaders[i].r > width || invaders[i].x - invaders[i].r < 0){
			edege = true;
		}
	}

	if (edege){
		for (var i = 0; i < invaders.length; i ++){
			invaders[i].shiftDirection();
		}
	}

	checkDead();

}


function checkDead(){
	for (var i = shots.length - 1; i >= 0; i --){
		if (!shots[i].alive){
			shots.splice(i,1);
		}
	}
	for (var i = invaders.length - 1; i >= 0; i --){
		if (!invaders[i].alive){
			invaders.splice(i,1);
		}
	}
}

function keyReleased(){
	if (key != ' ')
		ship.setDir(0);
}

function keyPressed(){
	if (key === ' '){
		shots.push(new Shot(ship.x,height - 40));
	}

	if (keyCode === LEFT_ARROW){
		ship.setDir(-1);
	}else if (keyCode === RIGHT_ARROW){
		ship.setDir(1);
	}

}