import Phaser from 'phaser'

class PlayerTwo extends Phaser.Physics.Arcade.Sprite {
  private readonly PLAYER_VELOCITY: number = 300
  //  private keys: Phaser.Types.Input.Keyboard.KeyboardKeydownCallback

  keyW = this.scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W)
  keyA = this.scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A)
  keyS = this.scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S)
  keyD = this.scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D)

  constructor(scene: Phaser.Scene, x: number, y: number) {
    super(scene, x, y, 'playerTwo')

    scene.add.existing(this)
    scene.physics.add.existing(this)

    this.scale = 4

    this.init()
  }

  init() {
    this.setCollideWorldBounds(true)
  }

  protected preUpdate(time: number, delta: number): void {
    //const { keyW, keyA, keyS, keyD} = this.keys

    if (this.keyW.isDown) {
      this.setVelocityY(-this.PLAYER_VELOCITY)
    } else if (this.keyS.isDown) {
      this.setVelocityY(this.PLAYER_VELOCITY)
    } else {
      this.setVelocityY(0)
    }

    if (this.keyA.isDown) {
      this.setVelocityX(-this.PLAYER_VELOCITY)
    } else if (this.keyD.isDown) {
      this.setVelocityX(this.PLAYER_VELOCITY)
    } else {
      this.setVelocityX(0)
    }
  }
}

export default PlayerTwo
