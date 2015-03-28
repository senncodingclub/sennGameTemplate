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
//declare a var to store the sprite in
var drathax;
//declare the vars to store the keys in
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
  	/**
    * load the spritesheet and tie it to the 'drathax' key
    * the first two ints represent the width and height of one of the sprites, the third int represents how many sprites are in       * the sprite sheet
    */
  game.load.spritesheet('drathax', 'images/drathaxSpriteSheet.png', 50, 60, 4);
} 

	/**
	 * create()
	 * This function is tied to the create game state in the Phaser framework.
	 * It is called when the game is first created. The initial game 
	 * should be rendered out here.
	 */
function create() {
  		// create the game world here
    
        //start the Phaser physics engine
    game.physics.startSystem(Phaser.Physics.ARCADE);

        //Set the world (global) gravity
    game.physics.arcade.gravity.y = 100;
  		 
  		// add the drathax key as a sprite in the center of the game board
  	drathax = game.add.sprite(game.world.centerX, game.world.centerY, 'drathax');
    
        //add the walk animation to the sprite 
    drathax.animations.add('walk');
    
        //plays the walk animation at 5 FPS and 'true' means that the animation loops
    drathax.animations.play('walk', 5, true);
    
        //defines the keyboard vars we declared earlier and binds it to the respective key
    upKey = game.input.keyboard.addKey(Phaser.Keyboard.UP);
    downKey = game.input.keyboard.addKey(Phaser.Keyboard.DOWN);
    leftKey = game.input.keyboard.addKey(Phaser.Keyboard.LEFT);
    rightKey = game.input.keyboard.addKey(Phaser.Keyboard.RIGHT);
    
        // enable physics on the sprite
    game.physics.enable( [drathax], Phaser.Physics.ARCADE);
    

        //makes sure the sprite does not fall out of the world and gets stopped by the world bounds 
    drathax.body.collideWorldBounds = true;
    
        //sets the bounce height, a good value for this is 0.5, but you should experiment with different values
    drathax.body.bounce.y = 0.5;
    
    
        //sets the weight of the sprite so it falls faster or slower, a good value for this is 800, but again, you should experiment with different values
    drathax.body.gravity.y = 800;
}
  
	/**
	 * update()
	 * This function is tied to the update game state in the Phaser framework.
	 * It is called at 60 times per second (60 FPS). All the redraw happens within this area.
	 */
function update() {
    //checks if a key is pressed, isDown returns a boolean value 
    
  if(upKey.isDown)
  {
      //moves drathax up by 2 px
      drathax.y -= 2;
  }
  else if(downKey.isDown)
  {
      //moves drathax down by 2 px
      drathax.y += 2;
  }
  else if(leftKey.isDown)
  {
      //moves drathax left by 2 px
      drathax.x -= 2;
  }

  else if(rightKey.isDown)
  {
      //moves drathax right by 2 px
      drathax.x += 2;
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