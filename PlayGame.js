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
        
        this.enemies = this.physics.add.group();
        const enemy = new Enemy(this, 300, 300);
        this.enemies.add(enemy);
        enemy.collideWithProps(this.map.propsGroup);

        //---------------Camera---------------
        this.cameras.main.setBounds(0, 0, 1280, 1024, true);
        this.cameras.main.setZoom(2);
        this.cameras.main.startFollow(this.player);

        this.updateScroll();

        window.addEventListener('resize', () => this.updateScroll());

        this.input.keyboard.on('keydown-L', () => {
            this.mapName = 'lab';
            this.floor = 'LabFloor';
            this.scene.restart();
        });
    }

    update() {
        this.player.update();
        this.updateScroll();

        this.enemies.getChildren().forEach(enemy => {
            enemy.update(this.player);
        });
    }

    updateScroll() {
        const camera = this.cameras.main;
        const scrollX = Math.max(0, camera.scrollX * camera.zoom - (window.innerWidth / 4));
        const scrollY = Math.max(0, camera.scrollY * camera.zoom - (window.innerHeight / 4));
        window.scrollTo(scrollX, scrollY);
    }
}
