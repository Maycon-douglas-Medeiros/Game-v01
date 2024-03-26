class Rock extends Phaser.Physics.Arcade.Sprite {
  constructor(scene) {
      var x = 50;
      var y = 50;
    
      super(scene, x, y, 'rock_b');
      
      scene.add.existing(this);
      scene.physics.add.existing(this); 

      this.body.setCollideWorldBounds(true);
    }
}