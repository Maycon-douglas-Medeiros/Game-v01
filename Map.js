class Map extends Phaser.Physics.Arcade.Sprite {
    constructor(scene) {
        var x = 50;
        var y = 50;

        super(scene, x, y, 'map');
  
        this.scene = scene;
        this.rocksGroup = scene.physics.add.group();
    }

    createMap() {
        var image = this.scene.textures.get('map').getSourceImage();
        var canvas = this.scene.textures.createCanvas('canvas', image.width, image.height);
        var ctx = canvas.getContext('2d');

        ctx.drawImage(image, 0, 0);

        var imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        var data = imageData.data;

        for (var y = 0; y < canvas.height; y++) {
            for (var x = 0; x < canvas.width; x++) {
                var index = (x + y * canvas.width) * 4;
                var red = data[index];
                var green = data[index + 1];
                var blue = data[index + 2];
                var hexColor = this.rgbToHex(red, green, blue);

                if (hexColor == '#ff0000') {
                  var rock = new Rock(this.scene);
                  rock.x = x * 32;
                  rock.y = y * 32;
                  rock.setOrigin(0, 0);
                  this.rocksGroup.add(rock);
                } else if (hexColor == '#00ff00') {
                    this.scene.crystal = this.scene.add.tileSprite(x * 32, y * 32, 32, 32, "crystal");
                    this.scene.crystal.setOrigin(0, 0);
                } else if (hexColor == '#0016ff') {
                    this.scene.water = this.scene.add.tileSprite(x * 32, y * 32, 32, 32, "water");
                    this.scene.water.setOrigin(0, 0);
                }
            }
        }
    }

    rgbToHex(r, g, b) {
        return "#" + this.componentToHex(r) + this.componentToHex(g) + this.componentToHex(b);
    }

    componentToHex(c) {
        var hex = c.toString(16);
        return hex.length == 1 ? "0" + hex : hex;
    }
}
