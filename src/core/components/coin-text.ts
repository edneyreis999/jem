import { Display, GameObjects, Scene } from 'phaser';

export class TextCoin extends GameObjects.Container {
  private coin: GameObjects.Sprite;
  private text: GameObjects.Text;

  constructor(scene: Scene, x: number, y: number, textValue: string) {
    super(scene, x, y);

    this.coin = this.scene.add.sprite(0, 0, 'coin');
    this.coin.setOrigin(0.5, 0.5); // Altere a origem aqui
    this.coin.setDisplaySize(152, 356);
    this.coin.setScale(0.4);

    this.text = this.scene.add.text(0, 0, textValue, {
      fontSize: '20px',
      color: '#26150E',
      fontFamily: 'Courier New',
      strokeThickness: 2,
      stroke: '#26150E',
    });
    this.text.setOrigin(0.5, 0.5);

    this.add([this.coin, this.text]);

    // Alinha o texto à direita do ícone da moeda
    Display.Align.To.RightCenter(this.text, this.coin, 10); // 10 é a margem entre o texto e a moeda

    scene.add.existing(this);
  }

  public updateText(newText: string) {
    this.text.setText(newText);
  }
}
