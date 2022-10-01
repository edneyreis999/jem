import Phaser from 'phaser'

class PlayerOne extends Phaser.Physics.Arcade.Sprite {
  private readonly PLAYER_VELOCITY: number = 300
  private cursors: Phaser.Types.Input.Keyboard.CursorKeys

  constructor(scene, x, y) {
    super(scene, x, y, 'playerOne')

    scene.add.existing(this)
    scene.physics.add.existing(this)

    this.scale = 4

    this.init()
  }

  init() {
    this.cursors = this.scene.input.keyboard.createCursorKeys()
    this.setCollideWorldBounds(true)
  }

  protected preUpdate(time: number, delta: number): void {
    const { left, right, up, down } = this.cursors

    if (left.isDown) {
      this.setVelocityX(-this.PLAYER_VELOCITY)
    } else if (right.isDown) {
      this.setVelocityX(this.PLAYER_VELOCITY)
    } else {
      this.setVelocityX(0)
    }

    if (up.isDown) {
      this.setVelocityY(-this.PLAYER_VELOCITY)
    } else if (down.isDown) {
      this.setVelocityY(this.PLAYER_VELOCITY)
    } else {
      this.setVelocityY(0)
    }
  }
}

export default PlayerOne
