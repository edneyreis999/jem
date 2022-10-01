import Player from '../objects/player'
import Coin from '../objects/coin'
import FpsText from '../objects/fpsText'

export default class MainScene extends Phaser.Scene {
  private collectedCoinTxt: Phaser.GameObjects.Text
  private player: Phaser.Physics.Arcade.Sprite
  private timedEvent: Phaser.Time.TimerEvent
  private starsArray: Coin[] = []
  private colletedCoins: number = 0

  constructor() {
    super({ key: 'MainScene' })
  }

  create() {
    this.player = new Player(this, 0, 0)
    this.collectedCoinTxt = new FpsText(this, this.colletedCoins)
    this.initStars()

    // display the Phaser.VERSION
    this.add
      .text(this.cameras.main.width - 15, 15, `Phaser v${this.colletedCoins}`, {
        color: '#000000',
        fontSize: '24px'
      })
      .setOrigin(1, 0)
    this.timedEvent = this.time.addEvent({ delay: 500, callback: this.onEvent, callbackScope: this, loop: true })

    this.physics.add.overlap(this.player, this.starsArray, this.onCollectStar, undefined, this)
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
    this.collectedCoinTxt.update(this.colletedCoins)
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

  onCollectStar(player, coin) {
    coin.disableBody(true, true)
    coin.setActive(false)
    this.colletedCoins++
  }
}
