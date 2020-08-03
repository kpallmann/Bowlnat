import Phaser from "phaser";
//This file handles the player controls, animations, and interactions.

export default class Player {

    //Before the constructor, we define private variables we'll use throughout the file

    private keys;                                   //Used for keyboard input
    private scene : Phaser.Scene;                   //Scene the player is being placed in
    private anims;                                  //Used to set up animations
    private player: Phaser.Physics.Arcade.Sprite    //Player object

    private x :number;                              //Player's x coord
    private y : number;                             //Player's y coord

    private dead : boolean;                         //boolea to see if player is dead
    private deadPlayed :boolean;                    //boolean to see if dead anim was played (may be useless)

    constructor(scene, X, Y) 
    {
        this.scene = scene;
        this.x = X
        this.y = Y

        this.dead = false;
        this.deadPlayed = false;

        //TODO: Set up animations

        this.keys = this.scene.input.keyboard.addKeys({
            left: Phaser.Input.Keyboard.KeyCodes.LEFT,
            right: Phaser.Input.Keyboard.KeyCodes.RIGHT,
            up: Phaser.Input.Keyboard.KeyCodes.UP,
            down: Phaser.Input.Keyboard.KeyCodes.DOWN,
            z: Phaser.Input.Keyboard.KeyCodes.Z
        });

        this.player = this.scene.physics.add.sprite(this.x, this.y, 'Player');
    }

    //Preload and Create are used mostly for scenes (ignore that the file is in the scenes folder lmao)
    //For consistency, the functions are written out, but we most likely won't
    //write any code inside these functions for the player or enemies

    preload()
    {

    }

    create()
    {

    }

    update()
    {
        //Updates player every frame, this is where we write most code for the player

        


        if(this.dead == false)
        {
            //While the player is alive, handle movement
            //I'm going to wing it and hope there's no problems with how I write this part

            if(this.keys.left.isDown && !this.keys.right.isDown)
            {
                //move left
                this.player.setVelocityX(-100)
            }
            else if(this.keys.right.isDown && !this.keys.left.isDown)
            {
                //move right
                this.player.setVelocityX(100)
            }
            else
            {
                //if neither left nor right are being pressed, or if both are being pressed, set to 0
                this.player.setVelocityX(0)
            }

            if(this.keys.up.isDown && !this.keys.down.isDown)
            {
                //move up
                this.player.setVelocityY(-100)
            }
            else if(this.keys.down.isDown && !this.keys.up.isDown)
            {
                //move down
                this.player.setVelocityY(100)
            }
            else
            {
                //if neither up nor down are being pressed, or if both are being pressed, set to 0
                this.player.setVelocityY(0)
            }
            
        }
    }



}
