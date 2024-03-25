class BootGame extends Phaser.Scene {
  constructor() {
    super("bootGame");
  }

  preload(){
    this.load.image("background", "assets/images/background.png");
    
    this.load.spritesheet("player", "assets/spritesheets/player.png",{ frameWidth: 32, frameHeight: 32 });
  }

  create() {
    this.scene.start("playGame");
  }
}
