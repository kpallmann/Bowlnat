import Phaser from 'phaser'

export default class Level extends Phaser.Scene
{
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
        this.physics.add.sprite(250, 700, "Player")
        this.physics.add.sprite(250, 200, "Enemy")
        this.physics.add.sprite(250, 550, "Line")

    }

}
