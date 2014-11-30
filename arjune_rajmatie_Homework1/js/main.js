/*
     Name: Rajmatie Arjune
     Date: November 29th, 2014
     Class & Section:  WIA-201412
     Title: "HTML5 Canvas & Modernizr Homework"
 */

/*******************************************
HTML5 Shape Drawing Activity
    1.  Setup the canvas and 2d context
    2.  Draw out each shape in the sections below
     
********************************************/

/*******************************************
FILE SETUP

// Setup up 7 different Canvases in index.html one for each problem.
//Link Modernizr.js
// Link the main.js file
// Setup the call to that canvas and get it's 2d context
//Use Modernizr to verify that your browser supports canvas, include a fallback message


/*******************************************
PART 1

Draw a rectangle starting at point (0 ,0)
That has a width of 50 px and a heigh of 100px
Set the color of the rectangle to a shade of blue.
Set the stroke color to black and the dimension of the stroke are the same as the rectangle.

Reminder - set the style first then draw.
********************************************/

//Draw Rectangle here


window.onload = function() {
	var theCanvas = document.getElementById('Canvas1');
	if (theCanvas && theCanvas.getContext) {
	var ctx = theCanvas.getContext("2d");
	if (ctx) {
		
		ctx.fillStyle = "rgba(0,102,255,1)";
		ctx.lineWidth = 3;
		
		ctx.fillRect(0,0,50, 100);
		ctx.strokeRect(0,0,50,100);



/*******************************************
PART 2

Draw a circle starting at point (50 ,50)
That has a radius of 20 px 
Set the color of the circle to a shade of red and set the alpha to .5
Set the stroke color to black and use a radius of 30px for this circle.

Reminder - set the style first then draw.
Use the arc method
********************************************/


//Draw Circle here
	var theCanvas = document.getElementById("Canvas2");
			if (theCanvas && theCanvas.getContext) {
			var ctx = theCanvas.getContext("2d");
			
					if(ctx){
						ctx.strokeStyle = "black";
						ctx.fillStyle = "rgba(204,0,51,1)";
						ctx.lineWidth = 5;
						ctx.lineRadius = 30;
						var degrees = 360;
						var radians = (degrees/180)*Math.PI;
						ctx.beginPath();
						ctx.arc(50,50,20,0,  radians);
						ctx.fill();
						ctx.stroke();
						
					}
				}

/*******************************************
PART 3

Practice using Path drawing.
Create a 5-point star shaped pattern using the lineTo method.
Begin this shape at (100, 100)

Height and width and color are up to you.

********************************************/


//Draw Star here

	var theCanvas = document.getElementById("Canvas3");
			if (theCanvas && theCanvas.getContext) {
			var ctx = theCanvas.getContext("2d");
			
					if(ctx){
						ctx.strokeStyle = "black";
						ctx.fillStyle = "rgba(204,0,51,1)";
						ctx.lineWidth = 2;
						ctx.beginPath(100,100);
						ctx.moveTo(100,10);
						ctx.lineTo(40,198);
						ctx.lineTo(190,78);
						ctx.lineTo(10,78);
						ctx.lineTo(160,198);
						ctx.closePath();
						ctx.fill();
						ctx.stroke();
						
					}
				}



/*******************************************
PART 4

Practice drawing with Bezier curves.
Try drawing the top to an umbrella.
This should have one large arc (a half circle) on the top and scalloped edges on the bottom.

Position, height, width and color are your choice.
Do not overlap any other object.

********************************************/

//Draw Umbrella top here

	var theCanvas = document.getElementById("Canvas4");
			if (theCanvas && theCanvas.getContext) {
			var ctx = theCanvas.getContext("2d");
			
					if(ctx){
			
						ctx.strokeStyle = "black";
						ctx.lineWidth = 2;
						
						ctx.beginPath();
						ctx.moveTo(400, 200);
						var degrees = 360;
						var radians = (degrees/180)*Math.PI;
						ctx.beginPath();
						ctx.arc(150,100,80, 110, radians);
						ctx.closePath();
					 	ctx.fill();
						ctx.stroke();  
					}
				}



/*******************************************
PART 5

Practice using text.
Draw text into your canvas.  It can said whatever you would like in any color.

********************************************/

//Draw text here
	var theCanvas = document.getElementById("Canvas5");
			if (theCanvas && theCanvas.getContext) {
			var ctx = theCanvas.getContext("2d");
			
			if(ctx){

			var theString = "There is beauty all around!";
			ctx.strokeText(theString, 35,30);
						
			ctx.font = "20pt Times";
			ctx.fillStyle = "rgba(0,153,153,1)";
			ctx.fillText(theString, 35, 85);
			
			ctx.font = "20pt Arial Black";
			ctx.fillStyle = "rgba(0,250,153,1)";
			ctx.strokeStyle = "rgba(0,0,0,1)";
			ctx.fillText(theString, 35, 140);
			ctx.strokeText(theString, 35, 140);
			
			}
		}


/*******************************************
PART 6

Pixel manipulation.
Draw the image logo.png into the canvas in the following 3 ways.
1. The image exactly as it is.
2. Shrink the image by 50%
3. Slice a section of the logo out and draw that onto the canvas.

Reminder to use the drawImage method for all 3 of the ways.

********************************************/

//Draw images here

	var theCanvas = document.getElementById("Canvas6");
			if (theCanvas && theCanvas.getContext) {
			var ctx = theCanvas.getContext("2d");
			
			if(ctx){
				
				var srcImg = document.getElementById("img1");
				
				//image exactly as it is.
				ctx.drawImage(srcImg, 0, 60);
			
				//scaled 
				ctx.scale(.5, .5);
				ctx.drawImage(srcImg, 0,580);
		
				//sliced 
				ctx.beginPath();
				ctx.moveTo(srcImg, 120, 240);
				ctx.lineTo(-150, 10);
				ctx.lineTo(730,-110);
				ctx.lineTo(65,120);
				ctx.closePath();
				ctx.clip();
				ctx.drawImage(srcImg, 0,0);   
			
			}
		}


/*******************************************
PART 7

Putting it all together. 

Using a combination of all the methods. 
Create a complex scene.
You must use at least 3 different methods.

********************************************/

// Draw scene here

	var theCanvas = document.getElementById("Canvas7");
			if (theCanvas && theCanvas.getContext) {
			var ctx = theCanvas.getContext("2d");
			if(ctx){
			
						//boat by the sun's horizon
						ctx.strokeStyle = "black";
						ctx.fillStyle = "yellow";
						ctx.lineWidth = 2;
						
						ctx.beginPath();
						ctx.moveTo(400, 200);
						var degrees = 360;
						var radians = (degrees/180)*Math.PI;
						ctx.beginPath();
						ctx.arc(150,100,80, 110, radians);
				
						ctx.moveTo(70, 100);
						ctx.bezierCurveTo(91, 120, 118, 200, 189, 15);	
						ctx.closePath();
					 	ctx.fill();
						ctx.stroke();  
						
						//volleyball				
						var srcImg = document.getElementById("img2");
						var rotation = 10;
						ctx.translate(theCanvas.width/2, theCanvas.height/1);
						
						setInterval(function(){
						rotation +=5;				
						ctx.rotate(rotation * (Math.PI /180));
						ctx.drawImage(srcImg, 10, 80);
						}, 400)
					
				}
				}


		}
	}
}



