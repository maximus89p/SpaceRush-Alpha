//this game will have only 1 state
 
var GameState = {
 
  //load the game assets before the game starts
 
  preload: function() {
 this.game.load.image('backyard', 'http://vignette2.wikia.nocookie.net/es.pokemon/images/b/be/Charmander_(anime_SO).png');  
  },
 
  //executed after everything is loaded
 
  create: function() {
      this.background = this.game.add.sprite(0,0, 'backyard');
  },
 
  //game loop, executed many times per second
 
  update: function() {
 
  }
 
};
 
//initiate the Phaser framework
 
var game = new Phaser.Game(360, 640, Phaser.AUTO);
 
game.state.add('GameState', GameState);
 
game.state.start('GameState');
