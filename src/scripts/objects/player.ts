import Phaser from 'phaser'

abstract class Player extends Phaser.Physics.Arcade.Sprite {
  protected readonly PLAYER_VELOCITY: number = 300
  protected cursors: Phaser.Types.Input.Keyboard.CursorKeys

  constructor(scene: Phaser.Scene, x: number, y: number, texture: string) {
    super(scene, x, y, texture)

    scene.add.existing(this)
    scene.physics.add.existing(this)

    this.scale = 4

    this.init()
  }

  init() {
    this.cursors = this.scene.input.keyboard.createCursorKeys()
    this.setCollideWorldBounds(true)
  }

  abstract movment(): void

  protected preUpdate(time: number, delta: number): void {
    this.movment()
  }
}

export default Player
