import { ICollectable } from '../../interfaces/collectable'

export default class Coin extends Phaser.Physics.Arcade.Sprite implements ICollectable {
  constructor(scene, x, y) {
    super(scene, x, y, 'coin')
    this.name = 'coin'
    scene.add.existing(this)
    scene.physics.add.existing(this)
    this.setCollideWorldBounds(true)
    this.scale = 4
  }

  onBeCollected(): void {
    this.disableBody(true, true)
    this.setActive(false)
  }
}
