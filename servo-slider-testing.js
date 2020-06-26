const {Pin, Board, Sensor, Servo} = require("johnny-five");
const board = new Board();

board.on("ready", () => {

	const slider = new Sensor("A0");
	const tilt = new Servo(10);
	let oldSlide = 0;

	slider.on("change", (slidePos) => {
			
			function getDiff() { return Math.abs(oldSlide - slidePos)}


			const difference = getDiff();
				oldSlide = slidePos;
			
			
	
			if (difference >= 2) {
						console.log ( {oldSlide, slidePos, difference } );
						tilt.to(slider.scaleTo(0, 180));
		}
			});
		
	}
		);


