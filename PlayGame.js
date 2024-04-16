class PlayGame extends Phaser.Scene {
    constructor() {
        super("playGame");
    }

    create() {
        this.background = this.add.tileSprite(0, 0, config.width, config.height, "background");
        this.background.setOrigin(0, 0);

        this.map = new Map(this);
        this.map.createMap();
        this.player = new Player(this);
        //this.rock = new Rock(this);
        this.player.collideWithRock(this.map.rocksGroup);
    }

    update() {
        this.player.update();
    }
}