var dog,happyDog,foodS,foodStock
var database

function preload()
{
  dogImg = loadImage("images/dogImg.png")
  happyDogImg = loadImage("images/dogImg1.png")
}

function setup() {
  createCanvas(500, 500);
  database=firebase.database()
  dog=createSprite(250,280,10,10)
  dog.addImage(dogImg)
  dog.scale=0.2
  foodStock=database.ref('Food');
  foodStock.on("value",readStock)
}


function draw() {  
  background(46,139,87)

  
  drawSprites();
  //add styles here
  fill("blue")
  textSize(25)
  text("Food Remaining:"+foodS,150,200)
}

function readStock(data){
  foodS=data.val();
}

function keyPressed() {
  if (keyCode === UP_ARROW) {
    writeStock(foodS-1);
    dog.addImage(happyDogImg)
   }
 }

function readStock(data){
  foodS=data.val();
}

function writeStock(x){
  database.ref('/').update({
    Food:x
  })
}