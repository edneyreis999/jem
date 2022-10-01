import { EEVENTS } from '../../const/events'
import Player from '../objects/player'

export default class HUDScene extends Phaser.Scene {
  private playerOneCoinTxt: Phaser.GameObjects.Text
  private playerTwoCoinTxt: Phaser.GameObjects.Text

  private playerOneHealthTxt: Phaser.GameObjects.Text
  private playerTwoHealthTxt: Phaser.GameObjects.Text

  constructor() {
    super({
      key: 'HUDScene',
      active: true
    })
  }

  create() {
    const level = this.scene.get('MainScene')
    this.playerOneCoinTxt = this.add.text(50, 10, 'Player 1: 0', {
      color: 'black',
      fontSize: '28px'
    })
    this.playerOneCoinTxt.setOrigin(0)

    this.playerTwoCoinTxt = this.add.text(1000, 10, 'Player 2: 0', {
      color: 'black',
      fontSize: '28px'
    })
    this.playerTwoCoinTxt.setOrigin(0)

    this.playerOneHealthTxt = this.add.text(50, 30, 'Health: 100', {
      color: 'black',
      fontSize: '28px'
    })
    this.playerOneCoinTxt.setOrigin(0)
    this.playerTwoHealthTxt = this.add.text(1000, 30, 'Health: 100', {
      color: 'black',
      fontSize: '28px'
    })
    this.playerOneCoinTxt.setOrigin(0)

    // create events
    level.events.on(EEVENTS.PLAYER_CHANGE_STATUS, this.playerChangeStatus, this)
  }

  playerChangeStatus(player: Player) {
    if (player.name === 'playerOne') {
      this.playerOneCoinTxt.setText(`Player 1: ${player.getCoins()}`)
      this.playerOneHealthTxt.setText(`Health: ${player.getHealth()}`)
    }
    if (player.name === 'playerTwo') {
      this.playerTwoCoinTxt.setText(`Player 2: ${player.getCoins()}`)
      this.playerTwoHealthTxt.setText(`Health: ${player.getHealth()}`)
    }
  }
}
