import Phaser from 'phaser'
import Player from './player'

class PlayerOne extends Player {
  constructor(scene, x, y) {
    super(scene, x, y, 'playerOne')
  }

  movment(): void {
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
