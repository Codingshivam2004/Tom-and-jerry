var cat;
var mouse;
var garden;
var catImage,mouseImage,gardenImage;

function preload() {
    //load the images here
    gardenImage = loadImage("images/garden.png");
mouseImage = loadImage("images/mouse1.png");
catImage = loadImage("images/cat1.png");
}

function setup(){
    createCanvas(1000,800);
    var garden = createSprite(400,400);
    garden.addImage(gardenImage);
    //create tom and jerry sprites here
var mouse = createSprite(200,550,20,20);
mouse.addImage(mouseImage);
mouse.scale = 0.09;

var cat = createSprite(380,550,30,30);
cat.addImage(catImage)
cat.scale = 0.1;
}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here


}
