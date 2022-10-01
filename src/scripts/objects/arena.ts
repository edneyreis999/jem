import Phaser from 'phaser'


class Arena extends Phaser.Physics.Arcade.Sprite {
  constructor(scene: Phaser.Scene, x: number, y: number) {
    super(scene, x, y, 'arena')

    scene.add.existing(this)
    scene.physics.add.existing(this)

    this.init()
  }

  init() {

    

  }

  protected preUpdate(time: number, delta: number): void {}
}

export default Arena
