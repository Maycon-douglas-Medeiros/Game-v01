var gameSettings = {
  playerSpeed: 200
}

var config = {
  width: 1024,
  height: 1024,
  backgroundColor: 0x000000,
  scene: [BootGame, PlayGame],
  pixelArt: true,
  physics: {
    default: "arcade",
    arcade: {
      debug: false,
      debugShowVelocity: false
    }
  }
}

var game = new Phaser.Game(config);