/**
 * sccGame.js
 * This JavaScript file is a template file that can be used to 
 * begin a new game using the Phaser engine (v2.2.2).
 * (c) 2015 Senn Coding Club
 */

	// the entirety of the game module should be wrapped in the window.onload() event
window.onload = function() {
	
	// GLOBAL VARIABLE SETUP
	// The HTML file that contains the game should have a
	// div element whose is "game"
var gameCanvas = document.getElementById("game");	// capture the canvas where the game is to be rendered

	// instantiate a new Phaser game
	// use the actual canvas width and height
	// set the background transparency to true and use the CSS file to adjust
var game = new Phaser.Game(600, 600, Phaser.AUTO, gameCanvas,{ preload: preload, create: create, render : render, update:update }, true);

var sprite;

var upKey;
var downKey;
var leftKey;
var rightKey;
	/** 
	 * preload()
	 * This function is tied to the preload game state in the Phaser framework.
	 * It is called when the game first load.
	 * All of the assets (images, sounds, etc.), should be loaded here.
	 */                        
function preload() {
    // load all game assets here
     
  	// load the example pickle image and tie it to the 'mainPC' key
  //game.load.image('mainPC', '../images/pickle.png');
  game.load.spritesheet('sprite', '../images/drathaxSpriteSheet.png', 50, 60, 4);
  

} 

	/**
	 * create()
	 * This function is tied to the create game state in the Phaser framework.
	 * It is called when the game is first created. The initial game 
	 * should be rendered out here.
	 */
function create() {
  		// create the game world here
  		 
  		// add the mainPC key as a sprite in the center of the game board
  		// anchor the sprite to the middle of the insertion point 0.5, 0.5
  	sprite = game.add.sprite(game.world.centerX, game.world.centerY, 'sprite');
		//var mainPC = game.add.sprite(game.world.centerX, game.world.centerY, 'mainPC'); 
   	//mainPC.anchor.setTo(0.5, 0.5);
   sprite.animations.add('walk');
   sprite.animations.play('walk', 5, true);
  	upKey = game.input.keyboard.addKey(Phaser.Keyboard.UP);
   downKey = game.input.keyboard.addKey(Phaser.Keyboard.DOWN);
   leftKey = game.input.keyboard.addKey(Phaser.Keyboard.LEFT);
   rightKey = game.input.keyboard.addKey(Phaser.Keyboard.RIGHT);
}
  
	/**
	 * update()
	 * This function is tied to the update game state in the Phaser framework.
	 * It is called at 60 times per second. All the redraw happens within this area.
	 */
function update() {
  if(upKey.isDown)
  {
    sprite.y -= 2;
  }
  else if(downKey.isDown)
  {
    sprite.y += 2;
  }

  
  else if(leftKey.isDown)
  {
    sprite.x -= 2;
  }

  else if(rightKey.isDown)
  {
    sprite.x += 2;
  }


}
  

  	/**
  	 * render()
  	 * This function is tied to the render game state in the Phaser framework.
  	 * 
  	 */
function render(){ 


}
  
};