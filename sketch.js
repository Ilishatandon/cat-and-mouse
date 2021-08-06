var bgImg
var catImg1, mouseImg
var catImg2, mouse2Img
var cat, cat1
var mouse, mouse
function preload() {
    //load the images here
    bgImg=loadImage("images/garden.png")
    catImg1=loadAnnimation("images/cat1.png")
    mouseImg=loadAnnimation("images/mouse1.png")
    catImg2=loadAnnimation("images/cat2.png","images/cat3.png")
    mouse2=loadAnnimation("images/mouse2.png","images/mouse4.png")
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
cat=createsprite(200,500,40,40)
cat.addAnnimation(catImg1);
cat1=createsprite(400,900,40,40)
cat1.addAnnimation(catImg2);
mouse=createsprite(350,250,30,30)
mouse=addAnnimation
}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here


}
