class PlayGame extends Phaser.Scene {
    constructor() {
        super("playGame");
        this.mapName = 'cave';
        this.floor = 'CaveFloor';
    }

    create() {
        this.background = this.add.tileSprite(0, 0, config.width, config.height, this.floor);
        this.background.setOrigin(0, 0);

        this.map = new Map(this);
        this.map.createMap(this.mapName);
        this.player = new Player(this);
        this.player.collideWithProps(this.map.propsGroup);

        //------Camera------
        this.cameras.main.setBounds(0, 0, 1280, 1024);
        this.cameras.main.setZoom(3);
        this.cameras.main.startFollow(this.player);
        //this.player.collideWithRock(this.map.propsGroup);
        //this.player.collideWithCrystal(this.map.propsGroup);

        this.input.keyboard.on('keydown-L', () => {
            this.mapName = 'lab';
            this.floor = 'LabFloor';
            this.scene.restart();
        });
    }

    update() {
        this.player.update();
    }
}
