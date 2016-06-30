var bannerConstructor = (function() {

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

	init = function() {

		// initialise stage
		stage = new createjs.Stage("demoCanvas");

		// callAssets func
		callAssets();

		// add all images
		addImage(samsung, 'samsung', 40, 120);
		addImage(marksandspencer, 'm-and-s', 175, 120);
		addImage(headerOne, 'header-one', 55, 10);
		addImage(headerTwo, 'header-frame2', 40, 10);
		addImage(broadband, 'broadband-frame2', 65, 60);
		addImage(cta, 'CTA-frame3', 150, 200);
		addImage(headerThree, 'header-frame3', 10, 10);
		addImage(headerFour, 'limited-offer', 72, 100);
		addImage(sheen, 'CTA-extra', 140, 203);

		// add all descriptions
		addDescription(
			descriptionOne,
			'"when you switch to 12 months\nfree Sky Broadband Unlimited", "14px sky-regular", "#0d4597"',
			150,
			35,
			300,
			"center"
		);

		addDescription(
			descriptionTwo,
			'"Sky Line Rental at £16.40pm applies", "12px sky-regular", "#333333"',
			100,
			220,
			300,
			"center"
		);

		addDescription(
			descriptionThree,
			'"when you join online with 12 months\nfree Sky Broadband Unlimited", "14px sky-regular", "#0d4597"',
			150,
			60,
			300,
			"center"
		);

		addDescription(
			descriptionFour,
			'"Sky Line Rental at £16.40pm applies", "12px sky-regular", "#333333"',
			150,
			150,
			300,
			"center"
		);

		// add all animations
		addAnimations();

		// trigger animations
		createjs.Ticker.setFPS(15);
		createjs.Ticker.addEventListener("tick", stage);
	};

	// Function to call assets
	callAssets = function() {
		// PreloadJS - loadManifest for multiple files loading
		queue = new createjs.LoadQueue(true);
		queue.addEventListener("fileload", handleFileComplete);
	 	queue.loadManifest(
	 		[
	 			{
	 				id:"sky-logo",
	 				src:"images/sky-logo.png"
	 			},
	 			{
	 				id:"bg",
	 				src:"images/bg.jpg"
	 			},
	 			{
	 				id:"broadband",
	 				src:"images/broadband-frame2.png"
	 			},
	 			{
	 				id:"cta",
	 				src:"images/CTA-frame3.png"
	 			},
	 			{
	 				id:"sheen",
	 				src:"images/CTA-extra.png"
	 			},
	 			{
	 				id:"headerOne",
	 				src:"images/header-frame1.png"
	 			},
	 			{
	 				id:"headerTwo",
	 				src:"images/header-frame2.png"
	 			},
	 			{
	 				id:"headerThree",
	 				src:"images/header-frame3.png"
	 			},
	 			{
	 				id:"headerFour",
	 				src:"images/limited-offer.png"
	 			},
	 			{
	 				id:"m-and-s",
	 				src:"images/m-and-s.png"
	 			},
	 			{
	 				id:"samsung",
	 				src:"images/samsung.png"
	 			},
 			]
		);
	
		function handleFileComplete(event) {
			document.body.appendChild(event.result);
		};
	};
 
	// Function to add Image
	addImage = function(name, image, xCoord, yCoord,) {

		name = new createjs.Bitmap("images/" + image + ".png");
		name.x = xCoord;
		name.y = yCoord;
		stage.addChild(name);
	};

	// Function to add Description
	addDescription = function(name, settings, xCoord, yCoord, width, align) {

		name = new createjs.Text(content);
		name.x = xCoord;
		name.y = yCoord;
		name.lineWidth = width;
		name.textAlign = align;
		stage.addChild(name);
	};

	// Function to load animations
	addAnimations = function(){
		// Frame 1
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

		// Frame 2
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

		// Frame 3
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
	}

	// Return init function
    return {
        init: init
    };

})();

// Initialise "bannerConstructor"
bannerConstructor.init();