//Create variables here
var dogImage, happyDogImage, database, food, foodStock

function preload()
{
  //load images here
  dogImage = loadImage("images/dogImg.png");
  happyDogImage = loadImage("images/dogImg1.png");
}

function setup() {
	createCanvas(500, 500);
  database = firebase.database();
  
  dog = createSprite(250, 250, 10, 10);
  dog.addImage (dogImage)
  dog.scale = 0.25;
}

function draw() {  
  background(46, 139, 87);

  if (keyWentDown(UP_ARROW)){
    writeStock(food);
    dog.addImage(happyDogImage);
}
  foodStock = database.ref('Food');
  foodStock.on("value", readStock);
  console.log(foodStock);

  drawSprites();
}

function writeStock(foodStock){
      foodStock-=1;
      database.ref('/').set({
      Food: foodStock
  });
}

function readStock(data){
  food = data.val();
}