import Phaser from 'phaser'
import MainScene from './scenes/mainScene'
import PreloadScene from './scenes/preloadScene'
import HUDScene from './scenes/hudScene'

const DEFAULT_WIDTH = document.body.offsetWidth
const DEFAULT_HEIGHT = document.body.offsetHeight

const config = {
  type: Phaser.AUTO,
  backgroundColor: '#606252',
  scale: {
    parent: 'phaser-game',
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
    width: DEFAULT_WIDTH,
    height: DEFAULT_HEIGHT
  },
  scene: [PreloadScene, MainScene, HUDScene],
  physics: {
    default: 'arcade',
    arcade: {
      debug: true
    }
  }
}

window.addEventListener('load', () => {
  const game = new Phaser.Game(config)
})
