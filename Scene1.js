class Scene1 extends Phaser.Scene {
  constructor() {
    super("bootGame");
  }

  preload(){
    this.load.image("background", "assets/images/background.png");
    
    this.load.spritesheet("player", "assets/spritesheets/player.png",{ frameWidth: 32, frameHeight: 32 });
  }

  create() {
    this.scene.start("playGame");

    this.playerAnims();

  }

//Animação do player
  playerAnims(){
    this.anims.create({
      key: "stop",
      frames: [{ key: "player", frame: 21 }],
      frameRate: 20
    });
    this.anims.create({
      key: "left",
      frames: this.anims.generateFrameNumbers("player", { start: 0, end: 6 }),
      frameRate: 10,
      repeat: -1
    });
    this.anims.create({
      key: "right",
      frames: this.anims.generateFrameNumbers("player", { start: 7, end: 13 }),
      frameRate: 10,
      repeat: -1
    });
    this.anims.create({
      key: "up",
      frames: this.anims.generateFrameNumbers("player", { start: 14, end: 20 }),
      frameRate: 10,
      repeat: -1
    });
    this.anims.create({
      key: "down",
      frames: this.anims.generateFrameNumbers("player", { start: 21, end: 27 }),
      frameRate: 10,
      repeat: -1
    });
  }
}
