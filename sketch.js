//Create variables here
var dog
var happydogImage
var database, foodS, foodStock

function preload()
{
  dogImage = loadImage("images/dogImg.png")
  happydogImage = loadImage("images/dogImg1.png")
}

function setup() {
	createCanvas(500, 500);
  
  database = firebase.database();

  foodStock = database.ref('Food');
  foodStock.on( "value", readStock)

  dog = createSprite(200, 200, 50, 50)
  dog.addImage(dogImage);

  console.log("Hello")

}


function draw() {  
  background(46, 139, 87)

  if(keyWentDown(UP_ARROW)){
    writeStock(foodS)
    dog.addImage(happydogImage)
  }

  drawSprites();
  textSize(35)
  text("Note: Press UP ARROW key to feed Drago Milk!  ",100,40);
  fill("white");

  function readStock(data){
    foodS = data.val();
  }

  function writeStock(x){

    if(x<=0){
      x=0
    }
    else{
      x=x-1;
    }

    database.ref('/').update({
      Food : x
    })
  }

}



