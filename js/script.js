// JavaScript Document

// EaselJS
function init() {

	window.onload = function() { setInterval(fn,15000)};

	// Define variables
	var queue,
		stage,
		sky,
		samsung,
		marksandspencer,
		headerOne,
		descriptionOne,
		headerTwo,
		descriptionTwo,
		headerThree,
		headerFour,
		descriptionThree,
		descriptionFour,
		cta,
		sheen;
	
	stage = new createjs.Stage("bannerCanvas");

	// PreloadJS - loadManifest for multiple files loading
	queue = new createjs.LoadQueue(true);
	queue.addEventListener("fileload", handleFileComplete);
 	queue.loadManifest([{id:"sky-logo", src:"images/sky-logo.png"}, {id:"bg", src:"images/bg.jpg"}, {id:"broadband", src:"images/broadband-frame2.png"}, {id:"cta", src:"images/CTA-frame3.png"}, {id:"sheen", src:"images/CTA-extra.png"}, {id:"headerOne", src:"images/header-frame1.png"}, {id:"headerTwo", src:"images/header-frame2.png"}, {id:"headerThree", src:"images/header-frame3.png"}, {id:"headerFour", src:"images/limited-offer.png"}, {id:"m-and-s", src:"images/m-and-s.png"}, {id:"samsung", src:"images/samsung.png"},]);

	function handleFileComplete(event) {
		document.body.appendChild(event.result);
	}

	// Assign sky logo
	sky = new createjs.Bitmap("images/sky-logo.png");
	sky.x = 10;
	sky.y = 210;
	stage.addChild(sky);

// *** Frame 1 start ***

	// Assign samsung
	samsung = new createjs.Bitmap("images/samsung.png");
	samsung.x = 40;
	samsung.y = 120;
	stage.addChild(samsung);

	// Assign marksandspencer
	marksandspencer = new createjs.Bitmap("images/m-and-s.png");
	marksandspencer.x = 175;
	marksandspencer.y = 120;
	stage.addChild(marksandspencer);

	// Assign headerOne
	headerOne = new createjs.Bitmap("images/header-frame1.png");
	headerOne.x = 55;
	headerOne.y = 10;
	stage.addChild(headerOne);

	// Assign DescriptionOne
	descriptionOne = new createjs.Text("when you switch to 12 months\nfree Sky Broadband Unlimited", "14px sky-regular", "#0d4597");
	descriptionOne.x = 150;
	descriptionOne.y = 35;
	descriptionOne.lineWidth = 300;
	descriptionOne.textAlign = "center";
	stage.addChild(descriptionOne);

	// Animate samsung
	createjs.Tween.get(samsung, { loop: false })
		.to({ alpha: 1, y: 120 }, 4000) 
	  	.to({ alpha: 0, y: 120 }, 1000, createjs.Ease.getPowInOut(10))

	// Animate marksandspencer
	createjs.Tween.get(marksandspencer, { loop: false })
		.to({ alpha: 1, y: 120 }, 4000) 
	  	.to({ alpha: 0, y: 120 }, 1000, createjs.Ease.getPowInOut(10))

	// Animate headerOne
	createjs.Tween.get(headerOne, { loop: false })
	  	.to({ alpha: 0, y: 10 }, 0)
	  	.to({ alpha: 0, y: 10 }, 500)
	  	.to({ alpha: 1, y: 10 }, 1000, createjs.Ease.getPowInOut(10))
	  	.to({ alpha: 1, y: 10 }, 2000)
		.to({ alpha: 0, y: 10 }, 1000, createjs.Ease.getPowInOut(10))

	// Animate descriptionOne
	createjs.Tween.get(descriptionOne, { loop: false })
	  	.to({ alpha: 0, y: 35 }, 0)
	  	.to({ alpha: 0, y: 35 }, 1000)
	  	.to({ alpha: 1, y: 35 }, 1000, createjs.Ease.getPowInOut(10))
	  	.to({ alpha: 1, y: 35 }, 1500)
		.to({ alpha: 0, y: 35 }, 1000, createjs.Ease.getPowInOut(10))

// *** Frame 1 end ***

// *** Frame 2 start ***

	// Assign headerTwo
	headerTwo = new createjs.Bitmap("images/header-frame2.png");
	headerTwo.x = 40;
	headerTwo.y = 10;
	stage.addChild(headerTwo);

	// Assign DescriptionTwo
	descriptionTwo = new createjs.Text("Sky Line Rental at £16.40pm applies", "12px sky-regular", "#333333");
	descriptionTwo.x = 100;
	descriptionTwo.y = 220;
	stage.addChild(descriptionTwo);

	// Assign broadband
	broadband = new createjs.Bitmap("images/broadband-frame2.png");
	broadband.x = 65;
	broadband.y = 60;
	stage.addChild(broadband);

	// Animate headerTwo
	createjs.Tween.get(headerTwo, { loop: false })
	  	.to({ alpha: 0, y: 10 }, 0)
	  	.to({ alpha: 0, y: 10 }, 3500)
	  	.to({ alpha: 1, y: 10 }, 3500, createjs.Ease.getPowInOut(10))
		.to({ alpha: 0, y: 10 }, 2000, createjs.Ease.getPowInOut(10))

	// Animate descriptionTwo
	createjs.Tween.get(descriptionTwo, { loop: false })
	  	.to({ alpha: 0, y: 220 }, 0)
	  	.to({ alpha: 0, y: 220 }, 4500)
	  	.to({ alpha: 1, y: 220 }, 3000, createjs.Ease.getPowInOut(10))
		.to({ alpha: 0, y: 220 }, 1000, createjs.Ease.getPowInOut(10))

	// Animate broadband
	createjs.Tween.get(broadband, { loop: false })
		.to({ alpha: 0, y: -100 }, 0)
		.to({ alpha: 0, y: -100 }, 6000)
	  	.to({ alpha: 1, y: 60 }, 1000, createjs.Ease.bounceOut)
		.to({ alpha: 1, y: 60 }, 1000)
		.to({ alpha: 0, y: 60 }, 1000, createjs.Ease.getPowInOut(10))

// *** Frame 2 end ***

// *** Frame 3 start ***

	// Assign cta
	cta = new createjs.Bitmap("images/CTA-frame3.png");
	cta.x = 150;
	cta.y = 200;
	stage.addChild(cta);

	// Assign headerThree
	headerThree = new createjs.Bitmap("images/header-frame3.png");
	headerThree.x = 10;
	headerThree.y = 10;
	stage.addChild(headerThree);

	// Assign descriptionThree
	descriptionThree = new createjs.Text("when you join online with 12 months\nfree Sky Broadband Unlimited", "14px sky-regular", "#0d4597");
	descriptionThree.x = 150;
	descriptionThree.y = 60;
	descriptionThree.lineWidth = 300;
	descriptionThree.textAlign = "center";
	stage.addChild(descriptionThree);

	// Assign headerFour
	headerFour = new createjs.Bitmap("images/limited-offer.png");
	headerFour.x = 72;
	headerFour.y = 100;
	stage.addChild(headerFour);

	// Assign descriptionFour
	descriptionFour = new createjs.Text("Sky Line Rental at £16.40pm applies", "12px sky-regular", "#333333");
	descriptionFour.x = 150;
	descriptionFour.y = 150;
	descriptionFour.lineWidth = 300;
	descriptionFour.textAlign = "center";
	stage.addChild(descriptionFour);

	// Assign sheen
	sheen = new createjs.Bitmap("images/CTA-extra.png");
	sheen.x = 140;
	sheen.y = 203;
	stage.addChild(sheen);

	// Animate cta
	createjs.Tween.get(cta, { loop: false })
		.to({ alpha: 0, y: 200 }, 0)
		.to({ alpha: 0, y: 200 }, 8500)
	  	.to({ alpha: 1, y: 200 }, 2000, createjs.Ease.getPowInOut(10))

	// Animate headerThree
	createjs.Tween.get(headerThree, { loop: false })
	  	.to({ alpha: 0, y: 10 }, 0)
	  	.to({ alpha: 0, y: 10 }, 9000)
	  	.to({ alpha: 1, y: 10 }, 2000, createjs.Ease.getPowInOut(10))

	// Animate descriptionThree
	createjs.Tween.get(descriptionThree, { loop: false })
	  	.to({ alpha: 0, y: 60 }, 0)
	  	.to({ alpha: 0, y: 60 }, 9500)
	  	.to({ alpha: 1, y: 60 }, 2000, createjs.Ease.getPowInOut(10))

	// Animate headerFour
	createjs.Tween.get(headerFour, { loop: false })
	  	.to({ alpha: 0, y: 100 }, 0)
	  	.to({ alpha: 0, y: 100 }, 10000)
	  	.to({ alpha: 1, y: 100 }, 2000, createjs.Ease.getPowInOut(10))

	// Animate descriptionFour
	createjs.Tween.get(descriptionFour, { loop: false })
	  	.to({ alpha: 0, y: 150 }, 0)
	  	.to({ alpha: 0, y: 150 }, 10500)
	  	.to({ alpha: 1, y: 150 }, 2000, createjs.Ease.getPowInOut(10))

	// Animate sheen
	createjs.Tween.get(sheen, { loop: false })
	  	.to({ alpha: 0, y: 203 }, 0)
	  	.to({ alpha: 0, y: 203 }, 11500)
	  	.to({ alpha: 1, y: 203, x: 290 }, 2500, createjs.Ease.getPowInOut(10))
	  	.to({ alpha: 0, y: 203, x: 290 }, 100)

// *** Frame 3 end ***

	createjs.Ticker.setFPS(15);
	createjs.Ticker.addEventListener("tick", stage);

}