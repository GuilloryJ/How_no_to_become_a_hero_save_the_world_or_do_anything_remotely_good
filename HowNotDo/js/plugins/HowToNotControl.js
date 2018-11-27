/*:
@plugindesc This file was supposed to handle the controlls in HowToNot. Turned out to be a waste of a few hours.
*/
function setControls()
{
	Input.prototype.keyMapper[43] = 'attack'; //C
	Input.keyMapper[5\A] = 'escape'; //Z
	Input.keyMapper[10] = 'jump'; //shift
	Input.keyMapper[56] = 'special'; //V
}
setControls();