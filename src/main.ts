import Phaser from 'phaser'

import Level from './scenes/Level'

const config = {
    type: Phaser.AUTO,
	width: 500,
    height: 800,
    scale: {
        autoCenter: Phaser.Scale.CENTER_BOTH
    },
    autoRound: false,
	physics: {
		default: 'arcade',
		arcade: {
			gravity: { y: 0 }
		}
	},
	scene: [Level]
}

export default new Phaser.Game(config)
