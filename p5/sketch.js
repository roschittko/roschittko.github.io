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
  
  
  background("white");
  var ellipseWidth = Math.random()
  
  var ellipseWidth = Math.random()
  * 100;
  
  var ellipseWith = Math.random()
    
  ellipse(100,100,100,100);
  
	// place your drawing code here

 
  
  /*

  var regularArr = ['#ffebb4', 'white'];
  print(regularArr);
  shuffle(regularArr, true); // force modifications to passed array
  print(regularArr);
  
   // By default shuffle() returns a shuffled cloned array:
  var newArr = shuffle(regularArr);
  print(regularArr);
  print(newArr)
  
   background(newArr[0]);
   
   */


	
  stroke("#baf8ff");
strokeWeight(1);
fill("#e0ffe2")






ellipse(width/1,height/2,500,790);

ellipse(0,height/2,500,790);






// Einen Teil des Codes Deaktivieren

stroke("white")


/*
triangle(70,80,windowWidth,300,160,600,50,90);
*/


  image(img, 430, 100, 400, 600);


 

// bei zweitem Bild Image(img2)




/*
stroke("black");
line(30,100,300,266);

line(370,230,60,60);

*/

strokeWeight(1);





// Move the mouse across the page
// to change its value

    fill(value);
  rect(0, 50, 1500, 50);
  
  
     fill(value);
  rect(0, 200, 1500, 50);
  
  
  fill(value);
  rect(0, height/2, 1500, 50);
  
  
   fill(value);
  rect(0, 470, 1500, 50);
  
  
  fill(value);
  rect(0, 610, 1500, 50);
  
 
 
 
 
textSize(30);

  textFont("Helvetica");
  text ("i NEVER really loved you / it was just how you looked in the light",100 ,89);
  
  text ("//////////////////////////////////////////////////////////////////",100 ,233);

  text ("//////////////////////////////////////////////////////////////////",100 ,371);
  
  




}


function mouseMoved() {
  value = value + 2;
  if (value > 500) {
    value = 0;
  }
  

}


