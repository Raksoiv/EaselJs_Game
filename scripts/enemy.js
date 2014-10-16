var animate = 0;

function createEnemySpriteSheet(){
	var arrayFrames = [];
	for(i = 0; i < 32; i++){
		if(i < 4)
			arrayFrames[i] = [i * 16, 0, 16, 36, 0];
		else if(i < 14)
			arrayFrames[i] = [(i - 4) * 16, 36, 16, 36, 0];
		else if(i < 24)
			arrayFrames[i] = [(i - 14) * 16, 36 * 2, 16, 36, 0];
		else if(i < 28)
			arrayFrames[i] = [(i - 24) * 16, 36 * 3, 16, 36, 0];
		else if(i < 32)
			arrayFrames[i] = [(i - 28) * 16, 36 * 4, 16, 36, 0];
	}
	return {
		"animations": {
			"idle_front": [0, 0, "idle_front", .1],
			"idle_back": [1, 1, "idle_back", .1],
			"idle_right": [2, 2, "idle_right", .1],
			"idle_left": [3, 3, "idle_left", .1],
			"run_front": [4, 13, "run_front", .4],
			"run_back": [14, 23, "run_back", .4],
			"run_right": [24, 27, "run_right", .2],
			"run_left": [28, 31, "run_left", .2]
		},
		"images": ["img/Enemy1.png"],
		"frames": arrayFrames
	}
}

function enemyMove(Player, Enemy){
	if(distance(Player, Enemy)){
		//console.log(Player.x + " : " + Enemy.x)
		var velocity = 1;
		if(Enemy.x > (Player.x + 1)){
			Enemy.x -= velocity;
			if(Enemy.animate != 1){
				Enemy.gotoAndPlay("run_left");
				Enemy.animate = 1;
			}
		}
		else if(Enemy.x < Player.x){
			Enemy.x += velocity;
			if(Enemy.animate != 2){
				Enemy.gotoAndPlay("run_right");
				Enemy.animate = 2;
			}
		}
		else if(Enemy.y > (Player.y + 1)){
			Enemy.y -= velocity;
			if(Enemy.animate != 3){
				Enemy.gotoAndPlay("run_back");
				Enemy.animate = 3;
			}
		}
		else if(Enemy.y < Player.y){
			Enemy.y += velocity;
			if(Enemy.animate != 4){
				Enemy.gotoAndPlay("run_front");
				Enemy.animate = 4;
			}
		}
	}
	else{
		switch(Enemy.currentAnimation){
			case "run_left":
				Enemy.gotoAndPlay("idle_left");
				Enemy.animate = 0;
				break;
			case "run_right":
				Enemy.gotoAndPlay("idle_right");
				Enemy.animate = 0;
				break;
			case "run_front":
				Enemy.gotoAndPlay("idle_front");
				Enemy.animate = 0;
				break;
			case "run_back":
				Enemy.gotoAndPlay("idle_back");
				Enemy.animate = 0;
				break;
		}
	}
}

function distance(Player, Enemy){
	var x, y;
	x = Enemy.x - Player.x;
	if(x < 0)
		x = x * -1;
	y = Enemy.y - Player.y;
	if(y < 0)
		y = y * -1;
	if(x > 200 || y > 200)
		return false;
	else
		return true;
}

function onHitSword(weapon, enemy){
	var weapon_bound, start, end, enemy_bound;
	weapon_bound = weapon.getBounds();
	start = weapon.localToLocal(weapon_bound.x, weapon_bound.y, enemy);
	end = weapon.localToLocal(weapon_bound.width, weapon_bound.height, enemy);
	enemy_bound = enemy.getBounds();
	if(((start.x <= enemy_bound.x && enemy_bound.x <= end.x) || (start.x <= enemy_bound.width && enemy_bound.width <= end.x)) &&
		((start.y <= enemy_bound.y && enemy_bound.y <= end.y) || (start.y <= enemy_bound.height && enemy_bound.height <= end.y)))
		enemy.alpha = 0;
	return;
}