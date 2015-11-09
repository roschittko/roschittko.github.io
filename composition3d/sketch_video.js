var img;
var img2;
var input;
var analyzer;

// Erforderliche Lautstärke für das zweite Bild
// Wert zwischen 0.0 und 1.0
var scale = 0.1;

var maxH = 0;

// Wert ab dem der counter aufsteigt
// Wert zwischen 0.0 und 1.0
var threshold = 0.15;

var counter = 0;

function setup() {
  img = loadImage("lib/444.jpg");
  img2 = loadImage("lib/333.jpg");
  createCanvas(windowWidth, windowHeight);

  background(0);
  mic = new p5.AudioIn();
  mic.start();
}

function draw() {
  background(0);
  image(img2, 0, 0, windowWidth, windowHeight);
  tint(255, counter);
  image(img, 0, 0, windowWidth, windowHeight);

  var vol = mic.getLevel();
  var v = map(vol, 0, scale, 255, 0);
  var mask = counter;

  if (vol >= threshold) {
    counter++;
  }

  if (vol <= 0.025) {
    counter *= 0.95;
    if (counter <= 0) {
      counter = 0;
    }
  }

  println(mask + " VOLUME: " + vol * 100);

}