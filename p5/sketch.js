function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
	// place your drawing code here

background("#e0ffe2")
	
stroke("#baf8ff")
strokeWeight(10);
fill("#47fff8")
ellipse(width/2,height/2,150,150);
ellipse(width/3,height/2,200,150);

quad(15,15,10,200,70,51,90,40);

strokeWeight(7);
line(width/2,height/2,0,0);
stroke("green");
line(300,360,0,0);

rect(400,10,20,20);

triangle(20,80,120,300,160,140,50,90);

point(300,300);


noFill();
stroke(255, 102, 0);
curve(5, 26, 5, 26, 73, 24, 73, 61);
stroke(0);
curve(5, 26, 73, 24, 73, 61, 15, 65);
stroke(255, 102, 0);
curve(73, 24, 73, 61, 15, 65, 15, 65);









}

