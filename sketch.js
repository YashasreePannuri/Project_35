//Create variables here
var dog, happyDog, dogImg1, dogImg2;
var database;
var foodS, foodStock;


function preload()
{
  //load images here
  dogImg1 = loadImage("images/dogImg.png")
  dogImg2 = loadImage("images/dogImg1.png")
  
}

function setup() {
  database = firebase.database();
  createCanvas(500, 500);

  
  foodStock = database.ref('Food');
  foodStock.on("value", readStock);
  
  dog = createSprite(250,250,20,20)
  dog.addImage(dogImg1)
  dog.scale = 0.15
  
}


function draw() { 
  background(46,13,87)
  
  if(keyWentDown(UP_ARROW)){
    writeStock(foodS)
    dog.addImage(dogImg2)
    foodS = foodS -1
  }

  drawSprites();
  //add styles here
  textSize(20)
  strokeWeight(3)
  stroke(153, 0, 115)
  fill(255, 179, 255)
  text("Food Stock: "+ foodS, 50,50)

  console.log(foodS)


}

function readStock(data){
  foodS=data.val();
}

function writeStock(x){

  if(x<=0){
    x=0
  }else{
    x=x
  }
  database.ref('/').update({
    Food:x
  })
}



