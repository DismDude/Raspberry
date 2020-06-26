const {Pin, Board, Sensor, Servo} = require("johnny-five");
const board = new Board();

board.on("ready", () => {


	const slider = new Sensor("A0");
	const tilt = new Servo(10);
	//Pin.read(slider, (err, val) => console.log("slider",val));

	slider.on("change", (slidePos) => {
			console.log(slidePos)
			tilt.to(slider.scaleTo(0, 180));
			});
		});


