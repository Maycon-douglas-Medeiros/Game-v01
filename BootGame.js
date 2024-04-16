class BootGame extends Phaser.Scene {
  constructor() {
    super("bootGame");
  }

  preload(){
    this.load.image("background", "assets/images/background.png");
    this.load.image('map', 'assets/images/image.png');
    this.load.image('water', 'assets/images/water.png');
    this.load.image('crystal', 'assets/images/crystal.png');
    this.load.spritesheet("player", "assets/spritesheets/player.png",{ frameWidth: 32, frameHeight: 32 });

    this.load.spritesheet("rock_b", "assets/spritesheets/Rock_B.png",{ frameWidth: 32, frameHeight: 32 });
  }

  create() {
    this.scene.start("playGame");
  }
}
