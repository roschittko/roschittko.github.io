var img;
function preload() {
  img = loadImage("robert_schittko_copyright-10-von-10.jpg");
  img2 = loadImage("lib/222.jpg");

//bei zweitem Bild 
//img2 =loadImage
    
    
}


function setup() {
  createCanvas(windowWidth, windowHeight);
}

var value = 0;

function draw() {
	// place your drawing code here
	
	
	

background("#ffebb4");
	
stroke("#baf8ff");
strokeWeight(10);
fill("#e0ffe2")

image(img2, 0, 0, 200, 150);


image(img2, 0, 70, 200, 150);


ellipse(width/1,height/2,700,790);







/* Einen Teil des Codes Deaktivieren

stroke("white")
triangle(70,80,120,300,160,140,50,90);

*/ 

  image(img, width/2,height/2, 150, 200);
 image(img, 290, 150, 75, 100);

 

// bei zweitem Bild Image(img2)


quad(30,100,10,350,100,350,60,60);

stroke("black");
line(30,100,300,266);

strokeWeight(10);
line(370,230,60,60);











// Move the mouse across the page
// to change its value

  fill(value);
  rect(25, 25, 50, 50);


}


function mouseMoved() {
  value = value + 5;
  if (value > 255) {
    value = 0;
  }
  

}


