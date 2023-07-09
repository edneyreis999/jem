import { GameObjects, Input, Math as PhaserMath, Scene } from 'phaser';

export class Slider extends GameObjects.Container {
  private value: number;
  private sliderBackground: GameObjects.Rectangle;
  private sliderButton: GameObjects.Arc;
  private sliderText: GameObjects.Text;

  constructor(
    scene: Scene,
    initialValue: number,
    x: number,
    y: number,
    width: number,
    height: number,
    color: number
  ) {
    super(scene, x, y);

    this.value = initialValue;

    this.sliderBackground = this.scene.add.rectangle(
      0,
      0,
      width,
      height,
      color
    );

    let initialButtonPosition = -width / 2 + (this.value / 100) * width;

    this.sliderButton = this.scene.add.circle(
      initialButtonPosition,
      0,
      10,
      color
    );

    this.sliderText = this.scene.add.text(
      this.sliderButton.x,
      this.sliderButton.y,
      this.value.toString(),
      { fontSize: '12px', color: '#fff' }
    );
    this.sliderText.setOrigin(0.5, 0.5);

    this.add(this.sliderBackground);
    this.add(this.sliderButton);
    this.add(this.sliderText);

    this.sliderButton.setInteractive({ draggable: true });
    this.scene.input.setDraggable(this.sliderButton);

    this.sliderButton.on(
      'drag',
      (pointer: Input.Pointer, dragX: number, dragY: number) => {
        this.sliderButton.x = PhaserMath.Clamp(dragX, -width / 2, width / 2);

        let oldValue = this.value;

        this.value = Math.round(
          ((this.sliderButton.x + width / 2) / width) * 100
        );

        // Se o valor mudou, emitimos um evento "changed"
        if (oldValue !== this.value) {
          this.emit('changed', this.value);
        }

        this.sliderText.setText(this.value.toString());
        this.sliderText.x = this.sliderButton.x;
        this.sliderText.y = this.sliderButton.y;
      }
    );

    scene.add.existing(this);
  }

  public getValue(): number {
    return this.value;
  }
}
