class Player extends Phaser.Physics.Arcade.Sprite {
  constructor(scene) {
    var x = 96;
    var y = 96;
    
    super(scene, x, y, 'player');

    scene.add.existing(this);
    scene.physics.add.existing(this); 

    this.body.setCollideWorldBounds(true);
    this.playerAnims();
  }

  update() {
    this.movePlayerManager();
  }

  collideWithRock(rock) {
    this.scene.physics.add.collider(this, rock, () => {});
  }

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

  movePlayerManager() {
    let cursors = this.scene.input.keyboard.createCursorKeys();

    if(cursors.left.isUp && cursors.right.isUp && cursors.up.isUp && cursors.down.isUp){
      this.anims.play("stop", true);
    }

    if (cursors.left.isDown && cursors.up.isUp && cursors.down.isUp) {
      this.setVelocityX(-gameSettings.playerSpeed);
      this.anims.play("left", true);
    }
    else if (cursors.right.isDown && cursors.up.isUp && cursors.down.isUp) {
      this.setVelocityX(gameSettings.playerSpeed);
      this.anims.play("right", true);
    }
    else {
      this.setVelocityX(0);
    }

    if (cursors.up.isDown) {
      this.setVelocityY(-gameSettings.playerSpeed);
      this.anims.play("up", true);
    }
    else if (cursors.down.isDown) {
      this.setVelocityY(gameSettings.playerSpeed);
      this.anims.play("down", true);
    }
    else {
      this.setVelocityY(0);
    }
  }
}
