import Phaser from 'phaser'
import Player from './player'

class PlayerTwo extends Player {
  private keyW: Phaser.Input.Keyboard.Key
  private keyA: Phaser.Input.Keyboard.Key
  private keyS: Phaser.Input.Keyboard.Key
  private keyD: Phaser.Input.Keyboard.Key

  constructor(scene: Phaser.Scene, x: number, y: number) {
    super(scene, x, y, 'playerTwo')

    this.name = 'playerTwo'
  }

  init() {
    super.init()
    this.keyW = this.scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W)
    this.keyA = this.scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A)
    this.keyS = this.scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S)
    this.keyD = this.scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D)
  }

  movment(): void {
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
