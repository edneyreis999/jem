import Phaser from 'phaser'
import Player from '../player'
import Enemy from './enemy'

class Orc extends Enemy {
  constructor(scene: Phaser.Scene, x: number, y: number) {
    super(scene, x, y, 'orc')

    this.name = 'orc'
    this.scene = scene

    this.findTarget()
  }

  findTarget() {
    const closestPlayer = this.currentScene.physics.closest(
      this,
      this.scene.children.list.filter(child => child instanceof Player)
    ) as Player

    return closestPlayer
  }

  movment(): void {
    const target = this.findTarget()
    if (!target) {
      this.setVelocityX(0)
      this.setVelocityY(0)
      return
    }

    const tx = target?.x
    const ty = target?.y

    const x = this.x
    const y = this.y

    const rotation = Phaser.Math.Angle.Between(x, y, tx, ty)
    this.setVelocityX(Math.cos(rotation) * this.ENEMY_VELOCITY)
    this.setVelocityY(Math.sin(rotation) * this.ENEMY_VELOCITY)
  }
}

export default Orc
