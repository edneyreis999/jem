export default class FpsText extends Phaser.GameObjects.Text {
  private coinConter:number;
  constructor(scene, coinCount = 0) {
    super(scene, 10, 10, '', { color: 'black', fontSize: '28px' })
    scene.add.existing(this)
    this.setOrigin(0)
    this.coinConter = coinCount;
  }

  public update(coinConter = 0) {
    this.setText(`coins: ${coinConter}`)
  }
}
