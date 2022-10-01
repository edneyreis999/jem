import Phaser from 'phaser'
import { EEVENTS } from '../../const/events'
import Coin from './coin'

abstract class Player extends Phaser.Physics.Arcade.Sprite {
  private currentScene: Phaser.Scene
  protected readonly PLAYER_VELOCITY: number = 300
  protected cursors: Phaser.Types.Input.Keyboard.CursorKeys
  protected coins: number = 0

  constructor(scene: Phaser.Scene, x: number, y: number, texture: string) {
    super(scene, x, y, texture)

    this.currentScene = scene
    scene.add.existing(this)
    scene.physics.add.existing(this)

    this.scale = 2

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
    this.currentScene.events.emit(EEVENTS.PLAYER_COLLECT_COIN, this)
  }

  public getCoins() {
    return this.coins
  }
}

export default Player
