function Invader(x, y){
	this.x = x;
	this.y = y;
	this.alive = true;
	this.r = 20;
	this.xDir = 1;

	this.show = function(){
		fill(255, 0 ,200, 150);
		noStroke();
		rectMode(CENTER);
		ellipse(this.x, this.y, this.r*2, this.r*2);
	}

	this.move = function(){
		this.x = this.x + this.xDir;
	}

	this.shiftDirection = function(){
		this.xDir *= -1;
		this.y += this.r;
	}

		

}
