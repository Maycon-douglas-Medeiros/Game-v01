class PlayGame extends Phaser.Scene {
    constructor() {
        super("playGame");
    }

    create() {
        this.background = this.add.tileSprite(0, 0, config.width, config.height, "background");
        this.background.setOrigin(0, 0);

        this.map = new Map(this);
        this.map.createMap('cave');
        this.player = new Player(this);
        this.player.collideWithRock(this.map.rocksGroup);
        this.player.collideWithCrystal(this.map.crystalGroup);

      this.input.keyboard.on('keydown-L', () => {
        this.map.createMap('lab');
        
        //this.scene.restart();
      });
    }

    update() {
        this.player.update();
      
    }
}
