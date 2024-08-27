class PlayGame extends Phaser.Scene {
    constructor() {
        super("playGame");
        this.mapName = 'cave';
        this.floor = 'LabFloor';
    }

    create() {
        this.background = this.add.tileSprite(0, 0, config.width, config.height, this.floor);
        this.background.setOrigin(0, 0);

        this.map = new Map(this);
        this.map.createMap(this.mapName);
        this.player = new Player(this);
        this.player.collideWithProps(this.map.propsGroup);

        //---------------Camera---------------

        this.cameras.main.setBounds(0, 0, 2208, 2483, true);
        this.cameras.main.setZoom(3);
        this.cameras.main.startFollow(this.player, true, 0.4, 0.4, -100, -225);

        // Colisões entre inimigos e objetos
        this.physics.add.collider(this.map.enemiesGroup, this.map.propsGroup);

        // Colisão entre inimigos e o jogador
        this.physics.add.collider(this.map.enemiesGroup, this.player, this.enemyHitsPlayer, null, this);

        // Colisão entre beams e inimigos
        this.physics.add.collider(this.player.beamsGroup, this.map.enemiesGroup, this.beamHitsEnemy, null, this);

        // Colisão entre beams e objetos
        this.physics.add.collider(this.player.beamsGroup, this.map.propsGroup, this.beamHitsObject, null, this);

        this.input.keyboard.on('keydown-L', () => {
            this.mapName = 'lab';
            this.floor = 'LabFloor';
            this.scene.restart();
        });
    }

    update() {
        this.player.update();

        this.map.enemiesGroup.getChildren().forEach(enemy => {
            enemy.update(this.player);
        });

        this.player.beamsGroup.getChildren().forEach(beam => {
            beam.update();
        });
    }

    enemyHitsPlayer(player, enemy) {
        player.takeDamage(10); // ajusta o valor do dano conforme necessário
    }

    beamHitsEnemy(beam, enemy) {
        beam.destroyBeamOnCollision();
        enemy.takeDamage();
    }

    beamHitsObject(beam, object) {
        beam.destroyBeamOnCollision();
    }
}
