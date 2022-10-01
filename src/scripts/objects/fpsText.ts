export default class FpsText extends Phaser.GameObjects.Text {
  private coinConter:number;
  constructor(scene: Phaser.Scene, x: number, y: number, coinCount: number = 0) {
    super(scene, x , y, '', { color: 'black', fontSize: '28px' })
    scene.add.existing(this)
    this.setOrigin(0)
    this.coinConter = coinCount;
  }

  public update(coinConter: number = 0) {
    this.setText(`coins: ${coinConter}`)
  }
}
