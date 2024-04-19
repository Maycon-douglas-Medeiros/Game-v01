var gameSettings = {
  playerSpeed: 200
}

var config = {
  width: 1280,
  height: 1024,
  backgroundColor: 0x000000,
  scene: [BootGame, PlayGame, Menu, Lab],
  pixelArt: true,
  physics: {
    default: "arcade",
    arcade: {
      debug: true,
      debugShowVelocity: false
    }
  }
}

var game = new Phaser.Game(config);