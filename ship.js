function Ship(){
	this.x = width / 2;
	this.xDir = 0;

	this.show = function(){
		fill(255);
		rectMode(CENTER);
		rect(this.x, height - 20, 20, 40);
	}

	this.move = function(direction){
		this.x += this.xDir * 5;
	}

	this.setDir = function(direction){
		this.xDir = direction;
	}



}
