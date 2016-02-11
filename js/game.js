var game = new Phaser.Game(400, 720, Phaser.AUTO,'game',{preload: preload,create: create,update: update});
var road;
var car;
var speed=2;

//loading assets
function preload()
{
  game.load.image('road','asset/rd.jpg');
  game.load.image('car','asset/Car.png');
}
//creating assets with attribute to the game
function create()
{
 game.physics.startSystem(Phaser.Physics.ARCADE); //enable game physics
 
 road = game.add.tileSprite(200,360,1200,1200,'road');
 road.anchor.setTo(0.5,0.5);
 car = game.add.sprite(200,520,'car');
 car.anchor.setTo(0.5,0.5);
	car.name = 'car';
	game.physics.enable(car, Phaser.Physics.ARCADE);
	car.body.collideWorldBounds = true;
	car.body.bounce.setTo(1, 1);
}
function update()
{
  road.tilePosition.y+=2;
 if (game.input.keyboard.isDown(Phaser.Keyboard.LEFT))
    {
        car.x -= speed;
        car.angle = -15;
       // leftBtn.alpha = 0.6;
    }
    else if (game.input.keyboard.isDown(Phaser.Keyboard.RIGHT))
    {
        car.x += speed;
        car.angle = 15;
        //rightBtn.alpha = 0.6;
    }
    else
    {
        car.rotation = 0;
        //leftBtn.alpha = rightBtn.alpha = 0;
        	//game.physics.arcade.collide(sprite, sprite2);
    }
}
