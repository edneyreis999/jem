import Phaser from 'phaser'
import Enemy from './enemy'

class Orc extends Enemy {
  constructor(scene: Phaser.Scene, x: number, y: number) {
    super(scene, x, y, 'orc')

    this.name = 'orc'
  }

  movment(): void {}
}

export default Orc
