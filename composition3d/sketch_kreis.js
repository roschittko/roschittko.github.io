function setup() {


  createCanvas(windowWidth, windowHeight);
  
  frameRate(4);
  
  //Framerate geschwindigkeit beim reload
   

}

//Variable definieren "myPosotion" könnte alles heißen 

 var myPosition = 0;

function draw(){
  

 
  
  
  var mousePercent = (mouseX/width) * 255;
  


  console.log(mousePercent);
  background(mousePercent)
  
  line(pmouseX,pmouseY,mouseX,mouseY);
  myPosition = myPosition + 1;
  
// Variable einmalig definiert


  
  fill("#def1ff");
  textSize(50);
  text(key, 300, 300);

  
  console.log(key);
  
  if(key =="H"){    
    background("red")
    text("LOST",windowWidth/2,windowHeight/2);
  
    
    
  
  } else {
    background("#deffe0");
  
  
  
  }
 
 
 
  //hhjdbackground("white");
  var ellipseWidth = Math.random()*100;
  var ellipseHeight = Math.random()* 100;
  
  var ellipseX = Math.random()*width;
  var ellipseY = Math.random()*height;
  ellipse (ellipseX,ellipseY,ellipseWidth,ellipseHeight);
 
 
 
}


function windowResized() {
  resizeCanvas(windowWidth, windowHeight)
}

