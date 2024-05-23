class Enemy extends Phaser.Physics.Arcade.Sprite {
    constructor(scene, x, y) {
        super(scene, x, y, 'enemy');

        scene.add.existing(this);
        scene.physics.add.existing(this);

        this.body.setSize(20, 20);
        this.body.setCollideWorldBounds(true);
        
        this.followDistance = 300;
        this.speed = 150;
    }

    update(player) {
        this.followPlayer(player);
    }

    followPlayer(player) {
        const distance = Phaser.Math.Distance.Between(this.x, this.y, player.x, player.y);

        if (distance < this.followDistance) {
            const angle = Phaser.Math.Angle.Between(this.x, this.y, player.x, player.y);
            this.setVelocity(Math.cos(angle) * this.speed, Math.sin(angle) * this.speed);
        } else {
            this.setVelocity(0, 0);
        }
    }

    collideWithProps(prop) {
        this.scene.physics.add.collider(this, prop, () => { });
    }
}
