function setup() {


  createCanvas(windowHeight/1, windowHeight/2, WEBGL);
}

function draw(){
    
    cursor(CROSS)
        
  background(200);
  rotateX(frameCount * 0.1);
  rotateZ(frameCount * 0.01);
  cylinder(200, 200);
  
}
	



