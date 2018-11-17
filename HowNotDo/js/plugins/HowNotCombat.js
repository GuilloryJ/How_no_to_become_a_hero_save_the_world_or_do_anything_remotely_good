//This file will handle the combat in HowNotBe

var intializeGameEvent = Game_Event.prototype.initialize;

Game_Event.prototype.initialize = function(mapId, eventId) 
{
	intializeGameEvent.call(this, mapId, eventId);
	this.eventEnemyTag = Number($dataMap.events[eventId].meta.enemy);
	console.log(this.eventEnemyTag);
}