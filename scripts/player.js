//Inputs
var KEYCODE_UP = 38, KEYCODE_DOWN = 40, KEYCODE_LEFT = 37, KEYCODE_RIGHT = 39, KEYCODE_ATTACK = 32;
//Variables del Script
var old_weapon = 11, old_mov = 11, old_type = 11;
var restringir = false;

//Funcion para extraer imagen por imagen el sprite del jugador
function createPlayerSpriteSheet(){
	var arrayFrames = [];
	for(i = 0; i < 122; i++){
		if(i < 5)
			arrayFrames[i] = [i * 24, 0, 24, 44, 0];
		else if(i < 10)
			arrayFrames[i] = [(i - 5) * 24, 44, 24, 44, 0];
		else if(i < 15)
			arrayFrames[i] = [(i - 10) * 24, 44 * 2, 24, 44, 0];
		else if(i < 20)
			arrayFrames[i] = [(i - 15) * 24, 44 * 3, 24, 44, 0];
		else if(i < 31)
			arrayFrames[i] = [(i - 20) * 24, 44 * 4, 24, 44, 0];
		else if (i < 42)
			arrayFrames[i] = [(i - 31) * 24, 44 * 5, 24, 44, 0];
		else if(i < 46)
			arrayFrames[i] = [(i - 42) * 24, 44 * 6, 24, 44, 0];
		else if(i < 50)
			arrayFrames[i] = [(i - 46) * 24, 44 * 7, 24, 44, 0];
		else if(i < 55)
			arrayFrames[i] = [(i - 50) * 24, 44 * 8, 24, 44, 0];
		else if(i < 60)
			arrayFrames[i] = [(i - 55) * 24, 44 * 9, 24, 44, 0];
		else if(i < 65)
			arrayFrames[i] = [(i - 60) * 24, 44 * 10, 24, 44, 0];
		else if(i < 70)
			arrayFrames[i] = [(i - 65) * 24, 44 * 11, 24, 44, 0];
	}
	return {
		"animations": {
			"idle_front": [0, 4, "idle_front", .1],
			"idle_back": [5, 9, "idle_back", .1],
			"idle_left": [10, 14, "idle_left", .1],
			"idle_right": [15, 19, "idle_right", .1],
			"run_front": [20, 30, "run_front", .6],
			"run_back": [31, 41, "run_back", .6],
			"run_left": [42, 45, "run_left", .2],
			"run_right": [46, 49, "run_right", .2],
			"attack_front": [50, 54, "idle_front", .3],
			"attack_back": [55, 59, "idle_back", .3],
			"attack_left": [60, 64, "idle_left", .3],
			"attack_right": [65, 69, "idle_right", .3]
		},
		"images": ["img/player.png"],
		"frames": arrayFrames
	}
}

//Funcion para extraer el Sprite de las armas
function createWeaponSpriteSheet(){
	var arrayFrames = [];
	/////////////////////////////////
	////BLUE SWORD
	/////////////////////////////////
	arrayFrames[0] = [0, 0, 14, 14, 0];
	arrayFrames[1] = [0, 14, 14, 14, 0];
	arrayFrames[2] = [0, 14, 14, 14, 0, 0, -1];
	arrayFrames[3] = [0, 14, 14, 14, 0, 0, -2];
	arrayFrames[4] = [0, 14, 14, 14, 0, 0, -1];
	arrayFrames[5] = [0, 14, 14, 14, 0];
	arrayFrames[6] = [14, 14, 14, 14, 0];
	arrayFrames[7] = [14, 14, 14, 14, 0, 0, -1];
	arrayFrames[8] = [14, 14, 14, 14, 0, 0, -2];
	arrayFrames[9] = [14, 14, 14, 14, 0, 0, -1];
	arrayFrames[10] = [14, 14, 14, 14, 0];
	arrayFrames[11] = [28, 14, 14, 14, 0];
	arrayFrames[12] = [42, 14, 14, 14, 0, 15, 4];
	arrayFrames[13] = [56, 14, 14, 14, 0, 15, 27];
	arrayFrames[14] = [75, 14, 4, 34, 0, 10, 20];
	arrayFrames[15] = [84, 14, 14, 14, 0];
	arrayFrames[16] = [98, 14, 14, 14, 0];
	arrayFrames[17] = [112, 14, 14, 14, 0];
	arrayFrames[18] = [126, 14, 14, 14, 0, -16, 27];
	arrayFrames[19] = [140, 14, 14, 14, 0, -16, 27];
	arrayFrames[20] = [154, 14, 14, 14, 0];
	arrayFrames[21] = [168, 14, 14, 14, 0];
	arrayFrames[22] = [182, 14, 14, 14, 0, 5, 7];
	arrayFrames[23] = [196, 14, 14, 14, 0, 5, 27];
	arrayFrames[24] = [210, 14, 15, 34, 0, 12, 23];
	arrayFrames[25] = [225, 14, 14, 14, 0];
	arrayFrames[26] = [239, 14, 14, 14, 0];
	arrayFrames[27] = [253, 14, 14, 14, 0, -5, 7];
	arrayFrames[28] = [267, 14, 14, 14, 0, -5, 27];
	arrayFrames[29] = [281, 14, 14, 34, 0, -12, 23];
	arrayFrames[30] = [296, 14, 14, 14, 0];

	return {
		"animations": {
			"empty": [0, 0, "empty", 1],
			"blue_sword_back": [1, 5, "blue_sword_back", .1],
			"blue_sword_front": [6, 10, "blue_sword_front", .1],
			"blue_sword_attack_front": [11, 15, "blue_sword_front", .3],
			"blue_sword_attack_back": [16, 20, "blue_sword_back", .3],
			"blue_sword_attack_left": [21, 25, "blue_sword_back", .3],
			"blue_sword_attack_right": [26, 30, "blue_sword_front", .3]
		},
		"images": ["img/Sword2.png"],
		"frames": arrayFrames
	}
}

//Funcion que modifica la posicion del player de acuerdo al input
function movementUpdate(mov, player, weapon){
	switch(mov){
		case KEYCODE_UP:
			if(player.y < -22)
				player.y = stage_height - 24;
			else
				player.y -= 2;
			weapon.y = player.y + 20;
			weapon.x = player.x - 11;
			break;
		case KEYCODE_LEFT:
			if(player.x < -12)
				player.x = stage_width - 12;
			else
				player.x -= 2;
			weapon.y = player.y + 20;
			weapon.x = player.x;
			break;
		case KEYCODE_DOWN:
			if((player.y + 2) > (stage_height - 24))
				player.y = -22;
			else
				player.y += 2;
			weapon.y = player.y + 20;
			weapon.x = player.x + 20;
			break;
		case KEYCODE_RIGHT:
			if((player.x + 2) > (stage_width - 12))
				player.x = -12;
			else
				player.x += 2;
			weapon.y = player.y + 20;
			weapon.x = player.x + 10;
			break;
	}
}

//Funcion que modifica la animacion del player de acuerdo al input
function animationUpdate(weapon, mov, type, player, weapon_sprite){
	if((weapon != old_weapon || mov != old_mov || type != old_type) && !restringir){
		//Type: IDLE = 0, Action = 1
		//Mov: UP = KEYCODE_UP, LEFT = KEYCODE_LEFT, DOWN = KEYCODE_DOWN, RIGHT = KEYCODE_RIGHT
		//Weapon: Nothing = 0, BlueSword = 1
		if(type == 0){
			switch(mov){
				case KEYCODE_UP:
					player.gotoAndPlay("idle_back");
					switch(weapon){
						case 0:
							weapon_sprite.gotoAndPlay("empty");
							break;
						case 1:
							weapon_sprite.gotoAndPlay("blue_sword_back");
							break;
					}
					old_mov = mov;
					break;
				case KEYCODE_LEFT:
					player.gotoAndPlay("idle_left");
					switch(weapon){
						case 0:
							weapon_sprite.gotoAndPlay("empty");
							break;
						case 1:
							weapon_sprite.gotoAndPlay("blue_sword_back");
							break;
					}
					old_mov = mov;
					break;
				case KEYCODE_DOWN:
					player.gotoAndPlay("idle_front");
					switch(weapon){
						case 0:
							weapon_sprite.gotoAndPlay("empty");
							break;
						case 1:
							weapon_sprite.gotoAndPlay("blue_sword_front")
							break;
					}
					old_mov = mov;
					break;
				case KEYCODE_RIGHT:
					player.gotoAndPlay("idle_right");
					switch(weapon){
						case 0:
							weapon_sprite.gotoAndPlay("empty");
							break;
						case 1:
							weapon_sprite.gotoAndPlay("blue_sword_front");
							break;
					}
					old_mov = mov;
					break;
			}
		}
		else if(type == 1){
			switch(mov){
				case KEYCODE_UP:
					player.gotoAndPlay("run_back");
					switch(weapon){
						case 0:
							weapon_sprite.gotoAndPlay("empty");
							break;
						case 1:
							weapon_sprite.gotoAndPlay("blue_sword_back");
							break;
					}
					old_mov = mov;
					break;
				case KEYCODE_LEFT:
					player.gotoAndPlay("run_left");
					switch(weapon){
						case 0:
							weapon_sprite.gotoAndPlay("empty");
							break;
						case 1:
							weapon_sprite.gotoAndPlay("blue_sword_back");
							break;
					}
					old_mov = mov;
					break;
				case KEYCODE_DOWN:
					player.gotoAndPlay("run_front");
					switch(weapon){
						case 0:
							weapon_sprite.gotoAndPlay("empty");
							break;
						case 1:
							weapon_sprite.gotoAndPlay("blue_sword_front");
							break;
					}
					old_mov = mov;
					break;
				case KEYCODE_RIGHT:
					player.gotoAndPlay("run_right");
					switch(weapon){
						case 0:
							weapon_sprite.gotoAndPlay("empty");
							break;
						case 1:
							weapon_sprite.gotoAndPlay("blue_sword_front");
							break;
					}
					old_mov = mov;
					break;
				case KEYCODE_ATTACK:
					switch(weapon){
						case 1:
							switch(old_mov){
								case KEYCODE_DOWN:
									player.gotoAndPlay("attack_front");
									weapon_sprite.gotoAndPlay("blue_sword_attack_front");
									createjs.Sound.play("sword_attack", {interrupt:createjs.Sound.INTERRUPT_NONE, loop:0, volume:0.5})
									restringir = true;
									break;
								case KEYCODE_UP:
									player.gotoAndPlay("attack_back");
									weapon_sprite.gotoAndPlay("blue_sword_attack_back");
									createjs.Sound.play("sword_attack", {interrupt:createjs.Sound.INTERRUPT_NONE, loop:0, volume:0.5})
									restringir = true;
									break;
								case KEYCODE_LEFT:
									player.gotoAndPlay("attack_left");
									weapon_sprite.gotoAndPlay("blue_sword_attack_left");
									createjs.Sound.play("sword_attack", {interrupt:createjs.Sound.INTERRUPT_NONE, loop:0, volume:0.5})
									restringir = true;
									break;
								case KEYCODE_RIGHT:
									player.gotoAndPlay("attack_right");
									weapon_sprite.gotoAndPlay("blue_sword_attack_right");
									createjs.Sound.play("sword_attack", {interrupt:createjs.Sound.INTERRUPT_NONE, loop:0, volume:0.5})
									restringir = true;
									break;
							}
					}
					break;
				case 49:
					switch(old_mov){
						case KEYCODE_UP:
							weapon_sprite.gotoAndPlay("empty");
							break;
						case KEYCODE_RIGHT:
							weapon_sprite.gotoAndPlay("empty");
							break;
						case KEYCODE_DOWN:
							weapon_sprite.gotoAndPlay("empty");
							break;
						case KEYCODE_LEFT:
							weapon_sprite.gotoAndPlay("empty");
							break;
					}
					player.weapon = 0;
					break;
				case 50:
					switch(old_mov){
						case KEYCODE_UP:
							weapon_sprite.gotoAndPlay("blue_sword_back");
							break;
						case KEYCODE_RIGHT:
							weapon_sprite.gotoAndPlay("blue_sword_front");
							break;
						case KEYCODE_DOWN:
							weapon_sprite.gotoAndPlay("blue_sword_front");
							break;
						case KEYCODE_LEFT:
							weapon_sprite.gotoAndPlay("blue_sword_back");
							break;
					}
					player.weapon = 1;
					break;
			}
		}
		old_type = type;
		old_weapon = weapon;
	}
}

function handleAnimationEndPlayer(event){
	if(event.name == "attack_front" ||
		event.name == "attack_back" ||
		event.name == "attack_left" ||
		event.name == "attack_right")
		restringir = false;
}