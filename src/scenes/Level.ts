import Phaser from 'phaser'
import Player from './Player'

export default class Level extends Phaser.Scene
{

    private player;

	constructor()
	{
		super('Level')
	}

	preload()
    {
        this.load.image("Player", "assets/barriersprite.png")
        this.load.image("Enemy", "assets/umbrellasprite.png")
        this.load.image("Line", "assets/IGmainButtonHover.png")
    }

    create()
    {
        this.player = new Player(this, 250, 700)
        this.physics.add.sprite(250, 200, "Enemy")
        this.physics.add.sprite(250, 550, "Line")

    }

    update()
    {
        this.player.update();
    }

}
