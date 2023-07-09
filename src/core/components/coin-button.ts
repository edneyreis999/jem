import { Display, GameObjects, Scene } from 'phaser';

export class CoinButton extends GameObjects.Container {
  private button: GameObjects.Sprite;
  private icon: GameObjects.Image;
  private text: GameObjects.Text;

  constructor(
    scene: Scene,
    x: number,
    y: number,
    text: string,
    callback: Function
  ) {
    super(scene, x, y);

    this.button = this.scene.add.sprite(0, 0, 'makePotion-button');
    this.button.setOrigin(0.5, 0.5);
    this.button.setDisplaySize(40, 40);
    this.button.setScale(1);

    this.icon = this.scene.add.image(0, 0, 'coin');
    this.icon.setOrigin(0, 0.5);
    this.icon.setScale(0.3);

    this.text = this.scene.add.text(0, 0, text, {
      fontSize: '12px',
      color: '#fff',
    });
    this.text.setOrigin(0.3, 0.3);

    this.add([this.button, this.icon, this.text]);

    Display.Align.In.LeftCenter(this.icon, this.button);
    Display.Align.In.Center(this.text, this.button);

    this.setSize(40, 40);
    this.setInteractive({ useHandCursor: true });

    this.on('pointerover', () => {
      this.button.setTint(0x808080);
    });

    this.on('pointerout', () => {
      this.button.clearTint();
    });

    this.on('pointerdown', callback, this.scene);

    scene.add.existing(this);
  }

  updateText(newText: string) {
    this.text.setText(newText);
  }
}
