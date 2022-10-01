import Phaser from 'phaser'
import MainScene from './scenes/mainScene'
import PreloadScene from './scenes/preloadScene'
import HUDScene from './scenes/hudScene'

const DEFAULT_WIDTH = window.innerWidth
const DEFAULT_HEIGHT = window.innerHeight

const config = {
  type: Phaser.AUTO,
  backgroundColor: '#606252',
  scale: {
      parent: 'phaser-game',
      mode: Phaser.Scale.FIT,
      autoCenter: (window.innerWidth/2, window.innerHeight/2),
      width: DEFAULT_WIDTH,
      height: DEFAULT_HEIGHT
    },
  // scale: {
  //   parent: 'phaser-game',
  //   mode: Phaser.Scale.RESIZE,
  //   autoCenter: Phaser.Scale.CENTER_BOTH,
  //   width: DEFAULT_WIDTH,
  //   height: DEFAULT_HEIGHT
  // },
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
