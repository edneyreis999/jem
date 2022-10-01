import PlayerOne from '../objects/playerOne'
import PlayerTwo from '../objects/playerTwo'

import Coin from '../objects/coin'
import Arena from '../objects/arena'
import Player from '../objects/player'
import Enemy from '../objects/enemy/enemy'
import Orc from '../objects/enemy/orc'

export default class MainScene extends Phaser.Scene {
  private playerOne: Phaser.Physics.Arcade.Sprite
  private playerTwo: Phaser.Physics.Arcade.Sprite
  private timedEvent: Phaser.Time.TimerEvent
  private coinArray: Coin[] = []
  private playerArray: Player[] = []
  private enemyArray: Enemy[] = []

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
    this.initEnemies()

    this.timedEvent = this.time.addEvent({ delay: 500, callback: this.onEvent, callbackScope: this, loop: true })
    this.physics.add.overlap(this.playerArray, this.coinArray, this.onCollectCoin, undefined, this)

    this.physics.add.overlap(this.playerArray, this.enemyArray, this.onHitEnemy, undefined, this)
  }

  initEnemies() {
    for (let i = 0; i < 5; i++) {
      const enemy = new Orc(this, 0, 0)
      enemy.disableBody(true, true)
      enemy.setActive(false)
      enemy.readyToSpawn = true
      this.enemyArray.push(enemy)
    }
  }

  initPlayers() {
    this.playerOne = new PlayerOne(this, 200, 100)
    this.playerTwo = new PlayerTwo(this, 200, 200)
    this.playerArray.push(this.playerOne as Player)
    this.playerArray.push(this.playerTwo as Player)
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
      this.coinArray.push(coin)
    }
  }

  update() {}

  onEvent() {
    const desactivedCoins = this.coinArray.filter(coin => !coin.active)
    if (desactivedCoins.length <= 5) {
      const sceneWidth = this.cameras.main.width
      const sceneHeight = this.cameras.main.height
      const x = Phaser.Math.Between(0, sceneWidth)
      const y = Phaser.Math.Between(0, sceneHeight)
      const coin = this.coinArray.find(coin => !coin.active)
      if (coin) {
        coin.setCollideWorldBounds(true)
        coin.setActive(true)
        coin.setVisible(true)
        coin.setPosition(x, y)
        this.physics.add.existing(coin)
      }
    }

    const enemyToSpawn = this.enemyArray.find(enemy => enemy.readyToSpawn)
    if (enemyToSpawn) {
      const sceneWidth = this.cameras.main.width
      const sceneHeight = this.cameras.main.height
      const x = Phaser.Math.Between(0, sceneWidth)
      const y = Phaser.Math.Between(0, sceneHeight)
      enemyToSpawn.setCollideWorldBounds(true)
      enemyToSpawn.setActive(true)
      enemyToSpawn.setVisible(true)
      enemyToSpawn.setPosition(x, y)
      this.physics.add.existing(enemyToSpawn)
      enemyToSpawn.readyToSpawn = false
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

  onHitEnemy(playerObject: Phaser.GameObjects.GameObject, enemyObject: Phaser.GameObjects.GameObject) {
    if (playerObject.name === 'playerOne' || playerObject.name === 'playerTwo') {
      if (enemyObject.name === 'orc') {
        const player = playerObject as Player
        const orc = enemyObject as Orc

        player.hitEnemy(orc)
      }
    }
  }
}
