function Shot(x, y){
	this.x = x;
	this.y = y;
	this.r = 8;
	this.alive = true;

	this.show = function(){
		fill(255, 200 ,0);
		rectMode(CENTER);
		noStroke();
		ellipse(this.x, this.y, this.r*2, this.r*2);
	}

	this.hits = function(invader){
		var d = dist(this.x, this.y, invader.x,invader.y);
		if (d < this.r + invader.r){
			return true;
		}else{
			return false;	
		}
	}

	this.move = function(){
		this.y = this.y - 5;
	}

	

}
