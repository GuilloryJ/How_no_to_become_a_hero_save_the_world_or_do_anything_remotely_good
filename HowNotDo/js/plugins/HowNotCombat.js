/*:
@plugindesc This file was supposed to handle the combat in HowToNot. Turned out to be a waste of a few weeks.
*/

var intializeGameEvent = Game_Event.prototype.initialize;

Game_Event.prototype.initialize = function(mapId, eventId) 
{
	intializeGameEvent.call(this, mapId, eventId);
	//Check to see if something is an enemy
	if (this.isEnemy())
	{
		//"enemy" is in the notes box for enemies
		this.eventEnemyTag = Number($dataMap.events[eventId].meta.enemy);
	}
	//console.log($dataEnemies[this.eventEnemyTag]) //enemy stats. Add .params[numberHere] after brackets to get a specific stat.
	//Health 
	this.enemyHealth = $dataEnemies[this.eventEnemyTag].params[0]; 
	//Damage
	this.enemyAttack = $dataEnemies[this.eventEnemyTag].params[2]; 
}

//Check to see if something is an enemy
Game_Event.prototype.isEnemy = function()
{
	return $dataMap.events[this._eventId].meta.enemy;
}

var updateGameEvent = Game_Event.prototype.update;
Game_Event.prototype.update =function()
{
	updateGameEvent.call(this);
	this.updateAction();
	//delete enemy if health below 0
	if (this.isEnemy())
	{
		if(this.enemyHealth <= 0)
		{
			this.erase();
		}
	}
}

Game_Event.prototype.updateAction =function() 
{
	//Damage ememy when pressing enter
	if (Input.isTriggered('control'))
	{
		this.enemyHealth -=10;
	}
}
/*
Game_Interpreter.prottype.attackEnemy = function(eventId)
{
	$dataMap.events(eventId)._eventEnemyHP -=10;
}
*/
