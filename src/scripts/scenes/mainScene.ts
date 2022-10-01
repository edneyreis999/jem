import PlayerOne from '../objects/playerOne'
import PlayerTwo from '../objects/playerTwo'

import Coin from '../objects/coin'
import Arena from '../objects/arena'
import Player from '../objects/player'

export default class MainScene extends Phaser.Scene {
  private playerOne: Phaser.Physics.Arcade.Sprite
  private playerTwo: Phaser.Physics.Arcade.Sprite
  private timedEvent: Phaser.Time.TimerEvent
  private starsArray: Coin[] = []

  private arena: Arena

  constructor() {
    super({ key: 'MainScene' })
  }

  create() {
    // set background color
    this.cameras.main.setBackgroundColor('#606252')

    this.initArena()
    this.initCoins()
    this.initPlayers()

    this.timedEvent = this.time.addEvent({ delay: 500, callback: this.onEvent, callbackScope: this, loop: true })
    this.physics.add.overlap(this.playerOne, this.starsArray, this.onCollectCoin, undefined, this)
    this.physics.add.overlap(this.playerTwo, this.starsArray, this.onCollectCoin, undefined, this)
  }

  initPlayers() {
    this.playerOne = new PlayerOne(this, 200, 100)
    this.playerTwo = new PlayerTwo(this, 200, 200)
  }

  initArena() {
    const x = this.cameras.main.width / 2
    const y = this.cameras.main.height / 2
    this.arena = new Arena(this, x, y)

//começando a chamar o tiled map aqui

    // const map = this.make.tilemap({key: 'map'})
    // const tileset = map.addTilesetImage('0x72_DungeonTilesetII_v1.4', 'tileset')

    // map.createLayer('walls', tileset)
    // map.createLayer('floor', tileset)

//terminando de chamar o tiled map aqui


  }

  initCoins() {
    for (let i = 0; i < 5; i++) {
      const coin = new Coin(this, 0, 0)
      coin.disableBody(true, true)
      coin.setActive(false)
      this.starsArray.push(coin)
    }
  }

  update() {}

  onEvent() {
    const desactivedCoins = this.starsArray.filter(coin => !coin.active)
    if (desactivedCoins.length <= 5) {
      const sceneWidth = this.cameras.main.width
      const sceneHeight = this.cameras.main.height
      const x = Phaser.Math.Between(0, sceneWidth)
      const y = Phaser.Math.Between(0, sceneHeight)
      const coin = this.starsArray.find(coin => !coin.active)
      if (coin) {
        coin.setCollideWorldBounds(true)
        coin.setActive(true)
        coin.setVisible(true)
        coin.setPosition(x, y)
        this.physics.add.existing(coin)
      }
    }
  }

  onCollectCoin(playerObject: Phaser.GameObjects.GameObject, coinObject: Phaser.GameObjects.GameObject) {
    if (playerObject.name === 'playerOne' || playerObject.name === 'playerTwo') {
      if (coinObject.name === 'coin') {
        const player = playerObject as Player
        const coin = coinObject as Coin

        coin.onBeCollected()
        player.collectCoin(coin)
      }
    }
  }
}
