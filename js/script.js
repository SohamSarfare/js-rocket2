
console.log('Hello there General Kenobi');
		var car = {
			make: 'VW',
			type: 'Polo',
			color: 'Blue',
			isTurnedOn: false,
			numberOfWheels: 4,
			seats: ['seat1','seat2','seat3','seat4'],
			turnOn: function () {
				this.isTurnedOn=true;
			},
			switchCar: function(isOn){
				if(isOn){
					this.isTurnedOn = true;
				} else{
					this.isTurnedOn = false;
				}

			},
			fly: function(){
				alert("Fly you fools!!")
			}
		};

//Changing Colour of div
function doCoolStuff(){
	var currentClassName = document.getElementById('cool').className;
	if(currentClassName=='colour'){
		document.getElementById('cool').className = 'colour green';
	}
	else {
		document.getElementById('cool').className = 'colour';
	}
	
}