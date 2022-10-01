import Phaser from 'phaser'

abstract class Enemy extends Phaser.Physics.Arcade.Sprite {
  private currentScene: Phaser.Scene
  protected readonly PLAYER_VELOCITY: number = 300
  public readyToSpawn: boolean = false

  constructor(scene: Phaser.Scene, x: number, y: number, texture: string) {
    super(scene, x, y, texture)

    this.currentScene = scene
    scene.add.existing(this)
    scene.physics.add.existing(this)

    this.scale = 2

    this.init()
  }

  init() {
    this.setCollideWorldBounds(true)
  }

  abstract movment(): void

  protected preUpdate(time: number, delta: number): void {
    this.movment()
  }
}

export default Enemy
