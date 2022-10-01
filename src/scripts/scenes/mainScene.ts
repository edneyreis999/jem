import PlayerOne from '../objects/playerOne'
import PlayerTwo from '../objects/playerTwo'

import Coin from '../objects/coin'
import FpsText from '../objects/fpsText'

export default class MainScene extends Phaser.Scene {
  private collectedCoinOne: Phaser.GameObjects.Text
  private collectedCoinTwo: Phaser.GameObjects.Text
  private playerOne: Phaser.Physics.Arcade.Sprite
  private playerTwo: Phaser.Physics.Arcade.Sprite
  private timedEvent: Phaser.Time.TimerEvent
  private starsArray: Coin[] = []
  private colletedCoinsOne: number = 0
  private colletedCoinsTwo: number = 0


  constructor() {
    super({ key: 'MainScene' })
  }

  create() {
    this.playerOne = new PlayerOne(this, 100, 100)
    this.playerTwo = new PlayerTwo(this, 200, 200)

    this.collectedCoinOne = new FpsText(this, 50, 10, this.colletedCoinsOne)
    this.collectedCoinTwo = new FpsText(this, 1100, 10, this.colletedCoinsTwo)

    this.initStars()

    this.timedEvent = this.time.addEvent({ delay: 500, callback: this.onEvent, callbackScope: this, loop: true })

    this.physics.add.overlap(this.playerOne, this.starsArray, this.onCollectCoinOne, undefined, this)
    this.physics.add.overlap(this.playerTwo, this.starsArray, this.onCollectCoinTwo, undefined, this)

  }

  initStars() {
    for (let i = 0; i < 5; i++) {
      const coin = new Coin(this, 0, 0)
      coin.disableBody(true, true)
      coin.setActive(false)
      this.starsArray.push(coin)
    }
  }

  update() {
    this.collectedCoinOne.update(this.colletedCoinsOne)
    this.collectedCoinTwo.update(this.colletedCoinsTwo)

  }

  onEvent() {
    const desactivedStars = this.starsArray.filter(coin => !coin.active)
    if (desactivedStars.length <= 5) {
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

  onCollectCoinOne(playerOne, coin) {
    coin.disableBody(true, true)
    coin.setActive(false)
    this.colletedCoinsOne++
  }

  onCollectCoinTwo(playerTwo, coin) {
    coin.disableBody(true, true)
    coin.setActive(false)
    this.colletedCoinsTwo++
  }
}
