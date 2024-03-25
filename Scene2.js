class Scene2 extends Phaser.Scene {
  constructor() {
    super("playGame");
  }

  create() {
    this.background = this.add.tileSprite(0, 0, config.width, config.height, "background");
    this.background.setOrigin(0, 0);

    this.player = this.physics.add.sprite(96, 96, 'player');
    
    this.player.setCollideWorldBounds(true);
  }
  
  update() {
    this.movePlayerManager();
}

//Movimentar o player
  movePlayerManager() {
    let cursors = this.input.keyboard.createCursorKeys();
    var player = this.player;

    if(cursors.left.isUp && cursors.right.isUp && cursors.up.isUp && cursors.down.isUp){
      player.anims.play("stop", true);
    }

    if (cursors.left.isDown && cursors.up.isUp && cursors.down.isUp) {
      player.setVelocityX(-gameSettings.playerSpeed);
      player.anims.play("left", true);
    }
    else if (cursors.right.isDown && cursors.up.isUp && cursors.down.isUp) {
      player.setVelocityX(gameSettings.playerSpeed);
      player.anims.play("right", true);
    }
    else {
      player.setVelocityX(0);
    }
    if (cursors.up.isDown) {
      player.setVelocityY(-gameSettings.playerSpeed);
      player.anims.play("up", true);
    }
    else if (cursors.down.isDown) {
      player.setVelocityY(gameSettings.playerSpeed);
      player.anims.play("down", true);
    }
    else {
      player.setVelocityY(0);
    }
  }
}
