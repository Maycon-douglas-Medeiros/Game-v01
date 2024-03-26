class PlayGame extends Phaser.Scene {
  constructor() {
    super("playGame");
  }

  create() {
    this.background = this.add.tileSprite(0, 0, config.width, config.height, "background");
    this.background.setOrigin(0, 0);

    this.player = new Player(this);
    this.rock = new Rock(this);
  }

  update() {
    this.player.update();
  }
}