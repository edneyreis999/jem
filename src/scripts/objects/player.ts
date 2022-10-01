import Phaser from 'phaser'
import { EEVENTS } from '../../const/events'
import Coin from './coin'
import Enemy from './enemy/enemy'

abstract class Player extends Phaser.Physics.Arcade.Sprite {
  private currentScene: Phaser.Scene
  protected readonly PLAYER_VELOCITY: number = 300
  protected cursors: Phaser.Types.Input.Keyboard.CursorKeys
  protected coins: number = 0
  protected health: number = 100

  constructor(scene: Phaser.Scene, x: number, y: number, texture: string) {
    super(scene, x, y, texture)

    this.currentScene = scene
    scene.add.existing(this)
    scene.physics.add.existing(this)

    this.scale = 1.3

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

  public collectCoin(coin: Coin) {
    this.coins++
    this.health += 10
    this.currentScene.events.emit(EEVENTS.PLAYER_CHANGE_STATUS, this)
  }

  public hitEnemy(enemy: Enemy) {
    this.health -= 10
    if (this.body.velocity.x > 0) {
      this.setX(this.x - 100)
    } else {
      this.setX(this.x + 100)
    }
    if (this.health <= 0) {
      this.destroy()
    }
    this.currentScene.events.emit(EEVENTS.PLAYER_CHANGE_STATUS, this)
  }

  public getCoins() {
    return this.coins
  }
  public getHealth() {
    return this.health
  }
}

export default Player
