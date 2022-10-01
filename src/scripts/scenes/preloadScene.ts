export default class PreloadScene extends Phaser.Scene {
  constructor() {
    super({ key: 'PreloadScene' })
  }

  preload() {
    this.load.image('playerOne', 'assets/img/player-sprites/walk-side/walk-side-1.png')
    this.load.image('playerTwo', 'assets/img/frames/knight_m_idle_anim_f0.png')

    this.load.image('coin', 'assets/img/frames/coin_anim_f0.png')
    this.load.image('arena', 'assets/img/arena-map.png')
  }

  create() {
    this.scene.start('MainScene')
    this.scene.start('HUDScene');
    this.scene.bringToTop('HUDScene');

    /**
     * This is how you would dynamically import the mainScene class (with code splitting),
     * add the mainScene to the Scene Manager
     * and start the scene.
     * The name of the chunk would be 'mainScene.chunk.js
     * Find more about code splitting here: https://webpack.js.org/guides/code-splitting/
     */
    // let someCondition = true
    // if (someCondition)
    //   import(/* webpackChunkName: "mainScene" */ './mainScene').then(mainScene => {
    //     this.scene.add('MainScene', mainScene.default, true)
    //   })
    // else console.log('The mainScene class will not even be loaded by the browser')
  }
}
